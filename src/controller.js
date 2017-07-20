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
    db('user_exercises').insert(req.body, '*')
    .then(workout => {
      return res.status(200).json({ data: workout })})
    .catch(err => res.status(500).json({ err, body: req.body }))
}


module.exports = {
  getUsers: getUsers,
  postUsers: postUsers,
  postWorkout: postWorkout
};
