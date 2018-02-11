import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return(
    <header>
      <NavLink to="/"><h1>Movie Tracker</h1></NavLink>
      <NavLink className="nav" to="/login">Login</NavLink>
      <NavLink to="/favorites"><button>Show Favorites</button></NavLink>
    </header>
  )
}

export default Header;