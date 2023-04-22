# Router

Implementation on Router folder with Angular 15.

## What are Single Page Applications? 
When start navigating around, you will see that the page does not fully
reload – only new data gets sent over the wire as the user navigates
through the application – that is an example of a single page
application.


### Advantages and Downsides
A single page application is super-simple to deploy if compared to more traditional server-side rendered applications: it's really just one index.html file, with a CSS bundle and a Javascript bundle.

The main advanteges is better user experience and an improvement in perceived performance.

## routerLink Directive

- routerLink (have some equivalent ways)
```
<a routerLink="">Home</a>
<a routerLink="courses">Courses</a>
<a [routerLink]="['lessons']">Lessons</a>
```

- routLink Active Directives informing which page is active:
```
<a routerLink="" routerLinkActive="menu-item-active">Home</a>
<a routerLink="courses" routerLinkActive="menu-item-active">Courses</a>
<a [routerLink]="['lessons']">Lessons</a>
```

## Angular Router Essentials

The Angular router has great support for lazy loaded modules. In app-routing.module.ts we have something like this:

```
const routes: Routes = [
    {
        path: "courses",
        loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
    },
    {
        path: "login",
        component: LoginComponent
    }
];
```

If you want add a NotFound page, it should be the last route because the Path "**" will correspond to anything.

![plot](./images/03.404.png)

And to make a redirect to other page, you can follow the example bellow that go from "" (home) to "/courses"

```
{
    path: "",
    redirectTo: "/courses",
    pathMatch: "full"
}
```


## Reference:

- [Angular Router In Depth (Angular 15)](https://www.udemy.com/course/angular-router-course/)