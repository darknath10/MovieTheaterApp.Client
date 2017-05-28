import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const moviesRoutes: Routes = [
    { path: 'movies', component: MovieListComponent },
    { path: 'movies/:id', component: MovieDetailComponent }
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