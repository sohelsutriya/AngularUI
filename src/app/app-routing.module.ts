import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserUiComponent } from './user-ui/user-ui.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { RequestsComponent } from './requests/requests.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
  
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  {path:'BankUser',component:UserUiComponent},
  {path:'Transfer',component:FundtransferComponent},
  {path:'Requests',component:RequestsComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
