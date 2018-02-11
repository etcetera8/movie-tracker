import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, getAllFavorites, deleteFavorite } from '../../api';
import './MovieContainer.css';
import Card from '../Card/Card';

export const MovieContainer = ({ favoriteArray, movieArray, activeUser, history }) => {
  const cardsArray = () => {
    const moviesArray = movieArray.map(movie => {
      const allId = favoriteArray.map(movie => movie.movie_id)
      const favorite = allId.includes(movie.movie_id) ? 'favorited' : ''

      return (
        <Card 
          addClass={favorite}
          movie={movie}
          id={movie.movie_id}
          key={movie.movie_id}
          handleFavorite={handleFavorite}
        /> 
      )
    })
    
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
      {
        cardsArray()
      }
    </div>
  )
}

const mapStateToProps = ({movieArray, activeUser, favoriteArray}) => ({
  movieArray,
  activeUser,
  favoriteArray,
})

export default connect(mapStateToProps)(MovieContainer)