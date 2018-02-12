/* eslint-disable */
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

  it('handleChange should update state when it is called', () => {
    const mockEvent = { target: {name: 'name' ,value: 'brophus park'}};

    wrapper.instance().handleChange(mockEvent);
    wrapper.update();

    expect(wrapper.state().name).toEqual(mockEvent.target.value);
  });

  it('handleSignUp should call getAllUsers')
});