import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { TmdbService } from '../services/tmdb.service';
import { MovieService } from '../services/movie.service';
import { ScreenService } from '../../services/screen.service';
import { IToastr, TOASTR_TOKEN } from '../../services/toastr.service';

import 'rxjs/add/operator/map';

import { IMovie } from '../movie.model';
import { ITmdbMovie } from '../tmdb-movie.model';
import { movieUrlBuilder } from '../helpers/movieUrlBuilder';
import { tmdbMovieMapper } from '../helpers/tmdbMovieMapper';

@Component({
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movies: IMovie[];
  term: string;
  results: IMovie[];

  constructor(
    private router: Router,
    private tmdb: TmdbService,
    private movieService: MovieService, 
    private screen: ScreenService,
    @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  ngOnInit() {
    return this.movieService.getMovies().subscribe(data => this.movies = data);
  }

  search(term) {
    return this.tmdb.searchMovie(term).subscribe(data => {
      this.results = data['results'].map((movie: IMovie) => movieUrlBuilder(movie))
    });
  }

  isInDb(tmdbId: number): boolean {
    return this.movies.some(m => m.tmdb_id === tmdbId);
  }

  addMovie(tmdbId: number) {
    this.tmdb.getMovieDetails(tmdbId).subscribe(data => {
      return this.movieService.addMovie(tmdbMovieMapper(data)).subscribe(data => {
        this.toastr.success(`${data.title} added to Catalog.`);
        this.router.navigate(['movies', data.id]);
      });
    });
  }

}
