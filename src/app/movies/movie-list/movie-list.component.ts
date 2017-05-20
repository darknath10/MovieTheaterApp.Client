import { Component, OnInit } from '@angular/core';

import { MovieService } from '../services/movie.service';

import { IMovie } from '../movie.model';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => this.movies = movies.map((movie: IMovie) => {
      movie.poster_path = `http://image.tmdb.org/t/p/original/${movie.poster_path}`;
      return movie;
    }));
  }

}
