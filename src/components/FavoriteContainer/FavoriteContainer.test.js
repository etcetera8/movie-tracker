import React from 'react';
import FavoriteContainer from './FavoriteContainer';
import { shallow } from 'enzyme';
import { cleanMovieArray } from '../../mock-data.js';

describe('Card', () => {
  let wrapper;
  const mockFunction = jest.fn();
  
  beforeEach( () => {
    wrapper = shallow(
      <FavoriteContainer 
        favoriteArray={cleanMovieArray}
      />);
  });

  it('should match the snapshot test', () => {
    console.log(wrapper.debug());
    //expect(wrapper).toMatchSnapshot();
  });
});