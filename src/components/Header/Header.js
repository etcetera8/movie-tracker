import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <h1>Movie Tracker</h1>
      <NavLink className='nav' to='/login'>Login/Sign-up</NavLink>
    </header>
  )

}

export default Header;