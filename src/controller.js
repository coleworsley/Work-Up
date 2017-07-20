const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

function login(req, res) {
  db('users').where(req.body).select('id', 'email', 'first_name', 'last_name')
    .then(user => {
      if (user.length) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'email and or password not found'})
      }
    })
    .catch((err) => {
      response.status(500).json({ err })
    })
}

function signup(req, res) {
  const user = req.body

  db('users').insert(user, ['id', 'email', 'first_name', 'last_name'])
    .then(user => res.status(200).json({ user: user[0] }))
    .catch(err => res.status(500).json({ error }))
}

function postWorkout(req, res) {
    db('user_exercises').insert(req.body, '*')
    .then(workout => {
      return res.status(200).json({ data: workout })})
    .catch(err => res.status(500).json({ err, body: req.body }))
}


module.exports = {
  login,
  signup,
  postWorkout,
};
