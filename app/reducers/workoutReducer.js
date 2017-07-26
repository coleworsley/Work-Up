export const workoutReducer = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_WORKOUT_SUCCESS':
      return [...state, action.data];
    default:
      return state;
  }
}
