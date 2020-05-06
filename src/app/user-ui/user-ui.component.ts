import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.css']
})
export class UserUiComponent implements OnInit {

  balance:number;
  value:number;
  constructor() { this.balance=500 }

  ngOnInit(): void {
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
