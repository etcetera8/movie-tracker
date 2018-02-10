export const activeUserReducer = (state = null, action) => {
  switch(action.type) {
    case 'ACTIVE_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return action.payload;
    default:
      return state;
  }
}