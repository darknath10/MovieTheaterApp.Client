import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MovieService } from '../services/movie.service';
import { TmdbService } from '../services/tmdb.service';
import { IToastr, TOASTR_TOKEN } from '../../services/index';

import { IMovie } from '../models/movie.model';
import { ITmdbMovie } from '../models/tmdb-movie.model';

import { movieUrlBuilder } from '../helpers/movieUrlBuilder';
import { tmdbMovieMapper } from '../helpers/tmdbMovieMapper';

@Component({
  selector: 'edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: IMovie;
  editMovieForm: FormGroup;
  ManualMode: boolean = false;

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private movieService: MovieService,
    private tmdb: TmdbService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => this.movie = data['movie']);
    this.editMovieForm = this.fb.group({
      backdrop_path: '',
      tmdb_id: '',
      overview: '',
      popularity: '',
      poster_path: '',
      release_date: '',
      runtime: '',
      status: '',
      tagline: '',
      title: ['', Validators.required],
      trailer_path: '',
      vote_average: '',
      vote_count: '',
      genres: ''
    });

    this.editMovieForm.setValue({
      backdrop_path: this.movie.backdrop_path,
      tmdb_id: this.movie.tmdb_id,
      overview: this.movie.overview,
      popularity: this.movie.popularity,
      poster_path: this.movie.poster_path,
      release_date: this.movie.release_date,
      runtime: this.movie.runtime,
      status: this.movie.status,
      tagline: this.movie.tagline,
      title: this.movie.title,
      trailer_path: this.movie.trailer_path,
      vote_average: this.movie.vote_average,
      vote_count: this.movie.vote_count,
      genres: this.movie.genres
    });
  }

  save() {
    let movieToSave: IMovie = Object.assign({}, this.movie, this.editMovieForm.value);

    return this.movieService.editMovie(movieToSave).subscribe(() => {
      this.toastr.success(`${movieToSave.title} edited succesfully`);
      this.router.navigate(['movies']);
    },
      (error: any) => this.toastr.error('An error occured while editing the movie.'));
  }

  deleteMovie() {
    return this.movieService.deleteMovie(this.movie.id).subscribe(() => {
      this.toastr.success('Removed!');
      this.router.navigate(['movies']);
    }, (error: any) => this.toastr.error('Couldn\'t remove this entry.'));
  }

  updateFromTmdb() {
    return this.tmdb.getMovieDetails(this.movie.tmdb_id).subscribe((tmdbMovie: ITmdbMovie) => {      
      return this.movieService.editMovie(tmdbMovieMapper(tmdbMovie, this.movie.id)).subscribe(() => {
        this.toastr.success('Updated', `${this.movie.title}`);
        this.router.navigate(['movies']);
      }, (error: any) => this.toastr.error('An error occured while updating this title.'));
    }, (error: any) => this.toastr.error('An error occured while updating this title.'));
  }

  toggleManualMode() {
    this.ManualMode = !this.ManualMode;
  }
}
