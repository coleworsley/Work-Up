const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

// function getUsers(req, res, next) {
//   request('api/users/', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body)
//     }
//   })
// }

function getUsers(req, res) {
  db('users').select()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
}

function postUsers(req, res) {
  const user = req.body

  db('users').insert(user, '*')
    .then(user => res.status(200).json({ data: user }))
    .catch(err => res.status(500).json({ error }))
}


module.exports = {
  getUsers: getUsers,
  postUsers: postUsers
};
