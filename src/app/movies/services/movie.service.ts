import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
      .map((response: Response) => <IMovie>response.json())
      .catch(this.handleError);
  }

  addMovie(movie: IMovie): Observable<IMovie> {
    let headers = new Headers({'Content-Type':'application/json'});
    let requestOptions = new RequestOptions({headers: headers});

    return this.http.post(this._movieTheaterUrl, JSON.stringify(movie), requestOptions)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  editMovie(movie: IMovie): Observable<IMovie> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({headers: headers});

    return this.http.put(`${this._movieTheaterUrl}/${movie.id}`, JSON.stringify(movie), requestOptions)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}