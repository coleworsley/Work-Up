exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('workouts', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('description');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.integer('count');
      table.integer('popularity');
    }),

    knex.schema.createTable('workout_exercises', function(table) {
      table.increments('id').primary();
      table.integer('workout_id').unsigned();
      table.foreign('workout_id').references('workouts.id');
      table.integer('exercise_id').unsigned();
      table.foreign('exercise_id').references('exercises.id');
    }),

    knex.schema.createTable('user_workouts', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.integer('workout_id').unsigned();
      table.foreign('workout_id').references('workouts.id');
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_workouts'),
    knex.schema.dropTable('workout_exercises'),
    knex.schema.dropTable('workouts'),
  ])
};
