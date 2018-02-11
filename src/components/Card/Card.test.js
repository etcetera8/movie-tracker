import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import { oneMovie } from '../../mock-data.js';

describe('Card', () => {
  let wrapper;
  const mockFunction = jest.fn();
  
  beforeEach( () => {
    wrapper = shallow(
      <Card
        movie={oneMovie}
        id={5123}
        handleFavorite={mockFunction}
        addClass={mockFunction}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});