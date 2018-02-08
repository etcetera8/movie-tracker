import React, {Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Login } from '../Login/Login';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import { connect } from 'react-redux';

export class Main extends Component {
    render() {
      console.log('main props', this.props);
      return (
        <div >
          <Route path = '/' component={Header} />
          <Route exact path = '/' component={MovieContainer} />
          <Route exact path = '/login' render={() => (this.props.loginStatus ? (<Redirect to='/'/>) : (<Login />))} />
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  debugger
  return{
    loginStatus: state.loginStatus
  }
}

export default connect(mapStateToProps)(Main);