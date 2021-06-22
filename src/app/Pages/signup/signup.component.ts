import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DatasendingService } from 'src/app/shared/datasending.service';
import { User } from '../userprofile/user.model';
import { UserService } from '../userprofile/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {
  userSignupForm: FormGroup;
  user: User;
  errormsg:string = "";
  haserror=false;
  disableBtn = false;
  
  constructor(private datasendingservice: DatasendingService, private route: Router, private userservice: UserService,private loginservice:LoginService) { }
 

  ngOnInit() {
    this.userSignupForm = new FormGroup({
      "firstname": new FormControl(null, [Validators.required]),
      "lastname": new FormControl(null, [Validators.required]),
      "dob": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null,[Validators.required])
    });
    this.userSignupForm.valueChanges.subscribe(d=>{
this.disableBtn=this.userSignupForm.valid;
    });
    this.loginservice.signupvalid.next(false);
    this.loginservice.logoutvalid.next(false);
    this.loginservice.searchvalid.next(false);
    this.loginservice.homevalid.next(false);
  }
  formsubmit() {
    
    this.user = this.userSignupForm.value;
    console.log(this.user);

    this.datasendingservice.SendSignUPRequest(this.user).subscribe(
      Response => {
        this.userservice.setCurrentsingedup(Response.firstname);
        this.route.navigate(["/login"]);


      },
      error=> {
        this.errormsg = error.error;
        this.haserror=true;
      
      
      });



  }
  
  ngOnDestroy() {
    this.loginservice.signupvalid.next(true);
    this.loginservice.logoutvalid.next(true);
    this.loginservice.searchvalid.next(true);
    this.loginservice.homevalid.next(true);

  }

}
