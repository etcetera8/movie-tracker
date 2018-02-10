import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../../api';
import './MovieContainer.css';
import Card from '../Card/Card';

export class MovieContainer extends Component {
  cardsArray = () => {
    const moviesArray = this.props.movieArray.map((movie, index) => 
      <Card movie={movie}
            id={Date.now() + index}
            key={index}
            handleFavorite={this.handleFavorite}
       />
    )
    return moviesArray
  }

  handleFavorite = (movie) => {
    
    if (this.props.activeUser) {
      const user_id = this.props.activeUser.id
      console.log(user_id);
      movie.user_id = user_id
      
      console.log('movie', movie)
      addFavorite(movie)
    } else {
      this.props.history.push('login')
    }
  }

  render() {
    return (
      <div className="MovieContainer">
        {this.cardsArray()}
      </div>
    )
  }
}

const mapStateToProps = ({movieArray, activeUser}) => ({
    movieArray,
    activeUser
  })

export default connect(mapStateToProps)(MovieContainer)