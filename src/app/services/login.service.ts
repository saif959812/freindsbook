import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../Pages/userprofile/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user=new BehaviorSubject<User>(null);
  homevalid=new Subject<boolean>();
  loginvalid=new Subject<boolean>();
  signupvalid=new Subject<boolean>();
  searchvalid=new Subject<boolean>();
  logoutvalid=new Subject<boolean>();
  searchbar=new Subject<boolean>();

  constructor() { }
  setToken(token:string){
     localStorage.setItem('token', token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  public isLoggedIn(){
    let tokenstr=localStorage.getItem('token');
    if(tokenstr==undefined||tokenstr==''||tokenstr==null){
      return false;
    }else{
      return true;
    }
  }
  logout(){
     localStorage.removeItem('token');
      localStorage.removeItem('user');
  }
  setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }
  getUser(){
    let userstr=localStorage.getItem('user');
    if(userstr!=null){
      return JSON.parse(userstr);
    }
    else{
      this.logout();
      return null;
    }
  }
}
