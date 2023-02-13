import { AuthorsService } from './authors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { TitleCastingPipe } from './title-casting.pipe';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star/star.component';
import { TitleCastingComponent } from './title-casting/title-casting.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CourseComponent,
    SummaryPipe,
    TitleCastingPipe,
    StarComponent,
    TitleCastingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
