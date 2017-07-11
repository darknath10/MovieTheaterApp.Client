import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { MovieService } from './movie.service';

import { IMovie } from '../models/movie.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieListResolver implements Resolve<IMovie[]> {

  constructor(private movieService: MovieService) { }

  resolve(): Observable<IMovie[]> {
    return this.movieService.getMovies();
  }
}