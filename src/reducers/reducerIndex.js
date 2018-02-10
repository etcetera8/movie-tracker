import { addMovieReducer } from './addMovieReducer';
import { activeUserReducer } from './activeUserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movieArray: addMovieReducer,
  activeUser: activeUserReducer,
});

export default rootReducer;