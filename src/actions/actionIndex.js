export const addMovieData = (movieData) => ({
  type: 'ADD_MOVIEDATA',
  payload: movieData,
});

export const activeUserAction = (user) => ({
  type: 'ACTIVE_USER',
  payload: user,
})

export const logoutUser = (login) => ({
  type: 'LOGOUT_USER',
  payload: login,
})