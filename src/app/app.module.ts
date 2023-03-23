import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TemplateComponent} from "./qryos/common/template.component";
import {QuestionListComponent} from "./qryos/question/question-list.component";
import {NewQuestionComponent} from "./qryos/question/new-question.component";
import {AppRoutingModule} from "./app-routing.module";
import {QuestionDetailsComponent} from "./qryos/question/question-details.component";
import {DashboardComponent} from "./qryos/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemplateComponent,
    QuestionListComponent,
    NewQuestionComponent,
    QuestionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
