import { addMovieReducer } from './addMovieReducer';
import { activeUserReducer } from './activeUserReducer';
import { addFavoriteReducer } from './addFavoriteReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movieArray: addMovieReducer,
  activeUser: activeUserReducer,
  favoriteArray: addFavoriteReducer,
});

export default rootReducer;