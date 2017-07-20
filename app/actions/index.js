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
      dispatch(userSignUpSuccess(user))})
    .catch(err => console.log(err))
  }
}

export const userLoading = (bool) => {
  return {
    type: 'USER_IS_LOADING',
    userLoading: bool,
  }
}

export const userSignUpSuccess = (user) => {
  return {
    type: 'USER_SUCCESS',
    user,
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
    .then(data => {
      dispatch(userSignUpSuccess(data))})
    .catch(err => console.log(err))
  }
}
