import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
  
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegistrationComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
