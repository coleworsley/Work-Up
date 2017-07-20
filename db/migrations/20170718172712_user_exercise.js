
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('password');
      table.timestamps('last_activity');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('exercises', function(table) {
      table.increments('id').primary();
      table.string('exercise_name');
      table.string('exercise_description');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('user_exercises', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.integer('exercise_id').unsigned();
      table.foreign('user_id').references('users.id')
      table.foreign('exercise_id').references('exercises.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('exercises'),
    knex.schema.dropTable('users')
  ])
};
