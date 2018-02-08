import addMovieReducer from './addMovieReducer';
import { loginStatusReducer } from './loginStatusReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movieArray: addMovieReducer,
  loginStatus: loginStatusReducer,
});

export default rootReducer;