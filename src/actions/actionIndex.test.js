import * as actions from './actionIndex';

describe('all actions', () => {

  it('addMovieData function should return movie data', () => {
    const mockData = {name: 'A Bee Movie'}
    const expected = {type: 'ADD_MOVIEDATA', payload: mockData};
    expect(actions.addMovieData(mockData)).toEqual(expected)
  })

  it('activeUserAction should return user data', () => {
    const mockData = {name: 'Bruce'}
    const expected = {type: 'ACTIVE_USER', payload: mockData};
    expect(actions.activeUserAction(mockData)).toEqual(expected)
  })

  it('logoutUser should return null', () => {
    const mockData = null;
    const expected = {type: 'LOGOUT_USER', payload: mockData};
    expect(actions.logoutUser(mockData)).toEqual(expected)
  })

  it('addFavoriteAction should return favorite data', () => {
    const mockData = {name: 'A Bee Movie'};
    const expected = {type: 'ADD_FAVORITE', payload: mockData};
    expect(actions.addFavoriteAction(mockData)).toEqual(expected)
  })
})