import addMovieReducer from './addMovieReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movieArray: addMovieReducer
});

export default rootReducer;