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

#### References:

- [Angular: Maintainng Applications](https://www.linkedin.com/learning/angular-maintaining-applications)
- [Angular - The Complete Guide (2023 Edition)](udemy.com/course/the-complete-guide-to-angular-2/)