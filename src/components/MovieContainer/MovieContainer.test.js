import React from 'react';
import { MovieContainer } from './MovieContainer';
import { shallow } from 'enzyme';
import { cleanMovieArray, userData, oneMovie, movieRawData } from '../../mock-data.js';

describe('MovieContainer', () => {
  let wrapper;
  const mockFunction = jest.fn();
  
  beforeEach( () => {
    wrapper = shallow(
      <MovieContainer
        movieArray={cleanMovieArray} 
        favoriteArray={cleanMovieArray}
        activeUser={userData}
        getFavorites={mockFunction}
        handleFavorite={mockFunction}
        addFavorite={mockFunction}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should make a fetch call when getFavorites is called', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(movieRawData)
    }))

    wrapper.instance().getFavorites(userData.id)
    wrapper.update()

    expect(window.fetch).toHaveBeenCalled()
  })

  it('should call toggleFavorite when handleFavorite is called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(movieRawData)
    }))

    await wrapper.instance().handleFavorite(oneMovie)
    wrapper.update()

    expect(mockFunction).toHaveBeenCalled()
  })

});