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

- In the folder '02AngularFundamentals.list.authors' do you will find my solution for: How would you use the ngFor directive to display the list of authors?

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

To strings/characteres:

> {{ course.title | uppercase | lowercase }} 

To number, if you want separete as a decimal for each 3 chars the default will make it:

> {{ course.students | number }}

Return: 30,102

And to separate using other types specificing the number of integer digits, how much numbers should appear after the dot in the minimum and maximum. 

> {{ course.rating | number:'1.2-2' }}

And for prices you can specify too. The line bellow result in something like USD190.95

> {{ course.price | currency:'AUD':true:'3.2-2' }}

Also is possible use a pipe to change the data format.

> {{ course.releaseDate | date:'shortDate' }}

And a exemple of custom pipe in the summary.pipe.ts in the folder 02* .


#### Other notes

- *What is the difference between DOM(Document Object Model) and HTML*

DOM is a model of objects that represent a structure of a docment, it's essentially a tree of objects in memory. And HTML is a markup language that we use to represent DOM in text. 
