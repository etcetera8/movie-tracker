import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'
import FontAwesome from '@fortawesome/react-fontawesome';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';

const Card = ({ movie , id, handleFavorite, addClass }) => {
  const {title, vote_average, vote_count, overview, poster_path} = movie;
  return (
    <div className="movie-wrapper">
    <article id={id} className={`MovieCard ${addClass}`}>
        <div className="MovieCard-flipper">
          <div className="MovieCard-front">
            <img src={poster_path} />
          </div>
          <div className="MovieCard-back">
            <h1 className="movie-title">{title}</h1>
            <p className="movie-overview">{overview}</p>
            <h4>Vote Average: {vote_average}</h4>
            <h4>Votes :{vote_count}</h4>
          </div>
        </div>
    </article>
        <button
          className={`favorite-btn ${addClass}`}
          onClick={() => handleFavorite(movie)}>
            <FontAwesome icon={faThumbsUp} size='2x'/>
        </button>
    </div>
  )
}

Card.propTypes = {
  movie: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  addClass: PropTypes.string,
  handleFavorite: PropTypes.func.isRequired
};

export default Card;