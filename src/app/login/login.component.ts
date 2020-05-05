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
  result;

  constructor(private service:RegistrationService,private router: Router ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.lc);
    this.service.login(this.lc).subscribe(data =>{this.result = data});
    console.log(this.result);
    if(this.result!=null)
      this.router.navigate(['/BankUser'])
      //alert("User Found");
    else
      alert("User Not Found");
      console.log(this.result);
  }

}
