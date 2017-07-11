import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../user/services/auth.service';

import { IMovie } from '../models/movie.model';
import { IReview } from '../models/review.model';

@Component({
  selector: 'add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  @Input() movie: IMovie;
  @Output() submitNewReview = new EventEmitter();
  @Output() cancelAddReview = new EventEmitter();
  text: string;
  score: number;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  cancel(): void {
    this.cancelAddReview.emit();
  }

  setRate(rate: number) {
    this.score = rate;
  }

  addReview(addReviewForm: NgForm) {
    let newReview = {
      score: addReviewForm.value['score'],
      text: addReviewForm.value['text'],
      movieId: this.movie.id,
      userName: this.auth.currentUser.username
    }
    this.submitNewReview.emit(newReview);
  }

}
