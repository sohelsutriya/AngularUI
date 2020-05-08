import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.css']
})
export class UserUiComponent implements OnInit {

  myUserId;
  balance:number;
  value:number;
  constructor(private registerService:RegistrationService) { this.balance=500 }

  ngOnInit(): void {
    this.myUserId = this.registerService.userId;
  }

  deposit(){
    this.value=0;
    this.value = Number(prompt("Enter Amount"));
    this.balance += this.value;
  }

  withdraw(){
    this.value=0;
    this.value = Number(prompt("Enter Amount"));
    this.balance -= this.value;

  }

}

