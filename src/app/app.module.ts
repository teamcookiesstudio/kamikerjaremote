import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingNavBarComponent } from './landing-nav-bar/landing-nav-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing.module';
import {NgxCarouselModule} from 'ngx-carousel';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultItemComponent } from './search-result/search-result-item/search-result-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPortfolioItemComponent } from './user-profile/user-portfolio-item/user-portfolio-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingNavBarComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    UserProfileComponent,
    UserPortfolioItemComponent
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
