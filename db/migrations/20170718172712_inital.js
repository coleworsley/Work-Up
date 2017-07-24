
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email').unique();
      table.string('password');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('exercises', function(table) {
      table.increments('id').primary();
      table.string('exercise_name').unique();
      table.string('exercise_description', 2000);
      table.integer('count');
      table.integer('popularity');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('user_exercises', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id')
      table.integer('exercise_id').unsigned();
      table.foreign('exercise_id').references('exercises.id')
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_exercises'),
    knex.schema.dropTable('exercises'),
    knex.schema.dropTable('users'),
  ])
};
