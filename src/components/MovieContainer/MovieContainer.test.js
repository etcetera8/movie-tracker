import React from 'react';
import { MovieContainer } from './MovieContainer';
import { shallow } from 'enzyme';
import { cleanMovieArray, userData } from '../../mock-data.js';

describe('MovieContainer', () => {
  let wrapper;
  
  beforeEach( () => {
    wrapper = shallow(
      <MovieContainer
        movieArray={cleanMovieArray} 
        favoriteArray={cleanMovieArray}
        activeUser={userData}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});