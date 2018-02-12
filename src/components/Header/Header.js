import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/actionIndex';
import PropTypes from 'prop-types';
import './Header.css'

const Header = ({loginStatus, logoutUser}) => {
  const signOut = async () => {
    await logoutUser(false);
  }

  return(
    <header>
      <NavLink to="/"><h1>Movie Tracker</h1></NavLink>
      <NavLink className="nav" to="/login">Login</NavLink>
      <NavLink to="/favorites"><button>Show Favorites</button></NavLink>
      {
        loginStatus &&
        <div>
          <button onClick={signOut}>Sign Out</button>
          <h2>Welcome {loginStatus.name}</h2>
        </div>
      }
    </header>
  )
}

const mapStateToProps = (state) => ({
  loginStatus: state.activeUser,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (login) => dispatch(logoutUser(login)),
});

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);