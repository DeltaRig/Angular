import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-casting',
  template: `
  <input [(ngModel)]="field" (keyup.enter)="onKeyUp()" class="mb-3" />
  <br>
  <button (click)="onClick()" class="btn btn-primary">Show Title Casting</button>
  <p [hidden]="!isActive">{{ field | titleCasting }}</p>
  `
})
export class TitleCastingComponent {
  isActive = false;
  field="empty";

  onClick() {
    this.isActive=true;
    console.log("Button clicked");
  }

  onKeyUp() {
    this.isActive=true;
    console.log("enter PRESSED clicked");
  }

}
