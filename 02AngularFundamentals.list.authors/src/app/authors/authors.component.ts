import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  template: `
      <h2 class="mt-3">{{ countAuthors }} {{ title }}</h2>
      <ul>
          <li *ngFor="let author of authors">
              {{ author }}
          </li>
      </ul>
  `
})

export class AuthorsComponent {
  title = "Authors";
  countAuthors;
  authors;


  constructor(service: AuthorsService) {
      this.authors = service.getAuthors();
      this.countAuthors = service.getCountAuthors();
  }
}
