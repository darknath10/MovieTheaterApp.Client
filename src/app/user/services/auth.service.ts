import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { IToastr, TOASTR_TOKEN } from '../../services/toastr.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { IUser } from '../models/user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: Http, private router: Router, @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  register(username: string, emailAdress: string, password: string, confirmPassword: string): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let credentials = { username: username, emailAdress: emailAdress, password: password, confirmPassword: confirmPassword };
    let baseUrl = 'http://localhost:5000/api/account/register';

    return this.http.post(baseUrl, JSON.stringify(credentials), options);
  }

  login(username: string, password: string): Observable<IUser> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let credentials = { username: username, password: password };
    let baseUrl = 'http://localhost:5000/api/account/login';

    return this.http.post(baseUrl, JSON.stringify(credentials), options).do((response: Response) => {
      this.currentUser = <IUser>response.json();
      localStorage.setItem('user', JSON.stringify(this.currentUser));
    }).catch((error: Response) => {
      return Observable.create(false);
    });
  }

  checkAutenticationStatus() {
    if (!!localStorage.getItem('user')) {
      let user = JSON.parse(localStorage.getItem('user'));
      let userExpires = new Date(user['expires']);
      if (userExpires > new Date(Date.now())) {
        this.currentUser = user;
      }
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.toastr.info('See you soon Buddy!');
    this.router.navigate(['/movies']);
  }
}