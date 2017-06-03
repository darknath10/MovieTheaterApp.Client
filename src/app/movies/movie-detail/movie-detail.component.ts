import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ScreenService } from '../../services/screen.service';

import { IMovie } from '../movie.model';

import { movieUrlBuilder } from '../helpers/movieUrlBuilder';

@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: IMovie;

  constructor(private route: ActivatedRoute, private screen: ScreenService) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.movie = movieUrlBuilder(data['movie']));
  }

}
