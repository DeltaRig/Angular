import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html'
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
