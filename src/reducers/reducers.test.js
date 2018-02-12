/* eslint-disable */
import { activeUserReducer } from './activeUserReducer';
import { addFavoriteReducer } from './addFavoriteReducer';
import { addMovieReducer } from './addMovieReducer';
import * as actions from '../actions/actionIndex';

describe('activeUserReducer', () => {

  it('should return the default state', () => {
    const expected = null;
    expect(activeUserReducer(undefined, {})).toEqual(expected)
  });

  it('should return the state with a new user', () => {
    const name = 'bruce';
    const id = 1;
    const expected = {name, id}
    expect(activeUserReducer(undefined, actions.activeUserAction({name: 'bruce', id: 1}))).toEqual(expected)
  });

  it('should return the state with an empty user to logout', () => {
    const currentState = {name: 'bruce', id: 1}
    expect(activeUserReducer(currentState, actions.logoutUser(null))).toEqual(null)
  });
})

describe('addFavoriteReducer', () => {

  it('should return the default state', () => {
    const expected = [];
    expect(addFavoriteReducer(undefined, [])).toEqual(expected)
  })

  it('should return the state with a new favorite movie', () => {
    const mockFavorite = {name:'A Bee Movie', id: 12345 }
    const expected = {name: 'A Bee Movie', id: 12345}
    expect(addFavoriteReducer(undefined, actions.addFavoriteAction(mockFavorite))).toEqual(expected);
  })

})

describe('addMovieReducer', () => {

  it('should return the default state', () => {
    const expected = [];
    expect(addMovieReducer(undefined, [])).toEqual(expected)
  })  

  it('should return the a new movie', () => {
    const expected = [];
    const mockMovie = [{name:'A Bee Movie', id: 12345 }]

    expect(addMovieReducer(undefined, actions.addMovieData(mockMovie))).toEqual(mockMovie)
  })
})