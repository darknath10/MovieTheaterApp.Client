import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMovie } from '../movie.model';

@Injectable()
export class TmdbService {

  constructor(private http: Http) { }

  searchMovie(term: string): Observable<IMovie[]> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=d1dd5a7fd77c933e088112709eb711e7&query=${term}`)
      .map((response: Response) => <IMovie[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

}