import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  /* Commented just to have a FormBuilder example
  form = new FormGroup ({
    name: new FormControl('', Validators.required),
    categories: new FormControl(),
    topics: new FormArray([]),
    haveGuarantee: new FormControl
  });*/

  form;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      categories: [],
      topics: fb.array([]),
      haveGuarantee: []
    });
  }

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
