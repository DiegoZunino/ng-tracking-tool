import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectComponent } from './projects/project/project.component';
import {HighlightDirective} from "./directives/highlight.directive";
import { UnlessDirective } from './directives/unless.directive';
import { CustomClickDirective } from './directives/custom-click.directive';
import {FilterPipe} from "./pipes/filter.pipe";
import {FormsModule} from "@angular/forms";
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectSearchComponent } from './projects/project-search/project-search.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HighlightDirective,
    UnlessDirective,
    CustomClickDirective,
    FilterPipe,
    ProjectFormComponent,
    ProjectListComponent,
    ProjectSearchComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
