import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieRoutingModule } from './movies-routing.module';

import { MovieListComponent } from './movie-list/movie-list.component';

import { MovieService } from './services/movie.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule  
  ],
  declarations: [MovieListComponent, MovieCardComponent, MovieDetailComponent],
  providers: [MovieService]
})
export class MovieModule {}