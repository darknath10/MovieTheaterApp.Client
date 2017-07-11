import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TOASTR_TOKEN, IToastr } from '../../services/index';
import { AuthService } from '../../user/services/auth.service';
import { MovieService } from '../services/movie.service';

import { IMovie } from '../models/movie.model';
import { IReview } from '../models/review.model';

@Component({
  selector: 'review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  movie: IMovie;
  reviews: IReview[];
  addReviewMode: boolean = false;

  constructor(private route: ActivatedRoute, 
    private auth: AuthService, 
    private movieService: MovieService,
    @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.reviews = data['reviews']);
    this.route.parent.data.subscribe(data => this.movie = data['movie']);
  }

  userHasReview(): boolean {
    if(!!this.auth.currentUser) return this.reviews.some(r => r.user['userName'] === this.auth.currentUser.username);
    return true;
  }

  toggleAddReviewMode(): void {
    this.addReviewMode = !this.addReviewMode;
  }

  addReview(review) {
    this.movieService.addMovieReview(review, this.movie.id).subscribe(data => {
      this.toastr.success('Thanks for reviewing');
      this.reviews.push(data);
      this.toggleAddReviewMode();
    }, (error: Error) => this.toastr.error('An error occured. Try again.'));
  }

}
