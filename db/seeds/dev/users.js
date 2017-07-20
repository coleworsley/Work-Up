const usersData = [
  {
    first_name: 'Batman',
    last_name: 'Batman',
    email: 'Bruce@Wayne.org',
    password: 'BatDaddy123',
  },
  {
    first_name: 'anotherbat',
    last_name: 'qwerqwef',
    email: 'Brucaweffwe@Wayne.org',
    password: 'BatawefaewDaddy123',
  }
]

const createUser = (knex, user) => {
  return knex('users').insert({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password
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
