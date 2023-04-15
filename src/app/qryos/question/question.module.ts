import {NgModule} from "@angular/core";
import {QuestionListComponent} from "./components/question-list.component";
import {NewQuestionComponent} from "./components/new-question.component";
import {QuestionDetailsComponent} from "./components/question-details.component";
import {QuestionListItemComponent} from "../shared/list/question-list-item.component";
import {CommonModule} from "@angular/common";
import {AbstractQuestionService} from "./classes/abstract-question.service";
import {QuestionService} from "./services/question.service";
import {SharedModule} from "../shared/shared.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations:[
    QuestionListComponent,
    NewQuestionComponent,
    QuestionDetailsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule
  ],
  providers:[
    {
      provide:AbstractQuestionService,
      useClass:QuestionService
    }
  ]
})
export class QuestionModule{}
