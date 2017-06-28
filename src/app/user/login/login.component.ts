import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { IToastr, TOASTR_TOKEN } from '../../services/index';

import { IUser } from '../models/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AuthService, 
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    return this.auth.login(this.loginForm.value['username'], this.loginForm.value['password']).subscribe((res) => {
      this.toastr.success(`Welcome ${this.auth.currentUser.username}!`);
      if(this.auth.redirectUrl) {
        this.router.navigateByUrl(this.auth.redirectUrl);
      } else {
        this.router.navigate(['/movies']);
      };
    }, (err) => {
      this.toastr.error('Login failed');
      this.loginForm.reset();
    });
  }

}
