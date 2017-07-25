const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);
const bookshelf = require('bookshelf')(db);


const Users = bookshelf.Model.extend({
  tableName: 'users'
});

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  verifyPassword: function(password) {
      return this.get('password') === password;
  },

  workouts: function() {
    return this.hasMany(Workout)
  }
}, {
  byEmail: function(email) {
      return this.forge().query({where:{ email: email }}).fetch();
  }
});

const Workout = bookshelf.Model.extend({
  tableName: 'workouts',

  User: function() {
    return this.belongsTo(User)
  }
})

User.byEmail('').then(function(u) {
    console.log('Got user:', u.get('first_name'));
});

var data = {
    first_name: 'Joe',
    last_name: 'Joe',
    email: 'smitch@example.com',
    password: 28
}

User.forge(data).save().then(function(u) {
    console.log('User saved:', u.get('first_name'));
});



function getUsersTest(req, res ) {
  new Users().fetchAll()
  .then(function(articles) {
    res.send(articles.toJSON());
  }).catch(function(error) {
    console.log(error);
    res.send('An error occured');
  });

}




function login(req, res) {
  db('users').where(req.body).select('id', 'email', 'first_name', 'last_name')
    .then(user => {
      if (user.length) {
        res.status(200).json(user[0]);
      } else {
        res.status(404).json({ error: 'email and or password not found'})
      }
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
}

function signup(req, res) {
  const user = req.body

  db('users').insert(user, ['id', 'email', 'first_name', 'last_name'])
    .then(user => res.status(200).json(user[0]))
    .catch(error => res.status(500).json({ error }))
}

function workoutObj(workout) {
  return {
    title: workout.title,
    description: workout.description,
    count: 1,
    user_id: workout.user_id,
    popularity: workout.popularity,
  }
}

function addNewWorkout(workout) {
  return db('workouts')
    .insert(workoutObj(workout), '*')
    .then(res => {
      return db('user_workouts')
        .insert({
          user_id: workout.user_id,
          workout_id: res[0].id,
        }, '*')
        .then(res => {
          return Promise.all(updateWorkoutHistory(workout, res[0].workout_id))
        })
        .catch(error => ({ error, insert: 'failed'}))
    })
}

function updateWorkout(workout) {
  return db('workouts')
    .where({ id: workout.workout_id})
    .update({
      count: db.raw('count + 1'),
      popularity: db.raw('popularity + ?', [workout.popularity])
    }, '*')
    .then(res => Promise.all(updateWorkoutHistory(workout)))
    .catch(error => ({ error, update: 'failed'}))
}

function updateWorkoutHistory(workout, workout_id) {
  return workout.exercises.map(exercise => {
    return db('workout_exercises').insert({
      workout_id: workout.workout_id || workout_id,
      exercise_id: exercise.id,
    }, '*')
    .then(res => ({ history: 'success', value: res[0] }))
    .catch(error => ({ error, history: 'failed'}))
  })
}

function createWorkoutPromises(req) {
  const workout = req.body;
  return !workout.workout_id ? addNewWorkout(workout) : updateWorkout(workout)
}

function addWorkout(req, res) {
  createWorkoutPromises(req)
    .then(data => res.status(200).json({ success: true, data }))
    .catch(error => res.status(500).json({ error: error }))
}


function saveExercise(req, res) {
  console.log(req.body)
  const promises = req.body.map(exercise => {
    // console.log(exercise)
    return db('exercises')
      .where('name', exercise.name )
      .select('*')
      .then(response => {
        if (!response.length) {
          return db('exercises').insert(Object.assign({}, exercise, { count: 1 }), '*')
          .then(() => {
          return `${exercise.name} was inserted`})
        } else {
          return db('exercises').where('name', exercise.name).update({
            count: db.raw('count + 1'),
            popularity: db.raw('popularity + ?', [exercise.popularity])
          })
          .then(() => `${exercise.name} was updated`)
        }
      })
    })

  Promise.all(promises)
    .then(data => res.status(200).json({ data }))
    .catch(error => res.status(500).json({ error }))
}


function getAllExercises(req, res) {
  db('exercises')
  .select('*')
  .then(exercises => res.status(200).json(exercises))
  .catch(error => res.status(500).json(error))
}

function getAllWorkouts(req, res) {
  db('workouts')
  .select('*')
  .then(workouts => {
    console.log('workouts', workouts)
    return workouts.map(workout => {
      console.log('workout', workout)
      workout.exercises = db('workout_exercises')
      .where('workout_id', workout.id).select('*').then(exerciseList => {
        return exerciseList
      })
      return workout
    })
  })
  .then(response => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
}



module.exports = {
  login,
  signup,
  addWorkout,
  saveExercise,
  getAllExercises,
  getAllWorkouts,
  getUsersTest
};
