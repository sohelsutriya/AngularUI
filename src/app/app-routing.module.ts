import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserUiComponent } from './user-ui/user-ui.component';
import { AdminComponent } from './admin/admin.component';
import { AddAccountComponent } from './user-ui/add-account/add-account.component';
import { FundtransferComponent } from './user-ui/fundtransfer/fundtransfer.component';
import { RequestsComponent } from './user-ui/requests/requests.component';
import { TransactionComponent } from './admin/transaction/transaction.component';
import { MyAccountComponent } from './user-ui/my-account/my-account.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
  {path: '',redirectTo: "/Login", pathMatch: 'full'},

  {path:'BankUser',component:UserUiComponent,
    children: [
      {path: '', redirectTo: 'MyAccount', pathMatch: 'full'},
      {path:'MyAccount',component:MyAccountComponent},
      {path:'AddAccount',component:AddAccountComponent},
      {path:'Transfer',component:FundtransferComponent},
      {path:'Requests',component:RequestsComponent}
    ]},

  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  {path:'Admin',component:AdminComponent,
  children: [
    {path:'Transactions',component:TransactionComponent}
   ]
  },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
