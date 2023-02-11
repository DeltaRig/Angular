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

#### Other notes

- *What is the difference between DOM(Document Object Model) and HTML*

DOM is a model of objects that represent a structure of a docment, it's essentially a tree of objects in memory. And HTML is a markup language that we use to represent DOM in text. 
