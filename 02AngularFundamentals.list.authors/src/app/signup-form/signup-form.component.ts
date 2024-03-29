import { UsernameValidators } from './username.validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', 
      [Validators.required, UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required)
  });

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  log(x: any) { console.log(x);}

  login(){
    this.form.setErrors({
      invalidLogin: true
    })
    // let isValid = authServise.login(this.form.value);
    // if (!isValid){
    //   this.form.setErrors({
    //     invalidLogin: true
    //   })
    // }
  }
}
