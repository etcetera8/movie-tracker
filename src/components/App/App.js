import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { cleanMovieData } from '../../cleaner';
import { apiMovieData } from '../../api';
import { addMovieData } from '../../actions/actionIndex';
import './App.css';

//components:
import Header from '../Header/Header';
import Main from '../Main/Main';

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
        <Header />
        <Main />
      </div>
    )
  }
}

const mapState = (state) => ({
 movieFromStore: state.movieArray,
 loginStatus: state.activeUser
});

const mapDispatchToProps = (dispatch) => ({
 getMovieData: (data) => dispatch(addMovieData(data)),
});

export default withRouter(connect(mapState, mapDispatchToProps)(App));