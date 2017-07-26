export const workoutReducer = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_WORKOUT_SUCCESS':
      return [...state, action.data.data];
    case 'FETCH_WORKOUT_SUCCESS':
      return action.data.data;
    default:
      return state;
  }
}
