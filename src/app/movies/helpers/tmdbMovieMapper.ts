import { ITmdbMovie, IGenre } from '../models/tmdb-movie.model';
import { IMovie } from '../models/movie.model';

import { movieUrlBuilder } from './movieUrlBuilder';

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
    trailer_path: findTrailerKey(videos)
  }
  return movieUrlBuilder(movie);
}

interface IVideo {
  type: string;
  name: string;
  key: string;
}

function findTrailerKey(videos: IVideo[]): string {
  let video: IVideo = videos.find(v => v.name === 'Official Trailer');
  if(video) return video.key;
  video = videos.find(v => v.type === 'Trailer');
  if(video) return video.key;
  return videos[0].key;
}