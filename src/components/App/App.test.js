import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { cleanMovieArray, userData } from '../../mock-data.js';

describe('App', () => {
  let wrapper;
  
  beforeEach( () => {
    wrapper = shallow(
      <App
        loginStatus={userData}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});