export interface IShow {
  date: Date,
  hall: string,
  availablePlaces: number
}

export interface IMovie {
  id: number,
  backdrop_path: string,
  tmdb_id: number,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  runtime: number,
  status: string,
  tagline: string,
  title: string,
  trailer_path: string,
  vote_average: number,
  vote_count: number,
  genres: string,
  shows: IShow[]
}