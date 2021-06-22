import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedComponent=''
 
  title = 'smartContactManager';
  activateComponent(compname:string){
this.selectedComponent=compname;
  }
 
  component(comp:string){
    this.selectedComponent=comp;

  }
}
