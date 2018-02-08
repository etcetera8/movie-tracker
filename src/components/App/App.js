import React, { Component } from 'react';
import { apiMovieData } from '../../api';
import { cleanMovieData } from '../../cleaner';
import { connect } from 'react-redux';
import { addMovieData } from '../../actions/actionIndex';
import Main from '../Main/Main';
import { withRouter } from 'react-router-dom'

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
       <Main />
     </div>
   )
 }
}

const mapState = (store) => ({
 movieFromStore: store.movieArray
});

const mapDispatchToProps = (dispatch) => ({
 getMovieData: (data) => dispatch(addMovieData(data))
});

export default withRouter(connect(mapState, mapDispatchToProps)(App));