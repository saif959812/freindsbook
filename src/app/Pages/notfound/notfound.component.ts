import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit,OnDestroy {

  constructor(private loginservice:LoginService) { }
 

  ngOnInit(){
  this.loginservice.searchbar.next(false);
  }
  ngOnDestroy() {
    this.loginservice.searchbar.next(true);
  }

}
