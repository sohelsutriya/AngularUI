import { Component, OnInit } from '@angular/core';
import { account } from 'src/app/account';
import { UserService } from 'src/app/user.service';
import { RegistrationService } from 'src/app/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  account:account = new account();
  randomNum:number;
  clicked = false;

  constructor(private userservice:UserService, private regservice:RegistrationService, private router:Router) { 
    this.randomNum = Math.floor(Math.random() * (999999 - 100000))
    this.account.accountNo = String(this.randomNum);
  }

  ngOnInit(): void {
  }

  addAccount(){
    console.log("inside addAccount()");
    this.account.accountStatus = "pending";
    this.account.remarks = "Not Approved";
    this.account.userId = String(this.regservice.userId);
    this.userservice.addAccount(this.account).subscribe(data =>{});
    alert("Account Added Successfully!");
  }

}
