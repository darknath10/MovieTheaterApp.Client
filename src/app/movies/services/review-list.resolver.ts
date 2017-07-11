import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';

import { MovieService } from './movie.service';

import { IMovie } from '../models/movie.model';
import { IReview } from '../models/review.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReviewListResolver implements Resolve<IReview[]> {
    movie: IMovie;

    constructor(private movieService: MovieService, private route: ActivatedRoute) {}

    resolve(): Observable<IReview[]> {
        this.route.parent.data.subscribe(data => this.movie = data['movie']);
        return this.movieService.getMovieReviews(this.movie.id);
    }
}