import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MovieService } from './movie.service';

import { IMovie } from '../models/movie.model';
import { IReview } from '../models/review.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReviewListResolver implements Resolve<IReview[]> {
    movie: IMovie;

    constructor(private movieService: MovieService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReview[]> {
        this.movie = route.parent.data['movie'];
        return this.movieService.getMovieReviews(this.movie.id);
    }
}