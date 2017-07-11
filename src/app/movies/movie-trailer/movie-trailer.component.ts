import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IMovie } from '../models/movie.model';

@Component({
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css']
})
export class MovieTrailerComponent implements OnInit {

  movie: IMovie;
  movieUrl: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.movie = data['movie'];
      this.movieUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer_path);
    });
  }

}
