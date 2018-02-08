export const loginStatusReducer = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN_STATUS':
      return action.payload;
    case 'LOGOUT_USER':
      return action.payload;
    default:
      return state;
  }
}