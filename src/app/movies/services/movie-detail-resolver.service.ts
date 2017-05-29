import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { MovieService } from '../services/movie.service';

import { IMovie } from '../movie.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieDetailResolver implements Resolve<IMovie> {

  constructor(private movieService: MovieService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovie> {
    let id: number = +route.paramMap.get('id');
    return this.movieService.getMovie(id);
  }

}