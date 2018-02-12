import React from 'react';
import { FavoriteContainer } from './FavoriteContainer';
import { shallow, mount } from 'enzyme';
import { cleanMovieArray, userData, oneMovie } from '../../mock-data.js';

describe('FavoriteContainer', () => {
  let wrapper;
  const mockFunction = jest.fn();
  
  beforeEach( () => {
    wrapper = shallow(
      <FavoriteContainer 
        favoriteArray={cleanMovieArray}
        activeUser={userData}
        toggleFavorite={mockFunction}
        sendFavorite={mockFunction}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleFavorite when handleFavorite is called', () => {
    wrapper.instance().handleFavorite(oneMovie)
    wrapper.update()

    expect(mockFunction).toHaveBeenCalled()
  })
});

