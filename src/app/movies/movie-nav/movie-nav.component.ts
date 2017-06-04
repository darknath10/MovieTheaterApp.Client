import { Component, OnInit, Input } from '@angular/core';

import { IMovie } from '../movie.model';

@Component({
  selector: 'movie-nav',
  templateUrl: './movie-nav.component.html',
  styleUrls: ['./movie-nav.component.css']
})
export class MovieNavComponent implements OnInit {
  @Input() movie: IMovie;
  constructor() { }

  ngOnInit() {
  }

}
