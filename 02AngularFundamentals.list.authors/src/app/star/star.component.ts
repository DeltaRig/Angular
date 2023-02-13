import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  template: `<br>TESTE<br>
  <i (click)="onClick($event)" [class]="isFavorite ? 'bi-star' : 'bi-star-fill' " class="bi"></i>
  `
})

export class StarComponent {
  isFavorite=true;

  onClick($event: any) {
    if(this.isFavorite)
      this.isFavorite=false;
    else
      this.isFavorite=true;
  }

}
