import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from '../Pages/userprofile/userprofile.component';
import { LoginComponent } from '../Pages/login/login.component';
import { SignupComponent } from '../Pages/signup/signup.component';
import { FriendprofileComponent } from '../Pages/friendprofile/friendprofile.component';
import { SearchComponent } from '../Pages/search/search.component';
import { VeiwprofileComponent } from '../Pages/veiwprofile/veiwprofile.component';
import { AuthGuard } from '../shared/auth.guard';
import { NotfoundComponent } from '../Pages/notfound/notfound.component';






const appRoutes: Routes = [{path:"",redirectTo:"login",pathMatch:'full'},
  {path:"userprofile" ,component:UserprofileComponent ,canActivate:[AuthGuard]},
  {path:"login" ,component:LoginComponent },
  {path:"signup" ,component: SignupComponent},
  {path:"friendprofile" ,component: FriendprofileComponent,canActivate:[AuthGuard]},
  {path:"search" ,component: SearchComponent,canActivate:[AuthGuard]},
  {path:"veiwprofile",component:VeiwprofileComponent},
   {path: '404', component: NotfoundComponent},
 {path: '**', redirectTo:"404" }

  

]

@NgModule({
 
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
