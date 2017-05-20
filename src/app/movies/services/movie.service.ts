import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMovie } from '../movie.model';

@Injectable()
export class MovieService {

  private _movieTheaterUrl = "http://localhost:55000/api/movies";

  constructor(private http: Http) {}

  getMovies(): Observable<IMovie[]> {
    return this.http.get(this._movieTheaterUrl)
      .map((response: Response) => <IMovie[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}