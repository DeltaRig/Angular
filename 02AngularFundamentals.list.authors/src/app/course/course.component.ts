import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  template: `
  <div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">{{ title | lowercase | uppercase}} <br></div>
    <div class="card-body text-dark">
    <h5 class="card-title">{{ text | summary:100 }}</h5>
      <p class="card-text">Studants: {{ students | number }} <br>
      Rating: {{ rating | number:'1.2-2' }} <br>
      Price:{{ price | currency:'AUD':true:'3.2-2' }} <br>
      Release Date: {{ releaseDate | date:'shortDate' }}</p>
    </div>
  </div>

  ` 
})

export class CourseComponent {
  title = "Curso de Angular";
  students = 50;
  rating = 4.2;
  price = 213.99;
  releaseDate = new Date();
  text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae porttitor ex. Nulla id molestie ex. Nunc ac purus massa. Cras quis tortor eget nisl ultricies imperdiet. Curabitur at dui felis. Donec lectus nulla, sagittis quis ante ac, vehicula maximus dui.
  `;
}
