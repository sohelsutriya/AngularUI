import { Component, OnInit } from '@angular/core';
import { account } from 'src/app/account';
import { UserService } from 'src/app/user.service';
import { UserUiComponent } from '../user-ui.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  myAccountsList:account[];

  constructor(private userService:UserService, private userComp:UserUiComponent) { }

  ngOnInit(): void {
    this.loadMyAccounts();
  }

  loadMyAccounts(){
    this.userService.getAccounts(this.userComp.myUserId).subscribe(data =>{this.myAccountsList = data});
  }

}
