import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  
  @Input('is-favorite') isFavorite: boolean | undefined; // the alias is optinal put recommended to reduce the impact if some day this variable change the name
  @Output('change') change = new EventEmitter(); // EventEmmiter is not a primitive type in Typescript


  onClick() { 
    this.isFavorite = !this.isFavorite;
    this.change.emit( { newValue: this.isFavorite } ); // this notify others that something has happened
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}