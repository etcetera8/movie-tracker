export const cleanMovieData = (data) => {
  const {results} = data;
  const movieArray = results.map(async (movie) => {
    const {title, vote_count, vote_average, overview, poster_path} = movie;
    const posterImage = `https://image.tmdb.org/t/p/w500/${poster_path}`

    return {
      title,
      vote_average,
      vote_count,
      overview,
      posterImage
    }
  });

  return Promise.all(movieArray);
 }