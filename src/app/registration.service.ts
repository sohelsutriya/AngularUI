import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public addUser(usr:user){
    console.log("inside addUser()");
    return this.http.post<user>("http://localhost:8081/Register",usr);
  }
}
