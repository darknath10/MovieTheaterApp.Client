import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListResolver } from './services/movie-list-resolver.service';
import { MovieDetailResolver } from './services/movie-detail-resolver.service';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const moviesRoutes: Routes = [
    { path: 'movies', component: MovieListComponent, resolve: {movies: MovieListResolver} },
    { path: 'movies/new', component: AddMovieComponent },
    { path: 'movies/:id', component: MovieDetailComponent, resolve: {movie: MovieDetailResolver} }
];

@NgModule({
  imports: [
      RouterModule.forChild(moviesRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class MovieRoutingModule { }