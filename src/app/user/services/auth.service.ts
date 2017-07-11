import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { JwtHelper } from 'angular2-jwt';

import { TOASTR_TOKEN, IToastr } from '../../services/index';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { IUser } from '../models/user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  redirectUrl: string;
  jwtHelper = new JwtHelper();

  constructor(private http: Http, 
    private router: Router,
    private route: ActivatedRoute, 
    @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  register(username: string, emailAdress: string, password: string, confirmPassword: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let credentials = { username: username, emailAdress: emailAdress, password: password, confirmPassword: confirmPassword };
    let baseUrl = 'http://localhost:5000/api/account/register';

    return this.http.post(baseUrl, JSON.stringify(credentials), options);
  }

  login(username: string, password: string): Observable<IUser> {
    let url = this.route.url;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let credentials = { username: username, password: password };
    let baseUrl = 'http://localhost:5000/api/account/login';

    return this.http.post(baseUrl, JSON.stringify(credentials), options).do((response: Response) => {
      response = response.json();
      let token = response['user_token'];
      let decodedToken = this.jwtHelper.decodeToken(token);
      let user: IUser = {
        username: decodedToken['sub'],
        email: decodedToken['email'],
        user_token: token
      };
      this.currentUser = user;
      localStorage.setItem('user_token', token);
    }).catch((error: Response) => {
      return Observable.create(false);
    });
  }

  checkAutenticationStatus() {
    let token = localStorage.getItem('user_token');
    if(token && !this.jwtHelper.isTokenExpired(token)){
      let decodedToken = this.jwtHelper.decodeToken(token);
      let user: IUser = {
        username: decodedToken['sub'],
        email: decodedToken['email'],
        user_token: token
      };
      this.currentUser = user;
    }
  }

  isSuperUser(): boolean {
    if(this.currentUser) {
      let decodedToken = this.jwtHelper.decodeToken(this.currentUser.user_token);
      let result = decodedToken['SuperUser'] || false;
      console.log(result);
      return !!decodedToken['SuperUser'] || false;      
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user_token');
    this.toastr.info('See you soon Buddy!');
    this.router.navigate(['/movies']);
  }
}