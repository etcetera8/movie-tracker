import React from 'react';
import './Card.css'

const Card = ({ movie , id, handleFavorite }) => {
  const {title, vote_average, vote_count, overview, posterImage} = movie;
  return (
    <div id={id} className="MovieCard">
      <h1 className="movie-title">{title}</h1>
      <button 
        className="favorite-btn"
        onClick={handleFavorite}>FAVORITE</button>
      <img src={posterImage} />
      <h4>Vote Average: {vote_average}</h4>
      <h4>Votes :{vote_count}</h4>
    </div>
  )
}

export default Card;