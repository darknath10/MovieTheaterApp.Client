import { ITmdbMovie, IGenre } from '../tmdb-movie.model';
import { IMovie } from '../movie.model';

export function tmdbMovieMapper(tmdbMovie: ITmdbMovie): IMovie {
  let videos: IVideo[] = tmdbMovie.videos['results'];

  let movie: IMovie = {
    id: null,
    backdrop_path: tmdbMovie.backdrop_path,
    genres: tmdbMovie.genres.map(g => g.name).join(', '),
    tmdb_id: tmdbMovie.id,
    overview: tmdbMovie.overview,
    popularity: tmdbMovie.popularity,
    poster_path: tmdbMovie.poster_path,
    release_date: tmdbMovie.release_date,
    runtime: tmdbMovie.runtime,
    status: tmdbMovie.status,
    tagline: tmdbMovie.tagline,
    title: tmdbMovie.title,
    vote_average: tmdbMovie.vote_average,
    vote_count: tmdbMovie.vote_count,
    trailer_path: videos.find(v => v.name === 'Official Trailer').key
  }
  return movie;
}

interface IVideo {
  name: string;
  key: string;
}