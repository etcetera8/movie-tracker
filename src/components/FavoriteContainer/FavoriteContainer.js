import React from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux'
import { getAllFavorites, deleteFavorite, addFavorite } from '../../api'

export const FavoriteContainer = ({ activeUser, history }) => {

  console.log('activeUser: ', activeUser)
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

  const cardsArray = async () => {
    const allFavs = await getAllFavorites(activeUser.id);
    const moviesArray = allFavs.data.map((movie) => 
      <Card 
        movie={movie}
        id={movie.movie_id}
        key={movie.movie_id}
        handleFavorite={handleFavorite}
      /> )
    
    return moviesArray
  }

  return (
    <div>
      {cardsArray()}
    </div>
  )
}

const mapState = (state) => ({
  activeUser: state.activeUser
})

export default connect(mapState)(FavoriteContainer)