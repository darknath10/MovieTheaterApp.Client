import { Component, OnInit } from '@angular/core';

import { AuthService } from '../user/services/auth.service';
import { MovieService } from '../movies/services/movie.service';

import { IMovie } from '../movies/models/movie.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  term: string = '';
  moviesResult: IMovie[];

  constructor(private auth: AuthService, private movieService: MovieService) { }

  ngOnInit() {
  }

  searchMovies(term) {
    this.movieService.searchMovies(term).subscribe((movies: IMovie[]) => {
      this.moviesResult = movies;
    });
  }

}
