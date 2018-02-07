import React, { Component } from 'react';
import { apiMovieData } from '../../api';
import { cleanMovieData } from '../../cleaner';
import { rootReducer } from '../../reducers/reducerIndex';
import { connect, dispatch } from 'react-redux';
import { addMovieData } from '../../actions/actionIndex';
import MovieContainer from '../MovieContainer/MovieContainer';


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
       <h1>Movie Watcher</h1>
       {
       this.props.movieFromStore.length > 0 &&
       <MovieContainer />
       }
       
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

export default connect(mapState, mapDispatchToProps)(App);