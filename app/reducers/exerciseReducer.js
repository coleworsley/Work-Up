import { randomizeArr } from '../constants';

export const exercises = (state={all:[],current:[]}, action) => {
  switch (action.type) {
    case 'PAGE_FETCH_SUCCESS':
      return Object.assign({}, state, { all: action.data });
    case 'RANDOMIZE_EXERCISES':
      const randomized = randomizeArr(action.data.array, action.data.count)
      const current = randomized.map(e => Object.assign(e, {popularity: 1}))
      return Object.assign({}, state, { current: current })
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
