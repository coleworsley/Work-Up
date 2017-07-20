export const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'USER_SUCCESS':
      return action.user;
    default:
      return state;
  }
}

export const userLoading = (state=false, action) => {
  switch (action.type) {
    case 'USER_IS_LOADING':
      return action.userLoading;
    default:
      return state;
  }
}
