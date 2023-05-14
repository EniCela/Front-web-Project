import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { AdminnComponent } from './adminn/adminn.component';
import { MoviessComponent } from './moviess/moviess.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { Ng2SearchPipeModule , Ng2SearchPipe } from 'ng2-search-filter';
import { AddmovieComponent } from './addmovie/addmovie.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ProfileComponent,
    AdminnComponent,
    MoviessComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    NewsComponent,
    AddNewsComponent,
    EdituserComponent,
    ShowusersComponent,
    AddmovieComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
