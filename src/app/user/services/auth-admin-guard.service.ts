import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { IToastr, TOASTR_TOKEN } from '../../services/index';

import { IUser } from '../models/user.model';

@Injectable()
export class AuthAdminGuard implements CanActivate {

  constructor(private auth: AuthService, 
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkAdminLoggedIn(state.url);
  }

  checkAdminLoggedIn(url: string): boolean {
    if(this.auth.isSuperUser()) return true;
    if(!!this.auth.currentUser) {
      this.toastr.info("You don't have permission to go there.");
      return false;
    }
    this.auth.redirectUrl = url;
    this.router.navigate(['/user/login']);
    return false;
  }
}