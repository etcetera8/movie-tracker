import React from 'react';
import { FavoriteContainer } from './FavoriteContainer';
import { shallow, mount } from 'enzyme';
import { cleanMovieArray, userData } from '../../mock-data.js';

describe('FavoriteContainer', () => {
  let wrapper;
  const mockFunction = jest.fn();
  
  beforeEach( () => {
    wrapper = shallow(
      <FavoriteContainer 
        favoriteArray={cleanMovieArray}
        activeUser={userData}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should make a fetch call when toggleFavorite is called', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(data)
    }))

    wrapper.instance().handleFavorite()
    wrapper.update()
    toggleFavorite = jest.fn()
    //handleFavorite = jest.fn()
    //console.log(wrapper.instance())
    expect(wrapper.instance().toggleFavorite).toHaveBeenCalled()
  })

  // it('should call handleFavorite when favorite button is clicked', async () => {
  //   wrapper = mount(
  //     <FavoriteContainer 
  //       favoriteArray={cleanMovieArray}
  //       activeUser={userData}
  //     />);
  //   console.log(wrapper.debug())
  //   const instance = wrapper.instance()

  //   instance.handleFavorite = jest.fn()
  //   await wrapper.find('.favorite-btn').first().simulate('click', () => {handleFavorite()})
  //   wrapper.update()

  //   expect(instance.handleFavorite).toHaveBeenCalled()
  // })
});

