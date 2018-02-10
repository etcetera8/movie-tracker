import React, {Component} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieContainer from '../MovieContainer/MovieContainer';
import FavoriteContainer from '../FavoriteContainer/FavoriteContainer'
import Login from '../Login/Login';

export const Main = ({loginStatus}) => (
  <Switch>
    <Route 
      exact path="/"
      component={MovieContainer} 
    />
    <Route 
      path="/favorites"
      component={FavoriteContainer}
    />
    <Route 
      path="/login" 
      render={() => (loginStatus ? <Redirect to="/"/> : <Login />)} 
    />
  </Switch>
)

const mapStateToProps = (state) => ({
  loginStatus: state.activeUser
});

export default withRouter(connect(mapStateToProps)(Main));