import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const Header = () => {
  return(
    <header>
      <h1>Movie Tracker</h1>
      <NavLink className='nav' to='/login'>Login</NavLink>
    </header>
  )
}

export default Header;