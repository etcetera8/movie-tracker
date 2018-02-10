import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, getAllFavorites, deleteFavorite } from '../../api';
import './MovieContainer.css';
import Card from '../Card/Card';

export const MovieContainer = ({ movieArray, activeUser, history }) => {
  const cardsArray = () => {
    const moviesArray = movieArray.map((movie, index) => 
      <Card 
        movie={movie}
        id={Date.now() + index}
        key={index}
        handleFavorite={handleFavorite}
      /> )
    
    return moviesArray
  }

  const handleFavorite = async (movie) => {
    activeUser ? toggleFavorite(movie) : history.push('login')
  }

  const toggleFavorite = async (movie) => {
    const user_id = activeUser.id
    const allFavs = await getAllFavorites(user_id);
    const match = allFavs.data.filter(favMovie => favMovie.movie_id === movie.movie_id)
    
    movie.user_id = user_id

    match.length > 0 ? 
      deleteFavorite(user_id, movie.movie_id ) : addFavorite(movie) 
    }

  return (
    <div className="MovieContainer">
      {cardsArray()}
    </div>
  )
}

const mapStateToProps = ({movieArray, activeUser}) => ({
    movieArray,
    activeUser
  })

export default connect(mapStateToProps)(MovieContainer)