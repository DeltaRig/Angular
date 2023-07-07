*How see the current dependencies versions installed*
> npm ls

*How see which versions was update in the last 'npm install'?*
> npm outdated

### *What is the most difference between Angular 2 to 4?*
- The generation of the file reduce by 60 percent, therefore making you code run faster;
- Support for Typescript 2.1;
- When you generate a new project using the CLI, this is built in;
- In Angular 4 animation library have been pulled out of the Angular code library, so when you need to use the animations, you need to import browser animation module, and then use it in _ngModule_;
- In Angular 4 now you can use _else_ with _ngIf_
- In Angular 4 use _ng-template_ instead of just _template_

### @ViewChild() in Angular 8+

In Angular 8+, the @ViewChild() syntax which you'll see in the next lecture needs to be changed slightly:

Instead of:

> @ViewChild('serverContentInput') serverContentInput: ElementRef;
use

> @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.

### Fixing a Bug
When we add some code to access the controls of our form array:

> *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index"

This code will fail as of the latest Angular version.

You can fix it easily though. Outsource the "get the controls" logic into a method of your component code (the .ts file):

```
getControls() {
  return (<FormArray>this.signupForm.get('hobbies')).controls;
}
```

In the template, you can then use:

```
*ngFor="let hobbyControl of getControls(); let i = index"
```

Alternatively, you can set up a getter and use an alternative type casting syntax:

```
get controls() {
  return (this.signupForm.get('hobbies') as FormArray).controls;
}
```

and then in the template:

```
*ngFor="let hobbyControl of controls; let i = index"
```

This adjustment is required due to the way TS works and Angular parses your templates (it doesn't understand TS there).

#### References:

- [Angular: Maintainng Applications](https://www.linkedin.com/learning/angular-maintaining-applications)
- [Angular - The Complete Guide (2023 Edition)](udemy.com/course/the-complete-guide-to-angular-2/)