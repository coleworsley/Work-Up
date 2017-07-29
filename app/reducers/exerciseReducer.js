import { randomizeArr } from '../constants';

const defaultExerciseState = {
  statistics: {
    sets: 3,
    reps: 8,
    type: 'Weight',
    measure: 'lbs',
    unit: 180,
  }
}

export const exercises = (state={all:[],current:[]}, action) => {
  switch (action.type) {

    case 'PAGE_FETCH_SUCCESS':
      const { exercises, categories } = action.data;
      const muscleArray = categories[0].results;
      const equipmentArray = categories[1].results;
      const categoryArray = categories[2].results;

      const newExercises = exercises.map(exercise => {
        const muscles = exercise.muscles.map(muscle => {
          return muscleArray.find(category => category.id === muscle);
        })
        const equipment = exercise.equipment.map(e => {
          return equipmentArray.find(category => category.id === e)
        })
        const category = categoryArray.find(e => exercise.category)

        return Object.assign(exercise, {muscles, equipment, category}, defaultExerciseState)
      })

      return Object.assign({}, state, { all: newExercises });

    case 'RANDOMIZE_EXERCISES':
      const randomized = randomizeArr(action.data.array, action.data.count);
      const current = randomized.map(e => Object.assign(e, {popularity: 0}));
      return Object.assign({}, state, { current: current });

    case 'IMAGE_URL_SUCCESS':
      return Object.assign({}, state,
        {
          current: state.current.map(exercise => {
          return exercise.id === action.data.id
            ? Object.assign(exercise, {imageUrls: action.data.urls})
            : exercise
          }),
        })

    case 'CHANGE_EXERCISE_PROPERTY':
      const { id, exercise } = action;

      const newCurrent = state.current.map(e =>  {
        if(id === e.id) {
          if (Object.keys(exercise)[0] === 'popularity') {
            return Object.assign({}, e, { popularity: parseInt(exercise.popularity)})
          }
          const newStatistics = Object.assign({}, e.statistics, exercise)
          return Object.assign({}, e, { statistics: newStatistics } )
        }
        return e
      })
      return Object.assign({}, state, { current: newCurrent })
    default:
      return state;
  }
}

export const pageLoading = (state=false, action) => {
  switch (action.type) {
    case 'PAGE_IS_LOADING':
      return action.pageLoading;
    default:
      return state;
  }
}
