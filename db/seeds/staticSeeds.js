const exerciseData = [
  {
    exercise_id: 1,
    exercise_name: 'BenchPress',
    exercise_description: 'Do some bench press shenanigans',
    popularity: 1,
  },
  {
    exercise_id: 2,
    exercise_name: 'PullUps',
    exercise_description: 'Do some pull up shenanigans',
    popularity: 1,
  },
  {
    exercise_id: 3,
    exercise_name: 'Chin UPSSSSS',
    exercise_description: 'Something Something Something',
    popularity: 1,
  },
]


const userData = [
  {
    id: 1,
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

const savedExerciseData = [
  {
    id: 1,
    user_id: 1,
    exercise_id: 1
  },
]

const workoutData = [
  {
    title: 'ARM DAY',
    description: 'do some are workouts!',
    user_id: 1,
    popularity: 1,
  }

]



const createExercise = (knex, exercise) => {
  return knex('exercises').insert({
    exercise_name: exercise.exercise_name,
    exercise_description: exercise.exercise_description
  })
};

const createUser = (knex, user) => {
  return knex('users').insert({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password
  })
};

const createSavedExercise = (knex, workout) => {
  return knex('user_exercises').insert({
    user_id: workout.user_id,
    exercise_id: workout.exercise_id
  })
};



module.exports = {
  exerciseData,
  createExercise,
  userData,
  createUser,
  savedExerciseData,
  createSavedExercise
}
