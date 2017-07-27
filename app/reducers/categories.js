export const categories = (state={}, action) => {
  switch (action.type) {
    case 'ADD_CATEGORIES':
      return {
        muscle: action.array[0].results,
        equipment: action.array[1].results,
        exerciseCategory: action.array[2].results,
      }

    default:
      return state;
  }
}
