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
import { PanelComponent } from './panel/panel.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCastingComponent } from './title-casting/title-casting.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CourseComponent,
    SummaryPipe,
    PanelComponent,
    TitleCastingPipe,
    FavoriteComponent,
    TitleCastingComponent,
    InputFormatDirective,
    ZippyComponent
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
