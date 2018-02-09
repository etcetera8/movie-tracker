import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  handleFavorite = () => {
    console.log('props: ', this.props)
    console.log('history: ', this.props.history.push)
    
    if (!this.props.loginStatus) {
      this.props.history.push('login')
    } //else statement to push fav if loggedIn
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