import { Injectable } from "@angular/core";
import { EventEmitter, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { FriendprofileService } from "src/app/services/friendprofile.service";
import { User } from "./user.model";
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  friendData:User;
  constructor(private friendservice:FriendprofileService){

  }
  
  ngOnInit() {
this.friendservice.veiwFreindProfile.subscribe(data=>{
this.friendData=data;
})

  }
    
  onloginpage=new BehaviorSubject<null>(null);
  friendprofilesend=new BehaviorSubject<User>(null);
    userRegister=new BehaviorSubject<string>(null);
 SelectedDost=new Subject<User>();
 private CurrentsingedupUser:string;
   private users:User=
        new User(1,"mohd",'saif','12/03/1991','hesoyam',null,'m.saif@gmail.com','friend',"https://source.unsplash.com/user/erondu/160x90"
      ,'user',[new User(3,"avi","kk",'12/03/1991','hesoyam',null,'m.avi@gmail.com','friend',"https://source.unsplash.com/user/erondu/160x90","user",null),new User(2,"ajay","kk",'12/03/1991','hesoyam',null,'m.ajay@gmail.com','friend',"https://source.unsplash.com/user/erondu/160x90","user",null)]
      );
      getUser(){
     return this.users;
      }
     getCurrentsingedup(){
        return this.CurrentsingedupUser;
      }
       setCurrentsingedup(user:string){
         this.CurrentsingedupUser=user;
         this.userRegister.next(user);
      }
      loginuser(token:any){
        localStorage.setItem('token',token);
      }
     
      
}

 
