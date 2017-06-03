export interface ITmdbMovie {
  backdrop_path: string;
  genres: IGenre[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  videos: object;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  name: string;
}