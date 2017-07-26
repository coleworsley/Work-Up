import { EXERCISES_URL,
         EXERCISE_IMG_BASE_URL } from '../constants';


export const fetchUserSignUp = (body) => {
  return (dispatch) => {
    dispatch(userLoading(true))

    fetch('api/v1/signup', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      dispatch(userLoading(false))
      return res;
    })
    .then(res => res.json())
    .then(user => {
      console.log(user)
      if (user.error) {
        dispatch(userLogInFail(user.error))
      } else {
        dispatch(userLogInSuccess(user.data))
      }
    })
    .catch(err => console.log(err))
  }
}

export const userLoading = (bool) => {
  return {
    type: 'USER_IS_LOADING',
    userLoading: bool,
  }
}

export const userLogInSuccess = (user) => {
  return {
    type: 'USER_SUCCESS',
    user,
  }
}

export const userLogInFail = (error) => {
  return {
    type: 'USER_FAIL',
    error,
  }
}

export const fetchUserLogin = (body) => {
  return (dispatch) => {
    dispatch(userLoading(true))

    fetch('api/v1/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      dispatch(userLoading(false))
      return res;
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        dispatch(userLogInFail(user.data))
      } else {
        dispatch(userLogInSuccess(user.data))
      }
    })
    .catch(error => dispatch(userLogInFail(error.message)))
  }
}

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

export const fetchImageUrls = (exercise) => {
  return (dispatch) => {
    dispatch(showDetail(exercise))
    fetch(EXERCISE_IMG_BASE_URL + exercise.id)
    .then(res => res.json())
    .then(data => {
      const urls = data.results.map(e => e.image);
      dispatch(imageUrlSuccess({urls, id: exercise.id}))
      dispatch(showDetail(Object.assign({}, exercise, {imageUrls: urls})))
    })
    .catch(error => console.log(error))
  }
}

export const showDetail = (exercise) => {
  return {
    type: 'SHOW_DETAIL',
    exercise,
  }
}

export const imageUrlSuccess = (data) => {
  return {
    type: 'IMAGE_URL_SUCCESS',
    data,
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

export const pageDataFailed = (error) => {
  return {
    type: 'PAGE_FETCH_FAIL',
    error,
  }
}

export const randomizeExercises = (array, count) => {
  return {
    type: 'RANDOMIZE_EXERCISES',
    data: { array, count },
  }
}


export const saveWorkout = (body) => {
  return (dispatch) => {
    fetch('api/v1/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      dispatch(saveWorkoutSuccess(data))
    })
  }
}

export const saveWorkoutSuccess = (data) => {
  return {
    type: 'SAVE_WORKOUT_SUCCESS',
    data,
  }
}

export const fetchWorkouts = () => {
  return (dispatch) => {
    fetch('api/v1/workouts')
    .then(res => res.json())
    .then(data => {
      dispatch(fetchWorkoutsSuccess(data))
    })
  }
}

export const fetchWorkoutsSuccess = (data) => {
  return {
    type: 'FETCH_WORKOUT_SUCCESS',
    data,
  }
}
