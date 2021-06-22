import { Component, OnDestroy, OnInit } from '@angular/core';
import { FriendprofileService } from 'src/app/services/friendprofile.service';
import { LoginService } from 'src/app/services/login.service';
import { DatasendingService } from 'src/app/shared/datasending.service';
import { User } from '../userprofile/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  users: User[];
  Friendlist: User[];
  commonfriendList:User[];
  searchval: string;
  friendshipStatus:string='addfriend';
  page:number=0;
  pages:Array<number>;
  constructor(private dataservice: DatasendingService, private friendservice: FriendprofileService, private loginservice: LoginService) { }
 
  ngOnInit() {
    this.friendservice.searchbardata.subscribe(d => {
      this.searchval = d;
      
     
      this.search(this.searchval,this.page);
      
    });
   
    this.loginservice.homevalid.next(true);
    this.loginservice.loginvalid.next(false);
    this.loginservice.signupvalid.next(false);
  }
  addfriend(user: User,index:number) {
   
    this.dataservice.addfriend(user.email).subscribe(data => {

      this.Friendlist = data;
      for (let i = 0; i < this.users.length-1; i++) {
        for (let j = 0; j < this.Friendlist.length; j++) {
          // this.users[i].friendSkey[j]===this.Friendlist[j].friendSkey[j]
          console.log(this.users[i])
        }
          
        }

      
    })

  }
  pagenumber(index:number){
    this.page=index;
    this.search(this.searchval,this.page);
  }

  search(keyword:string,index:number){
    
    this.dataservice.getallusers(keyword,index).subscribe(data => {
      this.users = data['content'];
     
     
      this.pages=new Array(data['totalPages']);

     
      
     
    });

  }
  
  ngOnDestroy() {
    this.loginservice.loginvalid.next(true);
    this.loginservice.signupvalid.next(true);
  }
}
