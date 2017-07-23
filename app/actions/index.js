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
      if (user.err) {
        console.log('error')
        dispatch(userLogInFail(user.err))
      } else {
        console.log('success')
        dispatch(userLogInSuccess(user))
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
    console.log(body)
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
        dispatch(userLogInFail(user))
      } else {
        dispatch(userLogInSuccess(user))
      }
    })
    .catch(err => dispatch(userLogInFail(err)))
  }
}

export const fetchAPIExercises = (body) => {
  return (dispatch) => {
    dispatch(pageLoading(true))

    fetch('https://wger.de/api/v2/exercise/?format=json&language=2&license_author=wger.de&limit=66')
    .then(res => {
      dispatch(pageLoading(false))
      return res
    })
    .then(res => res.json())
    .then(exercises => dispatch(pageDataRetrieved(exercises.results)))
    .catch(error => pageDataFailed(error))
  }
}


export const pageLoading = (bool) => {
  return {
    type: 'PAGE_IS_LOADING',
    userLoading: bool,
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
