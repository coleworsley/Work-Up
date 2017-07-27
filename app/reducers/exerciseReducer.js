import { randomizeArr } from '../constants';

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

        return Object.assign(exercise, {muscles, equipment, category})
      })

      return Object.assign({}, state, { all: newExercises });

    case 'RANDOMIZE_EXERCISES':
      const randomized = randomizeArr(action.data.array, action.data.count);
      const current = randomized.map(e => Object.assign(e, {popularity: 1}));
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
