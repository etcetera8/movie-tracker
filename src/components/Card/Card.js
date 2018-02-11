import React from 'react';
import './Card.css'

const Card = ({ movie , id, handleFavorite, addClass }) => {
  const {title, vote_average, vote_count, overview, poster_path} = movie;
  return (
    <div id={id} className={`MovieCard ${addClass}`}>
      <button 
        className="favorite-btn"
        onClick={() => handleFavorite(movie)}>FAVORITE</button>
      <img src={poster_path} />
    </div>
  )
}

export default Card;