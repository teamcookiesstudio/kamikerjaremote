import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingNavBarComponent } from './landing-nav-bar/landing-nav-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing.module';
import {NgxCarouselModule} from 'ngx-carousel';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingNavBarComponent,
    HomepageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
