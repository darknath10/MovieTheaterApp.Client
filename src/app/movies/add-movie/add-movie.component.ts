import { Component, OnInit } from '@angular/core';

import { TmdbService } from '../services/tmdb.service';

import 'rxjs/add/operator/map';

import { IMovie } from '../movie.model';
import { movieUrlBuilder } from '../helpers/movieUrlBuilder';

@Component({
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  term: string;
  results: IMovie[];

  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
  }

  search(term) {
    return this.tmdb.searchMovie(term).subscribe(data => {
      this.results = data['results'].map((movie: IMovie) => movieUrlBuilder(movie))
      console.log(this.results);
    });
  }

}
