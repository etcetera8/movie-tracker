export const addMovieData = (movieData) => ({
  type: 'ADD_MOVIEDATA',
  payload: movieData,
});

export const loginStatus = (login) => ({
  type: 'LOGIN_STATUS',
  payload: login,
})

export const logoutUser = (login) => ({
  type: 'LOGOUT_USER',
  payload: login,
})