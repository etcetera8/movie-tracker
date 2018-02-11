export const toggleFavoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return action.payload;
    default:
      return state;
  }
}