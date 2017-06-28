import { InjectionToken } from '@angular/core';
import { IToastr } from './itoastr.interface';

export let TOASTR_TOKEN = new InjectionToken<IToastr>('toastr');

export function toastrFactory() {
  return window['toastr'];
}

export const TOASTR_PROVIDER = { provide: TOASTR_TOKEN, useFactory: toastrFactory };