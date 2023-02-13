import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-casting',
  template: `
  <input (keyup.enter)="onKeyUp($event)" class="mb-3" />
  <br>
  <button (click)="onClick($event)" class="btn btn-primary">Save</button>
  <p [hidden]="!isActive">{{ field }}</p>
  `
})
export class TitleCastingComponent {
  isActive = false;
  field="Empty";

  onClick($event: any) {
    this.isActive=true;
    console.log("Button clicked", $event);
  }

  onKeyUp($event: any) {
    this.isActive=true;
    console.log("enter PRESSED clicked", $event);
  }

}
