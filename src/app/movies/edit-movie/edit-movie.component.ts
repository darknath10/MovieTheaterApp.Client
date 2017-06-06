import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IMovie } from '../movie.model';

@Component({
  selector: 'edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: IMovie;
  editMovieForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

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

  save(): void {
    let movieToSave: IMovie = Object.assign({}, this.movie, this.editMovieForm.value);
    console.log(movieToSave);
  }
}
