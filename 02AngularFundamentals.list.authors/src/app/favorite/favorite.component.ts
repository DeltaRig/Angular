import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Output() change = new EventEmitter(); // EventEmmiter is not a primitive type in Typescript

  @Input('is-favorite') isFavorite: boolean | undefined; // the alias is optinal put recommended to reduce the impact if some day this variable change the name

  onClick() { 
    this.isFavorite = !this.isFavorite;
    this.change.emit(); // this notify others that something has happened
  }
}
