import { Directive, HostListener } from "@angular/core";

@Directive({
    selector:"dropdown",
})
export class DropDownDirective{
    isOpen=false;
    @HostListener('class.open') toggelopen(){
        this.isOpen=!this.isOpen;

    }

}