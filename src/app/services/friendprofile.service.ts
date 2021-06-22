import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Pages/userprofile/user.model';

@Injectable({
  providedIn: 'root'
})
export class FriendprofileService {
veiwFreindProfile=new BehaviorSubject<User>(null);
searchbardata=new BehaviorSubject<string>(null);
  constructor() { }
}
