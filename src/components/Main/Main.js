import React, {Component} from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieContainer from '../MovieContainer/MovieContainer';
import Login from '../Login/Login';
import Header from '../Header/Header';

export class Main extends Component {
  render() {
    return (
      <div >
        <Route path = '/' component={Header} />
        <Route exact path = '/' component={MovieContainer} />
        <Route exact path = '/login' render={() => (this.props.loginStatus ? (<Redirect to='/'/>) : (<Login />))} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus
});

export default withRouter(connect(mapStateToProps)(Main));