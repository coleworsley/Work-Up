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

function postWorkout(req, res) {
  db('user_exercises').insert(req.body, '*')
  .then(workout => {
    return res.status(200).json({ data: workout })})
  .catch(err => res.status(500).json({ err, body: req.body }))
}


function saveWorkout(req, res) {
  if (!req.body.id) {
    db('workouts').insert(req.body, '*')
      .then(data => res.status(200).json({ data: data[0], description: `${req.body.description} was added to the db`}))
      .catch(error => res.status(500).json({ error }))
  } else {
    db('workouts').where({ id: req.body.id })
      .update({
        count: db.raw('count + 1'),
        popularity: db.raw('popularity + ?', [req.body.popularity])
      })
      .then(data => res.status(200).json({data: data[0]}))
      .catch(error => res.status(500).json({error}))
      // .increment('popularity', req.body.popularity)
      // .increment('count', 1)
      // .then(workout => {
      //   db('workouts')
      //     .update({
      //       count: workout.count++,
      //       popularity: workout.popularity + req.body.popularity
      //     }, '*')
      //     .then(data => res.status(200).json({ data, description: `${req.body.description} was updated`}))
      //     .catch(error => res.status(500).json({ error, request: req.body }))
      // })
  }


  // db('workouts')
  //   .where({ id: [req.body.id] })
  //   .select('count', 'popularity')
  //   .then(workout => {
  //     if (workout) {
  //       db('workouts').update({
  //         count: workout.count++,
  //         popularity: workout.popularity + req.body.popularity
  //       }, '*')
  //         .then(data => res.status(200).json({ data, description: `${req.body.description} was updated`}))
  //         .catch(error => res.status(500).json({ error }))
  //     } else {
  //       db('workouts').insert(req.body, '*')
  //         .then(data => res.status(200).json({ data, description: `${req.body.description} was added to the db`}))
  //         .catch(error => res.status(500).json({ error }))
  //     }
  //   })
}


module.exports = {
  login,
  signup,
  postWorkout,
  saveWorkout,
};
