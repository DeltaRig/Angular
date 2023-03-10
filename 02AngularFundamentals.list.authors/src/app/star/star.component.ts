import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
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
