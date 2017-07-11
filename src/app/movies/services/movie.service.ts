import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AuthService } from '../../user/services/auth.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMovie } from '../models/movie.model';
import { IReview } from '../models/review.model';

@Injectable()
export class MovieService {

  private _movieTheaterUrl = "http://localhost:5000/api/movies";

  constructor(private http: Http, private auth: AuthService) {}

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

  searchMovies(term: string) {
    let searchTerm = term.toLocaleLowerCase();
    let results: IMovie[] = [];
    return this.http.get(`${this._movieTheaterUrl}/search/${searchTerm}`)
      .map((response: Response) => <IMovie[]>response.json())
      .catch(this.handleError);
  }

  addMovie(movie: IMovie): Observable<IMovie> {
    let headers = new Headers({'Content-Type':'application/json', 'Authorization': `bearer ${this.auth.currentUser.user_token}`});
    let requestOptions = new RequestOptions({headers: headers});

    return this.http.post(this._movieTheaterUrl, JSON.stringify(movie), requestOptions)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  editMovie(movie: IMovie): Observable<IMovie> {
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': `bearer ${this.auth.currentUser.user_token}`});
    let requestOptions = new RequestOptions({headers: headers});

    return this.http.put(`${this._movieTheaterUrl}/${movie.id}`, JSON.stringify(movie), requestOptions)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getMovieReviews(movieId: number): Observable<IReview[]> {
    return this.http.get(`${this._movieTheaterUrl}/${movieId}/reviews`)
      .map((response: Response) => <IReview[]>response.json())
      .catch(this.handleError);
  }

  addMovieReview(review, movieId: number): Observable<IReview> {
    let headers = new Headers({'Content-Type':'application/json', 'Authorization': `bearer ${this.auth.currentUser.user_token}`});
    let options = new RequestOptions({headers: headers});

    return this.http.post(`${this._movieTheaterUrl}/${movieId}/reviews/new`, JSON.stringify(review), options)
      .map((response: Response) => <IReview>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}