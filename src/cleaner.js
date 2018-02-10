export const cleanMovieData = (data) => {
  const {results} = data;
  console.log('results, ', results)
  const movieArray = results.map(async (movie) => {
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
    //${movie_id}, ${user_id}, ${title}, ${poster_path}, ${release_date}, ${vote_average}, ${overview}
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

  return Promise.all(movieArray);
 }