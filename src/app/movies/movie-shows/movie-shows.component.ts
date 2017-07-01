import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMovie, IShow } from '../movie.model';

@Component({
  selector: 'movie-shows',
  templateUrl: './movie-shows.component.html',
  styleUrls: ['./movie-shows.component.css']
})
export class MovieShowsComponent implements OnInit {
  movie: IMovie;
  shows: IShow[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.movie = data['movie'];
      this.shows = this.movie.shows.map(s => {
        s.date = new Date(s.date);
        return s;
      });
    });
  }

}
