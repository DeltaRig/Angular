import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html'
})

export class CourseComponent {
  @Input('title') title: string | undefined;
  @Input('students')students : number = 0;
  @Input('rating')rating : number = 0;
  @Input('price')price = 150;
  releaseDate = new Date();
  text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae porttitor ex. Nulla id molestie ex. Nunc ac purus massa. Cras quis tortor eget nisl ultricies imperdiet. Curabitur at dui felis. Donec lectus nulla, sagittis quis ante ac, vehicula maximus dui.
  `;
}
