import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendprofileService } from 'src/app/services/friendprofile.service';
import { LoginService } from 'src/app/services/login.service';
import { DatasendingService } from 'src/app/shared/datasending.service';
import { User } from '../userprofile/user.model';
import { UserService } from '../userprofile/user.service';

@Component({
  selector: 'app-friendprofile',
  templateUrl: './friendprofile.component.html',
  styleUrls: ['./friendprofile.component.css']
})
export class FriendprofileComponent implements OnInit,OnDestroy {
user:User;
frienddata:User;
optionSelcted = "";
  selectedfre: User;
  users: User;
  friends:User[];
  friends1:User[];


  constructor(private userservice:UserService,private dataservice:DatasendingService, private route:Router,
    private frreindservice:FriendprofileService,private loginservice:LoginService ) { }
 

  ngOnInit() {
    this.userservice.friendprofilesend.subscribe(d=>{
      this.user=d;
     
      this.loginservice.loginvalid.next(false);
     this.loginservice.signupvalid.next(false)
      
     
      
    })
    this.dataservice.getuser(this.user.email).subscribe(resp=>{
      this.frienddata=resp;
      this.friends=this.frienddata.friends;
      console.log(resp);
    });

  }
  optionSelected(option: string) {
    this.optionSelcted = option;
  }
  slectedFriend(friend:User){
this.frreindservice.veiwFreindProfile.next(friend);

  }
  unfriend(email:string){
    this.dataservice.unfriends(email).subscribe(data=>{
      this.friends1=data;
      this.route.navigate(['/userprofile']);
    })
  }
  ngOnDestroy(){
    this.loginservice.loginvalid.next(true);
    this.loginservice.signupvalid.next(true)
  }
}
