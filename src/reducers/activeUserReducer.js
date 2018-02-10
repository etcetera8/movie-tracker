export const activeUserReducer = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN_STATUS':
      return {
        loginStatus: action.payload,
      };
    case 'LOGOUT_USER':
      return action.payload;
    default:
      return state;
  }
}