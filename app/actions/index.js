import { EXERCISES_URL,
         EXERCISE_IMG_BASE_URL,
         MUSCLE_URL,
         EQUIPMENT_URL,
         EXERCISE_CATEGORY_URL} from '../constants';


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
        debugger

        dispatch(userLogInSuccess(user.data))
        dispatch(fetchUserExercises(user.data.id))
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
        dispatch(fetchUserExercises(user.data.id))
      }
    })
    .catch(error => dispatch(userLogInFail(error.message)))
  }
}

export const fetchAPIExercises = (user_id) => {
  return (dispatch) => {
    dispatch(pageLoading(true))

    fetch(EXERCISES_URL)
    .then(res => {
      dispatch(pageLoading(false))
      return res
    })
    .then(res => res.json())
    .then(exercises => {
      const { results } = exercises;

      return Promise.all([
        fetch(MUSCLE_URL).then(res => res.json()),
        fetch(EQUIPMENT_URL).then(res => res.json()),
        fetch(EXERCISE_CATEGORY_URL).then(res => res.json()),
      ])
      .then(categories => {
        dispatch(addCategories(categories))
        dispatch(pageDataRetrieved(results, categories))
      })
      .then(() => {
        console.log(user_id);
        if(user_id) dispatch(fetchUserExercises(user_id))
      })
      .then(() => dispatch(randomizeExercises(results, Math.min(results.length, 10))))
    })
    .catch(error => pageDataFailed(error))
  }
}
//
export const fetchImageUrls = (exercise) => {
  return (dispatch) => {
    dispatch(showDetail(exercise))
    if (!exercise.imageUrls) {
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
}

export const fetchCategories = () => {
  return (dispatch) => {
    Promise.all([
      fetch(MUSCLE_URL).then(res => res.json()),
      fetch(EQUIPMENT_URL).then(res => res.json()),
      fetch(EXERCISE_CATEGORY_URL).then(res => res.json()),
    ])
    .then(data => {
      dispatch(addCategories(data))})
    .catch(error => console.log(error))
  }
}

export const addCategories = (array) => {
  return {
    type: 'ADD_CATEGORIES',
    array,
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

export const pageDataRetrieved = (exercises, categories) => {
  return {
    type: 'PAGE_FETCH_SUCCESS',
    data: {exercises, categories},
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

export const fetchUserExercises = (user_id) => {
  return (dispatch) => {
    fetch(`api/v1/exercises/${user_id}`)
    .then(res => res.json())
    .then(({data}) => {
      dispatch(userExercises(data))
    })
    .catch(error => console.log(error))
  }
}

export const userExercises = (exerciseHistory) => {
  return {
    type: 'USER_EXERCISES',
    exerciseHistory: exerciseHistory,
  }
}



export const fetchWorkoutsSuccess = (data) => {
  return {
    type: 'FETCH_WORKOUT_SUCCESS',
    data,
  }
}

export const changeExerciseProperty = (exercise, id) => {
  return {
    type: 'CHANGE_EXERCISE_PROPERTY',
    exercise,
    id
  }
}
