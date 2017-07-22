const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

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
      return db('workout_history')
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
      exercise_id: exercise.exercise_id,
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
    .then(data => res.status(200).json({ sucess: true, data }))
    .catch(error => res.status(500).json({ error: error }))
}

module.exports = {
  login,
  signup,
  addWorkout,
};
