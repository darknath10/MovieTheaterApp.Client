import { AbstractControl } from '@angular/forms';

export function pwdMatcher(c: AbstractControl): {[key: string]: boolean} | null {
    let pwdControl = c.get('password');
    let confirmPwdControl = c.get('confirmPassword');
    if(pwdControl.pristine || confirmPwdControl.pristine) return null;
    if(pwdControl.value === confirmPwdControl.value) return null;
    return {'pwdMatch': true};
}