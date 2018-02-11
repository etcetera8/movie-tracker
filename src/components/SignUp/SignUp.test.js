import React from 'react';
import { SignUp } from './SignUp';
import { shallow } from 'enzyme';
import { userData } from '../../mock-data.js';

describe('SignUp', () => {
  let wrapper;
  
  beforeEach( () => {
    wrapper = shallow(
      <SignUp />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});