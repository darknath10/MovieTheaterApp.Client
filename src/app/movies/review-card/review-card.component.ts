import { Component, OnInit, Input } from '@angular/core';

import { IReview } from '../models/review.model';

@Component({
  selector: 'review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {
  @Input() review: IReview;
  constructor() { }

  ngOnInit() {
  }

}
