import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { AuthService } from '../services/auth.service';
import { IToastr, TOASTR_TOKEN } from '../../services/toastr.service';

import { pwdMatcher } from '../custom-validators/pwd-matcher.validator';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      emailAdress: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {validator: pwdMatcher})
    });
  }

  register() {
    return this.auth.register(this.registerForm.value['username'], 
                              this.registerForm.value['emailAdress'], 
                              this.registerForm.get('passwordGroup.password').value, 
                              this.registerForm.get('passwordGroup.confirmPassword').value).subscribe(
      () => {
        this.toastr.success('Everithing is ready; please log in.');
        this.router.navigate(['/user/login']);
      },
      (err: Response) => {
        this.toastr.error(`${err.statusText}`);
        this.registerForm.reset();
      });
  }

}
