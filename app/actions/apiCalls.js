import { EXERCISES_URL } from '../constants';

export const fetchAPIExercises = (body) => {
  return (dispatch) => {
    dispatch(pageLoading(true))

    fetch(EXERCISES_URL)
    .then(res => {
      dispatch(pageLoading(false))
      return res
    })
    .then(res => res.json())
    .then(exercises => {
      const { results } = exercises
      dispatch(pageDataRetrieved(results))
      dispatch(randomizeExercises(results, Math.min(results.length, 10)))
    })
    .catch(error => pageDataFailed(error))
  }
}


export const pageLoading = (bool) => {
  return {
    type: 'PAGE_IS_LOADING',
    pageLoading: bool,
  }
}

export const pageDataRetrieved = (data) => {
  return {
    type: 'PAGE_FETCH_SUCCESS',
    data,
  }
}
