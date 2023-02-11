import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  template: `
      <h2>{{ countAuthors }} {{ title }}</h2>
      <ul>
          <li *ngFor="let author of authors">
              {{ author }}
          </li>
      </ul>
      <input (keyup.enter)="onKeyUp()" class="mb-3" />
      <br>
      <button (click)="onClick($event)" [style.backgroundColor]="isActive ? 'blue' : 'white'" class="btn btn-primary">Save</button>
  `
})

export class AuthorsComponent {
  title = "Authors";
  countAuthors;
  authors;
  isActive = true;

  constructor(service: AuthorsService) {
      this.authors = service.getAuthors();
      this.countAuthors = service.getCountAuthors();
  }

  onClick($event: any) {
    console.log("Button clicked", $event);
  }

  onKeyUp() {
    console.log("ENTER was pressed");
  }
}
