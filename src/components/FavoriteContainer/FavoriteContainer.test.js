import React from 'react';
import { FavoriteContainer } from './FavoriteContainer';
import { shallow } from 'enzyme';
import { cleanMovieArray, userData } from '../../mock-data.js';

describe('FavoriteContainer', () => {
  let wrapper;
  const mockFunction = jest.fn();
  
  beforeEach( () => {
    wrapper = shallow(
      <FavoriteContainer 
        favoriteArray={cleanMovieArray}
        activeUser={userData}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});