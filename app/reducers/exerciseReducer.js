import { randomizeArr } from '../constants';

export const exercises = (state={all:[],current:[]}, action) => {
  switch (action.type) {
    case 'PAGE_FETCH_SUCCESS':
      return Object.assign({}, state, { all: action.data });

    case 'RANDOMIZE_EXERCISES':
      const randomized = randomizeArr(action.data.array, action.data.count);
      const current = randomized.map(e => Object.assign(e, {popularity: 1}));
      return Object.assign({}, state, { current: current });

    case 'IMAGE_URL_SUCCESS':
      console.log(action)
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
