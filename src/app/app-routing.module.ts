import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsComponent } from './news/news.component';
import { AdminnComponent } from './adminn/adminn.component';

const routes: Routes = [
  {path:"" , component:AdminnComponent},
  {path:"register", component:RegisterFormComponent},
  {path:"login",component:LoginFormComponent},
  {path:"shtolajme",component:AddNewsComponent},
  {path:"news",component:NewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
