const usersData = [
  {
    username: 'Batman',
    email: 'Bruce@Wayne.org',
    password: 'BatDaddy123',
    id: 1
  }
]

const createUser = (knex, user) => {
  return knex('users').insert({
    username: user.username,
    email: user.email,
    password: user.password,
    id: user.id
  })
};


exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      let userPromises = [];

      usersData.forEach(user => {
        userPromises.push(createUser(knex, user));
      });

      return Promise.all(userPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
