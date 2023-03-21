import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  form = new FormGroup ({
    topics: new FormArray([])
  });

  categories = [
    { id: 1, name: 'Development'},
    { id: 2, name: 'Art'},
    { id: 3, name: 'Languages'},
  ];

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(index: number){
    this.topics.removeAt(index);
  }

  submit(f: any){
    console.log(f);
    console.log(f.value)
  }
}
