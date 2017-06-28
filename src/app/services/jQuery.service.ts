import { InjectionToken } from '@angular/core';

export let JQ_TOKEN = new InjectionToken('jquery');

export function jqueryFactory() {
    return window['jQuery'];
}

export const JQUERY_PROVIDER = { provide: JQ_TOKEN, useFactory: jqueryFactory };