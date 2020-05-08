import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { account } from './account';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public addAccount(acc:account){
    console.log("inside addAccount()");
    return this.http.post<account>("http://localhost:8083/accounts/add",acc);
  }

  public getAccounts(userId){
    console.log("inside getAccounts()");
    return this.http.get<account[]>("http://localhost:8083/accounts/foruser/"+userId);
  }

}
