const exerciseData = [
  {
    exercise_name: 'BenchPress',
    exercise_description: 'Do some bench press shenanigans'
  },
  {
    exercise_name: 'PullUps',
    exercise_description: 'Do some pull up shenanigans'
  },
  {
    exercise_name: 'Chin UPSSSSS',
    exercise_description: 'Something Something Something'
  }
]

const createExercise = (knex, exercise) => {
  return knex('exercises').insert({
    exercise_name: exercise.exercise_name,
    exercise_description: exercise.exercise_description
  })
};


exports.seed = (knex, Promise) => {
  return knex('exercises').del()
    .then(() => {
      let promises = [];

      exerciseData.forEach(exercise => {
        promises.push(createExercise(knex, exercise));
      });

      return Promise.all(promises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
