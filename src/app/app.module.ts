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
import { Provavideo1Component } from './provavideo1/provavideo1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Observable } from 'rxjs';
import { HomepageuserComponent } from './homepageuser/homepageuser.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { FotoaddComponent } from './fotoadd/fotoadd.component';
import { NewsUserComponent } from './news-user/news-user.component';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';



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
    AddmovieComponent,
    Provavideo1Component,
    HomepageuserComponent,
    ProfileUserComponent,
    FotoaddComponent,
    NewsUserComponent,
    EditMoviesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
