import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovieRoutingModule } from './movies-routing.module';

import { MovieListComponent } from './movie-list/movie-list.component';

import { MovieService } from './services/movie.service';
import { TmdbService } from './services/tmdb.service';
import { MovieListResolver } from './services/movie-list-resolver.service';
import { MovieDetailResolver } from './services/movie-detail-resolver.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

import { AuthAdminGuard } from '../user/services/auth-admin-guard.service';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewListResolver } from './services/review-list.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MovieRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieCardComponent,
    MovieDetailComponent,
    AddMovieComponent,
    MovieTrailerComponent,
    EditMovieComponent,
    ReviewListComponent,
  ],
  providers: [
    TmdbService,
    MovieService,
    MovieListResolver,
    MovieDetailResolver,
    ReviewListResolver,
    AuthAdminGuard
  ]
})
export class MovieModule { }