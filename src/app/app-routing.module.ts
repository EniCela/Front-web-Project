import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsComponent } from './news/news.component';
import { AdminnComponent } from './adminn/adminn.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MoviessComponent } from './moviess/moviess.component';

const routes: Routes = [
  {path:"" , component:HomepageComponent},
  {path:"register", component:RegisterFormComponent},
  {path:"login",component:LoginFormComponent},
  {path:"shtolajme",component:AddNewsComponent},
  {path:"news",component:NewsComponent},
  {path:"showuser",component:ShowusersComponent},
  {path:"edit/:id", component:EdituserComponent},
  {path:"admindashboard",component:AdminnComponent},
  {path:"movies",component:MoviessComponent},
  {path:"addmovie",component:AddmovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
