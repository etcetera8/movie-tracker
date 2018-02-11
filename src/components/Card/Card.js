import React from 'react';
import './Card.css'

const Card = ({ movie , id, handleFavorite, addClass }) => {
  const {title, vote_average, vote_count, overview, poster_path} = movie;
  return (
    <article  id={id}
      className={`MovieCard ${addClass}`}
      ontouchstart="this.classList.toggle('hover')">
        <div className="MovieCard-front">
          <button
            className="favorite-btn"
            onClick={() => handleFavorite(movie)}>FAVORITE</button>
          <img src={poster_path} />
        </div>
        <div className="MovieCard-back">
          <h1 className="movie-title">{title}</h1>
          <p className="movie-overview">{overview}</p>
          <h4>Vote Average: {vote_average}</h4>
          <h4>Votes :{vote_count}</h4>
        </div>
    </article>
  )
}

export default Card;