import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { DatasendingService } from 'src/app/shared/datasending.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css'],
  
})
export class FriendListComponent implements OnInit {
  
 @Input()friendList:User[];
 
  constructor( private userservice:UserService,private router:Router,private loginservice:LoginService,
    private dataservice:DatasendingService) { }

  ngOnInit(): void {
   
   

  

   
  }
  slectedFriend(friend:User){
   console.log(friend);
this.userservice.friendprofilesend.next(friend);
    
    
  }
  
}
