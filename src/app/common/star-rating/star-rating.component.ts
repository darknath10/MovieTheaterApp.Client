import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  score: number;
  @Output() rateEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setRate(rate: number): void {
    this.score = rate;
    this.rateEmitter.emit(rate);
  }

}
