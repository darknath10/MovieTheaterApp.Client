import { IMovie } from '../movie.model';

export function movieUrlBuilder(movie: IMovie): IMovie {
  const tmdbImageUrl = 'http://image.tmdb.org/t/p/original';
  movie.backdrop_path = `${tmdbImageUrl}${movie.backdrop_path}`;
  movie.poster_path = `${tmdbImageUrl}${movie.poster_path}`;
  if(movie.trailer_path) movie.trailer_path = `https://www.youtube.com/embed${movie.trailer_path}`;
  return movie;
}