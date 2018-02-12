/* eslint-disable */
import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';
import { userData } from '../../mock-data.js';

describe('Login', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(
      <Login
        activeUser={userData}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});