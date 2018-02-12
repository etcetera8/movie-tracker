/* eslint-disable */
import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { cleanMovieArray, userData } from '../../mock-data.js';

describe('App', () => {
  let wrapper;
  
  beforeEach( () => {
    wrapper = shallow( <App loginStatus={userData}/> );
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch moviedata when getInitalData is called on load', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(data)
    }))

    wrapper.instance().getInitialData()
    wrapper.update()

    expect(window.fetch).toHaveBeenCalled()
  })
});