import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MovieModule } from './movies/movie.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ModalTriggerDirective } from './common/modal-trigger.directive';

import { ScreenService } from './services/screen.service';
import { AuthService } from './user/services/auth.service';
import { TOASTR_TOKEN, IToastr } from './services/toastr.service';
import { JQ_TOKEN } from './services/jQuery.service';
import { ModalComponent } from './common/modal/modal.component';

declare let toastr: IToastr;
declare let jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    ScreenService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
