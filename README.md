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



#### Other notes

- *What is the difference between DOM(Document Object Model) and HTML*

DOM is a model of objects that represent a structure of a docment, it's essentially a tree of objects in memory. And HTML is a markup language that we use to represent DOM in text. 

- To make a component more reuseble add a bunch of input and output properties. Input to receive the state and the output to raise events from there custom components. This combination make up the component API (application programming interface).