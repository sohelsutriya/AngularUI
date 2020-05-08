import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { logincredentials } from '../logincredentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lc:logincredentials = new logincredentials();
  logincred_list:logincredentials[];
  userFound:boolean = false;
  result;

  constructor(private service:RegistrationService,private router: Router ) { }

  ngOnInit(): void {
    this.service.getAllCredentials().subscribe(data =>{this.logincred_list = data});
  }

  login(){
    this.logincred_list.forEach(cred => {
      if(cred.username==this.lc.username){
        if(cred.password==this.lc.password){
          this.userFound = true;
          this.service.userId = cred.userId;
          this.router.navigate(['/BankUser'])
        }
      }
    });
    if(!this.userFound)
      alert("user Not Found");
  }

}
