import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 LoginStatus:boolean=false;
 UserID:string;
  constructor() { }
  
  getLogin(){
    return this.LoginStatus;
  }
  setLogin(value:boolean){
    this.LoginStatus=value;
  }
  getUser(){
    return this.UserID;
  }
  setUser(user:string){
    this.UserID=user;
  }
}
