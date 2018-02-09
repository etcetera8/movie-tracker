import React, {Component} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieContainer from '../MovieContainer/MovieContainer';
import Login from '../Login/Login';

export class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = '/' 
               component={MovieContainer} />
        <Route path = '/login' 
               render={() => (this.props.loginStatus ? 
                  (<Redirect to='/'/>) 
                  : (<Login />))} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus
});

export default withRouter(connect(mapStateToProps)(Main));