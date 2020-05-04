import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { user } from '../user';
import {Router} from "@angular/router"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  usr:user = new user();
  abc:any;

  constructor(private service:RegistrationService,private router: Router) { }

  ngOnInit(): void {
    //this.usr = new user();
  }

  addNewUser(){
    console.log(this.usr);
    this.abc = this.service.addUser(this.usr)
        .subscribe( data => {
        });
        alert("Registered successfully!");
        this.router.navigate(['/Login'])
  }
  
}
