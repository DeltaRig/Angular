import { AuthorsService } from './services/authors.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { TitleCastingPipe } from './common/title-casting.pipe';
import { SummaryPipe } from './common/summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCastingComponent } from './title-casting/title-casting.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    AuthorsComponent,
    CourseComponent,
    SummaryPipe,
    PanelComponent,
    TitleCastingPipe,
    FavoriteComponent,
    TitleCastingComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthorsService,
    PostService,
    { provide: ErrorHandler , useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
