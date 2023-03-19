# Angular

### Set up the environment

Versions used in this project:

Angular CLI: 13.3.10       
Node: 16.17.0

Install node js, and install Angular CLI with the command bellow:

> npm install -g @angular/cli

To validate the installations use:
> node --version

> ng --version

### VS Code Facilities

- Auto Import

### Typescript Fundamentals

- 'export' in the class permit it be imported as a module in other file.

### Angular Fundamentals

To create a new project

> ng new project_name

To it run in localhost (the default is localhost:4200)

> ng serve

To add a new component in the project

> ng g c component_name

The 'c' could be replaced by 's' if you want create a service

#### Adding bootstrap

The command bellow should add a bootstrap folder with the path that you can import to use bootstrap items.

> npm install bootstrap@5.3.0-alpha1

And in your css (like styles.css)

> @import "~bootstrap/dist/css/bootstrap.css"

To install all project dependencies (in package.json)

> npm install

#### Binding

Default format is like:

```
    <button (<click/keyup>)="methodName($event)" [element.attribute]="<boolean/function that inform the property of the attribute>">Text</button>
```

Example:

```
    <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'white'" class="btn btn-primary">Save</button>
```

One option to receive values in a form is importing FormsModule in app.module.ts, it will permit use 

> <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" class="mb-3" />

if you have the attribute in class Component and the method that will receive the new value when the action happen, in this case keyup.enter.

#### Pipes

And a exemple of pipes and a custom pipe in course and the custum pipe is summary.pipe.ts in the folder 02* .

#### ng-content

<ng-content> is used to create configurable components. To indicate which selector will be used when the data is injected:

> <ng-content select=".class-name"></ng-content> 

And when you call the component that have ng-content it should specefi which data will be injected, like in the exemple bellow:

```
<my-component>
    <div class=".class-name">Here the div that will be injected together with the text</div>
    ...
```

#### gn-conteiner

ng-content is used to display children in a template, ng-container is used as a non-rendered container to avoid having to add a span or a div. And to use it, the only difference from ng-content is that call like this:

> <ng-container class=".class-name">Text that will be injected</ng-container>

### Directives

Structural: Modify the structure of the DOM

Attribute: Modify the attributes of the DOM elements

#### ngIf
Works like a common if but for div or other

```
<div *ngIf="courses.length > 0" >
    <h2>List of Courses</h2>
    <course></course>
</div>
<div *ngIf="courses.length == 0">
    No courses yet
</div>
```

Other format, using *ng-template* to do the same thing:

```
<div *ngIf="courses.length > 0; else noCourses" >
    <h2>List of Courses</h2>
    <course></course>
</div>
<ng-template #noCourses>
    No courses yet
</ng-template>
```

Other way is using hidden property, "[hidden]="courses.legth == 0" that will hide if it be true. It's better use ngIf if you're working with a large tree with a lot of children because these elements can take substantial memory and computing resouces. Using ngIf you don't put them in the DOM if you're not going to show them to the user. The change detection mechanism in Angular keeps your views in sync with your components, that's running in the backgroud.

#### ngSwitchCase

```
<ul class="nav nav-pills">
    <li class="nav-item">
        <a [class.active]="viewMode == 'map'" class="nav-link" (click)="viewMode = 'map'">Map view Mode
        </a>
    </li>
    <li class="nav-item">
        <a [class.active]="viewMode == 'list'" class="nav-link" (click)="viewMode = 'list'">List view Mode</a>
    </li>
</ul>

<div [ngSwitch]="viewMode">
    <div *ngSwitchCase="'map'">Map view Content</div>
    <div *ngSwitchCase="'list'">List view Content</div>
    <div *ngSwitchDefault>Otherwise</div>
</div>
```

#### [ngFor](https://angular.io/api/common/NgForOf)

And ngFor could be used with trackBy to improve performace, look [here](https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5).

#### [ngClass](https://angular.io/api/common/NgClass)

Is a easy way to define which class will be true, like in favorite component:

```
<i 
    [ngClass]="{
        'bi-star': isFavorite,
        'bi-star-fill': !isFavorite
    }">
</i>
```

#### ngStyle

ngStyle could help to achive a clean code, like you can transform this:

```
<button
    [style.backgroudColor]="canSave ? 'blue':'gray'"
    [style.color]="canSave ? 'white':black"
    [style.fontWeight]="canSave ? 'bold':'normal'"    
>Save</button>
```

on this:

```
<button
    [ngStyle]="{
        backgroudColor:=canSave ? 'blue':'gray',
        color=canSave ? 'white':black,
        fontWeight=canSave ? 'bold':'normal'
    }"
>Save</button>
```

For many cases we prefer use the css style, but sometimes in certain situations, we want to add styles explicitly in the html.

#### Create custom directives

> ng g d directive-name

it will create 2 files and modify app.module.ts

### Template-driven Forms

| Reactive  | Template-drive |
| ------------- | ------------- |
| More control over validation logic  | Simple validation  |
| Good for complex forms  | Good for simple forms  |
| Unit testable | Easier to create |
| | Less code |

#### ngModel

The ngModel directive binds the value of the input element to a property on the component. This means that any changes made to the input element are automatically reflected in the component property, and vice versa.

If the component property is updated programmatically, such as by calling a method or receiving data from an API, the ngModel directive updates the value of the input element to reflect the new value of the property.

#### Specific validation errors for forms

How add a validation in the input:
```
<input 
    required 
    minlength="3" 
    maxlength="10" 
    pattern="[0-9]+">
```

How show or check the error:
```
<div 
    class="alert alert-danger" 
    *ngIf="firstName.touched && !firstName.valid">
    <div *ngIf="firstName.errors?.['required']">
        First Name is required.
    </div>
    <div *ngIf="firstName.errors?.['minlength']">
        First name should be minimum {{ firstName.errors?.['minlength'].requiredLength}} characters.
    </div>
    ...
</div>
```

- The way to check the error had change from Angular 4 to 5.
- *Cleaner Template* is like in the last code, you put one item by line so when other developer check the code, like which are the requisites for this field, will be easy to find and read.

#### Styling Invalid Input Fields

.form-control.ng-touched.ng-invalid

#### ngForm

We have created a template reference variable named myForm that references the ngForm directive on the `<form>` element. We have also bound the ngSubmit event to the onSubmit() method of our component. Check bellow:

> <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">

Once you have created your form with ngForm, you can use a variety of directives and tools to bind your form elements to model data and validate user input. Some of the key directives and tools available with ngForm include:

- ngModel: used to bind an input field to a model property
- ngModelGroup: used to group a set of input fields together in the form data model
- ngForm: used to nest forms inside other forms
- ngSubmit: used to trigger a method in your component when the form is submitted
- form.controls: provides access to the form controls and their validation state

#### ngModelGroup

Simplifying form validation: By grouping form controls together, you can simplify your form validation logic. For example, if you have a group of required fields, you can use ngModelGroup to validate them all at once. This can help to reduce the amount of validation code you need to write, and can make your code more readable and maintainable.

Conditional validation: ngModelGroup allows you to perform validation on a group of fields based on a specific condition. For example, you can use ngModelGroup to validate a set of fields only if a certain checkbox is checked or a radio button is selected. This can be very useful for complex forms where some fields are only required or valid in certain contexts.

```
<form>
  <div ngModelGroup="address">
    <div *ngIf="!contact.valid">... error messages ... </div>
    <label>Street Address</label>
    <input type="text" name="street">
    <label>City</label>
    <input type="text" name="city">
    <label>State</label>
    <input type="text" name="state">
    <label>Zip Code</label>
    <input type="text" name="zip">
  </div>
</form>
```

### Reactive Forms

In Angular, both FormControl and FormGroup are subclasses of AbstractControl. AbstractControl is an abstract base class that provides common functionality for all types of form controls, including FormControl, FormGroup, and FormArray.

_AbstractControl_ defines the following properties and methods that are common to all form controls:

- value: The current value of the form control.
- status: The validation status of the form control (e.g. valid, invalid, pending).
- valid: A boolean indicating whether the form control is currently valid.
- invalid: A boolean indicating whether the form control is currently invalid.
- pending: A boolean indicating whether the form control is currently pending validation.
- errors: An object containing any validation errors for the form control.
- pristine: A boolean indicating whether the form control has been touched by the user.
- dirty: A boolean indicating whether the form control has been modified by the user.
- touched: A boolean indicating whether the form control has been touched by the user.
- untouched: A boolean indicating whether the form control has not been touched by the user.
- markAsTouched(): Marks the form control as touched.
- markAsUntouched(): Marks the form control as untouched.
- markAsDirty(): Marks the form control as dirty.
- markAsPristine(): Marks the form control as pristine.
- setValidators(): Sets the validators for the form control.
- setAsyncValidators(): Sets the asynchronous validators for the form control.

FormControl extends AbstractControl and adds a few properties and methods that are specific to single form controls, such as:

- setValue(): Sets the value of the form control.
- patchValue(): Sets the value of the form control without emitting a value change event.
- reset(): Resets the form control to its initial state.
- disabled: A boolean indicating whether the form control is currently disabled.
- enable(): Enables the form control.
- disable(): Disables the form control.

FormGroup also extends AbstractControl, but it represents a group of related form controls. It has all the properties and methods of AbstractControl and adds a few methods that are specific to groups of form controls, such as:

- addControl(): Adds a control to the group.
- removeControl(): Removes a control from the group.
- get(): Gets a control from the group using its name.
- contains(): Checks whether a control exists in the group.

#### Asynchronous Operations
- Calling the server (AJAX)
- Timer functions

```
setTimeout(() => {
    // operations
}, 2000);
```

#### Asynchronous Validators


### Other notes

- *What is the difference between DOM(Document Object Model) and HTML*

DOM is a model of objects that represent a structure of a docment, it's essentially a tree of objects in memory. And HTML is a markup language that we use to represent DOM in text. 

- To make a component more reuseble add a bunch of input and output properties. Input to receive the state and the output to raise events from there custom components. This combination make up the component API (application programming interface).

- Why we use Leading Asterisk (*) before the "ng"?

When Angular sees this leading asterisk with structural directives, it's going to rewrite that block using ng-template. 

- The #name="ng*" syntax creates a template reference variable that references all ng* directives on the input element. This can be useful if you need to access multiple directives on the same element, or if you want to create a more general reference to the element that can be used in multiple contexts. This includes directives such as ngModel, ngForm, ngIf, ngFor, and so on.