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

*Linkable pages in single page application*: It means see a page by ID of component or something like that. 

- You can add a new service and HTTP based injected service in the constructor and use it to featch the page, but in this case if the user but by HTTP a information that mismatch will go to a broken page. 
- SOLUTION: To avoid this have a solution passing the full component in like "component: CourseComponent" and to it works we add component.resolve.ts like in "03Router\src\app\courses\services\course.resolve.ts" where we have the code bellow and it communique with the component service, it permits the application keep in the Courses page if mismatch the information. And add the component.resolve.ts in provide list of component-routing.module.ts.

course.resolve.ts:
```
export class CourseResolver implements Resolve<Course> {
    constructor(private courses: CoursesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Course> {

        const courseUrl = route.paramMap.get("courseUrl");

        return this.courses.loadCourseByUrl(courseUrl);
    }
}
```

Method in CourseService:
```
loadCourseByUrl(courseUrl:string) {
    return this.http.get<Course>(`/api/courses/${courseUrl}`)
        .pipe(
            shareReplay()
        );
}
```

couses-routing.module.ts
```
{
    path:":courseUrl",
    component: CourseComponent,
    resolve: {
        CourseResolver
    }
}
```

app-routing.module.ts
```
{
    path: "courses",
    loadChildren: () => import('./courses/courses.module')
                        .then(m => m.CoursesModule),
    data: {
        preload: false
    }
},
```

## Navigation

- router-outlet in HTML means that this screen makes up for the skeleton of the application.

- The routes on our component routing configuration might also themselves have their own set child routes. Like in the example bellow, that each course will have lessons. And to show the LeassonsList component for the course.

```
{
    path:":courseUrl",
    component: CourseComponent,
    children: [
        {
            path: "",
            component: LessonsListComponent,
            resolve: {
                lessons: LessonsResolver
            }
        },
        {
            path: "lessons/:lessonSeqNo",
            component: LessonDetailComponent,
            resolve: {
                lesson: LessonDetailResolver
            }
        }
    ],
    resolve: {
        course: CourseResolver
    }
}
```


## Reference:

- [Angular Router In Depth (Angular 15)](https://www.udemy.com/course/angular-router-course/)