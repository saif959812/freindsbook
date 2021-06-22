import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Pages/userprofile/user.service';
import { FriendprofileService } from 'src/app/services/friendprofile.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
loginling=true;
value:string;
logoutvalid=true;
homevalid=true;
searchvalid=true;
loginvalid=true;
signupvalid=true;
searchbar=true;


  constructor(private userservice:UserService,private friendservice:FriendprofileService,private loginservice:LoginService,private rote:Router) { }

  ngOnInit(){
    this.loginservice.homevalid.subscribe(d=>{
      this.homevalid=d;
    })
    this.loginservice.loginvalid.subscribe(d=>{
      this.loginvalid=d;
    })
    this.loginservice.signupvalid.subscribe(d=>{
      this.signupvalid=d;
    })
    this.loginservice.searchvalid.subscribe(d=>{
      this.searchvalid=d;
    })
    this.loginservice.logoutvalid.subscribe(d=>{
      this.logoutvalid=d;
    })
    this.loginservice.searchbar.subscribe(d=>{
      this.searchbar=d;
    })
    
    
    
  }
 onSearchChange(search:string){
   this.friendservice.searchbardata.next(search);
   console.log(search)
 }
 logout(){
   this.loginservice.logout();
   this.rote.navigate(['/login']);
   this.logoutvalid=false;

 }

}
