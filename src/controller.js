const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

function getUsers(req, res) {
  db('users').select()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      response.status(500).json({ err })
    })
}

function postUsers(req, res) {
  const user = req.body

  db('users').insert(user, '*')
    .then(user => res.status(200).json({ data: user }))
    .catch(err => res.status(500).json({ error }))
}

function postWorkout(req, res) {
  // Promise.all([
  //   db('users').select(req.user_id)
  //
  // ])
  // db('users').select(req.user_id)
  //   .then(ret => res.status(200).json({ ret }))
  //   .catch(err => res.status(500).json({ err }))


    db('user_workouts').insert(req.body, '*')
    .then(workout => res.status(200).json({ data: workout }))
    .catch(err => res.status(500).json({ err }))
  // where('id', req.body.user_id)
}


module.exports = {
  getUsers: getUsers,
  postUsers: postUsers,
  postWorkout: postWorkout
};
