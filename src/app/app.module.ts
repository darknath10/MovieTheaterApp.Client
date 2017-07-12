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

import { ScreenService, TOASTR_PROVIDER, JQUERY_PROVIDER } from './services/index';
import { AuthService } from './user/services/auth.service';
import { ModalComponent } from './common/modal/modal.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ModalComponent,
    ModalTriggerDirective,
    FooterComponent
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
    TOASTR_PROVIDER,
    JQUERY_PROVIDER,
    AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
