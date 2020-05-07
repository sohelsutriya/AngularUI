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
  result;

  constructor(private service:RegistrationService,private router: Router ) { }

  ngOnInit(): void {
    this.service.getAllCredentials().subscribe(data =>{this.logincred_list = data});
  }

  login(){
    this.logincred_list.forEach(cred => {
      if(cred.username==this.lc.username){
        if(cred.password==this.lc.password){
          this.router.navigate(['/BankUser'])
        }else
          alert("wrong password!");
      }else
        alert("user not found");
    });
  }

}
