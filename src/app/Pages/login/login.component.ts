import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { DatasendingService } from 'src/app/shared/datasending.service';
import { User } from '../userprofile/user.model';
import { UserService } from '../userprofile/user.service';
import { UserAuth } from '../userprofile/userauth.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  jwtToken:string="";
userLoginForm:FormGroup;
user1:string;
userlogincred:UserAuth;
userlogin:User;
errormsg="";
haserror=false;
Token=new BehaviorSubject<string>(null);
  constructor(private userservice:UserService,
    private senddataservice:DatasendingService,
    private loginservice:LoginService,
     private route:Router) { }
  

  ngOnInit(){
    this.userLoginForm=new FormGroup({
      "username":new FormControl(null,[Validators.email,Validators.required]),
      "password":new FormControl(null,[Validators.required])
    })
    
     this.userservice.userRegister.subscribe(data=>{
      this.user1=data;
      });
      this.loginservice.loginvalid.next(false);
      this.loginservice.homevalid.next(false);
      this.loginservice.logoutvalid.next(false);
      this.loginservice.searchvalid.next(false);
  
  }
  formSubmit(form:NgForm){
    this.userlogincred = form.value;
    console.log(this.userlogincred);
    this.senddataservice.sendLoginRequest(this.userlogincred).subscribe((Response:any)=>{
    
     
     this.jwtToken=Response.token;
      // this.userservice.loginuser(this.jwtToken);
      console.log(this.jwtToken);
      this.loginservice.setToken(this.jwtToken);
      this.senddataservice.getUserprofile().subscribe((d:any)=>{
        
        
       
       this.loginservice.setUser(d);
       this.userlogin=this.loginservice.getUser();

        this.loginservice.user.next(this.userlogin);
        this.route.navigate(['/userprofile'])
        
      },
      error=>{
      
        this. errormsg="badcredential";
        this.haserror=true;
        console.log(error);
        
      }
      );
     
      
       
    },error=>{
      this. errormsg="badcredential";
      this.haserror=true;
      console.log(error);
      

    }

    );


 

  }
  ngOnDestroy(): void {
   this.loginservice.loginvalid.next(true);
   this.loginservice.homevalid.next(true);
   this.loginservice.logoutvalid.next(true);
   this.loginservice.searchvalid.next(true);
  }
  
}
