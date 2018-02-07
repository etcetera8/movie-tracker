import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieContainer.css';
import Card from '../Card/Card';

export class MovieContainer extends Component {
  constructor(props) {
    super(props)
  }

  cardsArray = () => {
    const moviesArray = this.props.movieArray.map((movie, index) => 
      <Card movie={movie}
            id={Date.now() + index}
            key={index}
       />
    )
    return moviesArray
  }

  render() {
    return (
      <div className="MovieContainer">
        {this.cardsArray()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movieArray: state.movieArray
  }
}

export default connect(mapStateToProps)(MovieContainer)