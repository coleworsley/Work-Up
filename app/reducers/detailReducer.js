export const detailReducer = (state={}, action) => {
  switch (action.type) {
    case 'SHOW_DETAIL':
      return action.exercise;
    default:
      return state
  }
}
