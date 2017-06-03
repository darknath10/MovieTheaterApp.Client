import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MovieModule } from './movies/movie.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ScreenService } from './services/screen.service';
import { TOASTR_TOKEN, IToastr } from './services/toastr.service';

declare let toastr: IToastr;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieModule,
    AppRoutingModule
  ],
  providers: [
    ScreenService,
    { provide: TOASTR_TOKEN, useValue: toastr }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
