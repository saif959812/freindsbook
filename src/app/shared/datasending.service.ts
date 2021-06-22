import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../Pages/userprofile/user.model';
import { UserService } from '../Pages/userprofile/user.service';
import { UserAuth } from '../Pages/userprofile/userauth.model';

@Injectable({
  providedIn: 'root'
})
export class DatasendingService {
  userregisterd=new Subject<string>();
  errormsg="";
  userlogincred:UserAuth;
 

  constructor(private http:HttpClient,private route:Router,private userservice:UserService) { }
  SendSignUPRequest(user :User){
    
    console.log(user);
   return  this.http.post<User>('http://localhost:8080/signup',user);
    
  }
   sendLoginRequest(userlogincred:UserAuth){
    
     return this.http.post<string>('http://localhost:8080/token',userlogincred)
     
   }
      getUserprofile(){
        return this.http.get<User>('http://localhost:8080/welcome');
      }
      getuser(user:string){
        return this.http.get<User>('http://localhost:8080/getuser',{
          headers:new HttpHeaders().set('email',user)
        });
      }
      getallfriends(user:string){
        return this.http.get<User[]>('http://localhost:8080/getallfriends',{
          headers:new HttpHeaders().set('email',user)
        });
      }
      getallusers(keyword:string,page:number){
        return this.http.get<User[]>('http://localhost:8080/getallappuser',{
          params:new HttpParams().set('keyword',keyword).append('page',""+page)
          
          
        });
      }
      addfriend(user:string){
        console.log(user);
        return this.http.get<User[]>('http://localhost:8080/addfriend',{
          headers:new HttpHeaders().set('email',user)
        });
      }
      unfriends(user:string){
        return this.http.get<User[]>('http://localhost:8080/deletefriend',{
          headers:new HttpHeaders().set('email',user)
        });
      }
      uploadproflepic(file:File){
        const formData = new FormData();

        formData.append('profilepicture', file,file.name);
        return this.http.post<string>('http://localhost:8080/uploadprofile',formData);
      }

   }
   

