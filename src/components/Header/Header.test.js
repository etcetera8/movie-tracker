import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';
import { userData } from '../../mock-data.js';

describe('Header', () => {
  let wrapper;
  
  beforeEach( () => {
    wrapper = shallow(
      <Header activeUser={userData} />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});