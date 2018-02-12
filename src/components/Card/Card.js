import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({ movie , id, handleFavorite, addClass }) => {
  const {title, vote_average, vote_count, overview, poster_path} = movie;
  return (
    <article 
      id={id}
      className={`MovieCard ${addClass}`}
      onTouchStart="this.classList.toggle('hover')">
        <div className="MovieCard-front">
          <button
            className="favorite-btn"
            onClick={() => handleFavorite(movie)}>FAVORITE</button>
          <img src={poster_path} alt="Movie Poster" />
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

Card.propTypes = {
  movie: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  addClass: PropTypes.string,
  handleFavorite: PropTypes.func.isRequired
};

export default Card;