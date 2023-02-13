import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  template: `
  <i (click)="onClick($event)" [class]="isFavorite ? 'bi-star' : 'bi-star-fill' " class="bi"></i>
  `
})

export class StarComponent {
  isFavorite=true;

  onClick($event: any) {
    this.isFavorite = !this.isFavorite;
  }

}
