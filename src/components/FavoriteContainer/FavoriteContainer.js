import React, { Component } from 'react';
import Card from '../Card/Card';
import './FavoriteContainer.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllFavorites, deleteFavorite, addFavorite } from '../../api';
import { addFavoriteAction } from '../../actions/actionIndex';

export class FavoriteContainer extends Component {

  handleFavorite = async (movie) => {
    this.props.activeUser ? this.toggleFavorite(movie) : this.props.history.push('login')
  }

  toggleFavorite = async (movie) => {
    const { favoriteArray } = this.props
    const user_id = this.props.activeUser.id
    const match = favoriteArray.filter(favMovie => favMovie.movie_id === movie.movie_id)

    movie.user_id = user_id;

    if (match.length > 0) {
      const remaining = favoriteArray.filter(favMovie => favMovie.movie_id !== movie.movie_id)
      deleteFavorite(user_id, movie.movie_id ) 
      this.props.addFavorite(remaining)
    } else {
      addFavorite(movie)
    }
  }

  cardsArray () {
    return this.props.favoriteArray.map(movie =>
      <Card
        movie={movie}
        id={movie.movie_id}
        key={movie.movie_id}
        handleFavorite={this.handleFavorite}
      />
    )
  }

  render () {
    return (
      <section className="FavoriteContainer">
        {this.cardsArray()}
      </section>
    )
  }
}

const mapState = (state) => ({
  activeUser: state.activeUser,
  favoriteArray: state.favoriteArray,
})

const mapDispatch = (dispatch) => ({
  addFavorite: (favoriteData) => dispatch(addFavoriteAction(favoriteData)),
})

export default withRouter(connect(mapState, mapDispatch)(FavoriteContainer))