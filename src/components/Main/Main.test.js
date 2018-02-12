/* eslint-disable */
import React from 'react';
import { Main } from './Main';
import { shallow } from 'enzyme';
import { userData } from '../../mock-data.js';

describe('Main', () => {
  let wrapper;
  
  beforeEach( () => {
    wrapper = shallow(
      <Main
        activeUser={userData}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});