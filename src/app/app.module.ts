import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration.service';
import { UserUiComponent } from './user-ui/user-ui.component';
import { FundtransferComponent } from './user-ui/fundtransfer/fundtransfer.component';
import { AdminComponent } from './admin/admin.component';
import { AddAccountComponent } from './user-ui/add-account/add-account.component';
import { RequestsComponent } from './user-ui/requests/requests.component';
import { MyAccountComponent } from './user-ui/my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserUiComponent,
    FundtransferComponent,
    RequestsComponent,
    AdminComponent,
    AddAccountComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
