import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user';
import { logincredentials } from './logincredentials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public addUser(usr:user){
    console.log("inside addUser()");
    return this.http.post<user>("http://localhost:8081/Register",usr);
  }

  public addLoginCredentials(lc:logincredentials){
    console.log("inside addLoginCredentials()");
    return this.http.post<logincredentials>("http://localhost:8081/AddLogin",lc);
  }

  public login(lc:logincredentials){
    console.log("inside login()");
    return this.http.post<logincredentials>("http://localhost:8081/Login",lc);
  }

}
