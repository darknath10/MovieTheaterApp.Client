import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ScreenService } from '../../services/screen.service';

import { IMovie } from '../movie.model';


@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: IMovie;
  visible: boolean = false;

  constructor(private route: ActivatedRoute, private screen: ScreenService) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.movie = data['movie']);
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
  }

}
