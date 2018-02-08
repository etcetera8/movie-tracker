import React, { Component } from 'react';
import { apiMovieData } from '../../api';
import { cleanMovieData } from '../../cleaner';
import { connect } from 'react-redux';
import { addMovieData } from '../../actions/actionIndex';
//import { Main } from '../Main/Main';

import MovieContainer from '../MovieContainer/MovieContainer';
import  Login  from '../Login/Login';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Header from '../Header/Header';

export class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     movieData: []
   }
 }

 async componentDidMount() {
   const movies = await this.getInitialData();

   await this.props.getMovieData(movies);
 }

 getInitialData = async () => {
   const movieData = await apiMovieData();
   const cleanData = await cleanMovieData(movieData);

   this.setState({movieData: [...cleanData]})
   return cleanData;
 }

 render() {
   return (
     <div>
        <Route path = '/' component={Header} />
        <Route exact path = '/' component={MovieContainer} />
        <Route path = '/login' render={() => !this.props.loginStatus ? (<Login />) : <Redirect to='/' /> } />
     </div>
   )
 }
}

const mapState = (state) => ({
 movieFromStore: state.movieArray,
 loginStatus: state.loginStatus

});

const mapDispatchToProps = (dispatch) => ({
 getMovieData: (data) => dispatch(addMovieData(data))
});

export default withRouter(connect(mapState, mapDispatchToProps)(App));