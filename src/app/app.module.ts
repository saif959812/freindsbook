import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';




import { DropDownDirective } from './shared/dropdown.directive';

import { AppRoutingModule } from './app-routing/app-routing.module';


import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SignupComponent } from './Pages/signup/signup.component';
import { LoginComponent } from './Pages/login/login.component';
import { FriendListComponent } from './Pages/userprofile/friend-list/friend-list.component';
import { UserService } from './Pages/userprofile/user.service';
import { UserprofileComponent } from './Pages/userprofile/userprofile.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './shared/auth-interceptor.service';
import { FriendprofileComponent } from './Pages/friendprofile/friendprofile.component';
import { VeiwprofileComponent } from './Pages/veiwprofile/veiwprofile.component';
import { SearchComponent } from './Pages/search/search.component';
import { SearchfilterPipe } from './shared/searchfilter.pipe';
import { NotfoundComponent } from './Pages/notfound/notfound.component';





@NgModule({
  declarations: [
    AppComponent,
    
    UserprofileComponent,
    FriendListComponent,
      DropDownDirective,
      NavbarComponent,
      SignupComponent,
      LoginComponent,
      FriendprofileComponent,
      VeiwprofileComponent,
      SearchComponent,
      SearchfilterPipe,
      NotfoundComponent,
     
          
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
    
 
  ],
  providers: [ UserService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
