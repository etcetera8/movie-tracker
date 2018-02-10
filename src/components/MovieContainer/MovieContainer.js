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
    console.log('props: ', this.props)
    
    if (!this.props.loginStatus) {
      this.props.history.push('login')
    } else {
      console.log('movie', movie)
      addFavorite(movie)
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

const mapStateToProps = ({movieArray, loginStatus}) => ({
    movieArray,
    loginStatus 
  })

export default connect(mapStateToProps)(MovieContainer)