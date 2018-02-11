export const cleanMovieData = (data) => {
  const {results} = data;
  const movieArray = results.map((movie) => {
    let {
      id, 
      title, 
      vote_count, 
      vote_average, 
      overview, 
      poster_path, 
      release_date
    } = movie;
    poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`

    return {
      movie_id: id,
      title,
      vote_average,
      vote_count,
      overview,
      release_date,
      poster_path
    }
  });

  return movieArray;
 }