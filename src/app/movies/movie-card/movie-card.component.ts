import { Component, OnInit, Input } from '@angular/core';

import { ScreenService } from '../../services/screen.service';

import { IMovie } from '../movie.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: IMovie;

  constructor(private screen: ScreenService) { }

  ngOnInit() {
  }

}
