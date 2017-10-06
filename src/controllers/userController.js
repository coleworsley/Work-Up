const db = require('../knex');

exports.login = (req, res) => {
  db('users').where(req.body)
  .select('id', 'email', 'first_name', 'last_name')
  .then((user) => {
    if (user.length) {
      res.status(200).json({
        error: false,
        data: user[0],
      });
    } else {
      res.status(404).json({
        error: true,
        data: { message: 'email or password not found' },
      });
    }
  })
  .catch((error) => {
    res.status(500).json({
      error: true,
      data: { message: error.message },
    });
  });
};

exports.signup = (req, res) => {
  const user = req.body;

  db('users').insert(user, ['id', 'email', 'first_name', 'last_name'])
    .then((user) => res.status(200).json({
      error: false,
      data: user[0]
    }))
    .catch((error) => res.status(500).json({
      error: true,
      data: { message: error.message }
    }));
};
