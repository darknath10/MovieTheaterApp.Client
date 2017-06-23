import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

import { IUser } from '../models/user.model';

@Injectable()
export class AuthAdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkAdminLoggedIn(state.url);
  }

  checkAdminLoggedIn(url: string): boolean {
    if(this.auth.isSuperUser()) return true;
    this.auth.redirectUrl = url;
    this.router.navigate(['/user/login']);
    return false;
  }
}