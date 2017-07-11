import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMovie } from '../models/movie.model';
import { ITmdbMovie } from '../models/tmdb-movie.model';

import { tmdbMovieMapper } from '../helpers/tmdbMovieMapper';

@Injectable()
export class TmdbService {

  private _tmdbApiBaseUrl = 'https://api.themoviedb.org/3';
  private _apiKey = 'd1dd5a7fd77c933e088112709eb711e7';

  constructor(private http: Http) { }

  searchMovie(term: string): Observable<IMovie[]> {
    return this.http.get(`${this._tmdbApiBaseUrl}/search/movie?api_key=${this._apiKey}&query=${term}`)
      .map((response: Response) => <IMovie[]>response.json())
      .catch(this.handleError);
  }

  getMovieDetails(id: number): Observable<ITmdbMovie> {
    return this.http.get(`${this._tmdbApiBaseUrl}/movie/${id}?api_key=${this._apiKey}&language=en-US&append_to_response=videos`)
      .map((response: Response) => <ITmdbMovie>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }

}