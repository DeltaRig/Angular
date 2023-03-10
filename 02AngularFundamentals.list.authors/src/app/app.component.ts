import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning Angular';
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("favorite changed: ", eventArgs);
  }

  courses=[
    {title: "Angular's Course", students: 50, rating: 4.2, price:230.98},
    {title: "Cypress's Course", students: 30, rating: 3.2, price:130.98},
    {title: "Network's Course", students: 60, rating: 4.4, price:180.00},
    {title: "Network's Course", students: 60, rating: 4.4, price:180.00},
    {title: "Network's Course", students: 60, rating: 4.4, price:180.00}
  ];

  viewMode = 'courses';
}
