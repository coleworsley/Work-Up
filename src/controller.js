const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);
const bookshelf = require('bookshelf')(db);

function login(req, res) {
  db('users').where(req.body)
  .select('id', 'email', 'first_name', 'last_name')
  .then(user => {
    if (user.length) {
      res.status(200).json({
        error: false,
        data: user[0]
      });
    } else {
      res.status(404).json({
        error: true,
        data: {message: 'email or password not found'}})
    }
  })
  .catch((error) => {
      response.status(500).json({
        error: true,
        data: {message: error.message}
      })
    })
}

function signup(req, res) {
  const user = req.body

  db('users').insert(user, ['id', 'email', 'first_name', 'last_name'])
    .then(user => res.status(200).json({
      error: false,
      data: user[0]
    }))
    .catch(error => res.status(500).json({
      error: true,
      data: {message: error.message}
    }))
}

function saveWorkout(req, res) {
  const workout = req.body;
  db('workouts').where('id', workout.id || 0).select()
  .then(response => {
    if (!response.length) {
      const newObject = Object.assign({}, workout, { count: 1 });
      delete newObject.exercises;
      return db('workouts').insert(newObject, 'id')
    } else {
      return db('workouts').where('id', workout.id).update({
        count: db.raw('count + 1'),
        popularity: db.raw('popularity + ?', [workout.popularity])
      }, 'id')
    }
  })
  .then(id => db('user_workouts').insert({
      user_id: workout.user_id,
      workout_id: id[0]
    }).then(()=> {
      return Promise.all(workout.exercises.map(exercise => {
        saveExercise(exercise).then(exercise_id => {
          return db('workout_exercises').insert({
            workout_id: id[0],
            exercise_id: exercise_id[0]
          })
          .then(() => exercise_id[0])
        })
      }))
    })
  )
  .then(() => res.status(200).json({
    error: false,
    data: workout
  }))
  .catch(error => res.status(500).json({
    error: true,
    data: {message: error.message}
  }))
}


function saveExercise(exercise) {
  return db('exercises')
    .where('name', exercise.name)
    .select('*')
    .then(response => {
      if (!response.length) {
        return db('exercises')
          .insert(Object.assign({}, exercise, { count: 1 }), 'id')
      } else {
        return db('exercises').where('name', exercise.name)
        .returning('id').update({
          count: db.raw('count + 1'),
          popularity: db.raw('popularity + ?', [exercise.popularity])
        })
      }
    })
}

function saveExercises(req, res) {
  Promise.all(req.body.map(exercise => saveExercise(exercise)))
  .then(data => res.status(200).json({
    error: false,
    data: data.reduce((a, b) => a.concat(b))}))
  .catch(error => res.status(500).json({
    error: true,
    data: {message: error.message}
  }))
}

function getAllExercises(req, res) {
  db('exercises')
  .select('*')
  .then(exercises => res.status(200).json({
    error: false,
    data: exercises
  }))
  .catch(error => res.status(500).json({
    error: true,
    data: {message: error.message}
  }))
}

function getAllWorkouts(req, res) {
  db('workouts')
  .select()
  .then(workouts => {
    return Promise.all(workouts.map(workout => {
      return db('workout_exercises')
        .where('workout_id', workout.id)
        .select('exercise_id')
        .then(exerciseIdArray => {

          return Promise.all(exerciseIdArray.map(exercise => {
            return db('exercises')
              .where('id', exercise.exercise_id || 0)
              .select()
              .then(exercise => exercise[0])
          }))
          .then(exercises => Object.assign(workout, {exercises}))

        })
    }))
  })
  .then(workouts => res.status(200).json({
    error: false,
    data: workouts
  }))
  .catch(error => res.status(500).json({
    error: true,
    data: {message: error.message}
  }))
}



module.exports = {
  login,
  signup,
  saveExercises,
  getAllExercises,
  getAllWorkouts,
  saveWorkout
};

// addWorkout,
