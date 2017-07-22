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
    .catch(err => dispatch(userLogInFail('something went wrong ahhHHHHHHH!H!H!H!H!HH!!!!!')))
  }
}
