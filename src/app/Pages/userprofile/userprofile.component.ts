import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FriendprofileService } from 'src/app/services/friendprofile.service';
import { LoginService } from 'src/app/services/login.service';
import { DatasendingService } from 'src/app/shared/datasending.service';


import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],

})
export class UserprofileComponent implements OnInit,OnDestroy {
  optionSelcted = "";
  selectedfre: User;
  users: User;
  users1:User;
  friends:User[];
  profilepicture:any;
Frienddataforprofile:User;
image:File;

sub:Subscription;


  constructor(private userservice: UserService,private requestsendservice:DatasendingService,private loginservice:LoginService,
    private friendservice:FriendprofileService) { }
    
  ngOnInit() {
    this.requestsendservice.getUserprofile().subscribe((d:any)=>{
      console.log(d);
      this.loginservice.setUser(d);
    
      this.users=d;
      this.friends=this.users.friends;
     
    });
    
  
  
  this.loginservice.homevalid.next(false);
  this.loginservice.loginvalid.next(false);
  this.loginservice.signupvalid.next(false);
  

     
    
   
  }


  optionSelected(option: string) {
    this.optionSelcted = option;
  }

  profileChange(event){
    this.image=event.target.files[0];
   
  }
  upload(){

this.requestsendservice.uploadproflepic(this.image).subscribe(d=>{
  console.log(d);
}) 
  }
  ngOnDestroy(){
   
this.loginservice.homevalid.next(true);
this.loginservice.loginvalid.next(true);
  this.loginservice.signupvalid.next(true);
  }

}
