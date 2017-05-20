import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';

import { MovieService } from './services/movie.service';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    { path: 'movies', component: MovieListComponent }
  ])],
  declarations: [MovieListComponent, MovieCardComponent],
  providers: [MovieService]
})
export class MovieModule {}