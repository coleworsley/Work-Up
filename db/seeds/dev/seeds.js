const mockData = require('../mockData')

exports.seed = (knex, Promise) => {
  return Promise.all(
    [
      knex('user_exercises').del(),
      knex('exercises').del(),
      knex('users').del(),
      knex('workouts').del(),
      knex('workout_exercises').del()
    ])
    .then((promiseArr) => {
      const userTable = promiseArr[2]
      const exerciseTable = promiseArr[1]
      const user_exercisesTable = promiseArr[0]


      let userPromises = [];
      let exercisePromises = [];
      let user_exercisePromises = [];


      mockData.exerciseData.forEach(exercise => {
        exercisePromises.push(mockData.createExercise(knex, exercise));
      });

      mockData.userData.forEach(user => {
        userPromises.push(mockData.createUser(knex, user));
      });

      mockData.savedExerciseData.forEach(user_exercise => {
        user_exercisePromises.push(mockData.createSavedExercise(knex, user_exercise));
      });


      return Promise.all (
        Promise.all(userPromises),
        Promise.all(exercisePromises),
        Promise.all(user_exercisePromises)
      )
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
