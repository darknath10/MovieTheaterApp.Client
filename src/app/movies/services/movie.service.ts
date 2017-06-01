import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMovie } from '../movie.model';

@Injectable()
export class MovieService {

  private _movieTheaterUrl = "http://localhost:5000/api/movies";

  constructor(private http: Http) {}

  getMovies(): Observable<IMovie[]> {
    return this.http.get(this._movieTheaterUrl)
      .map((response: Response) => <IMovie[]>response.json())
      .catch(this.handleError);
  }

  getMovie(id: number): Observable<IMovie> {
    return this.http.get(`${this._movieTheaterUrl}/${id}`)
      .map((response: Response) => {
        let movie = <IMovie>response.json();
        return this.movieUrlBuilder(movie);
      })
      .catch(this.handleError);
  }

  private movieUrlBuilder(movie: IMovie): IMovie {
    const tmdbImageUrl = 'http://image.tmdb.org/t/p/original';
    movie.backdrop_path = `${tmdbImageUrl}${movie.backdrop_path}`;
    movie.poster_path = `${tmdbImageUrl}${movie.poster_path}`;
    movie.trailer_path = `https://www.youtube.com/embed${movie.trailer_path}`;
    return movie;
  }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}