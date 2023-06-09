import {NgModule} from "@angular/core";
import {Route, Router, RouterModule} from "@angular/router";
import {QuestionListComponent} from "./qryos/question/components/question-list.component";
import {NewQuestionComponent} from "./qryos/question/components/new-question.component";
import {QuestionDetailsComponent} from "./qryos/question/components/question-details.component";
import {DashboardComponent} from "./qryos/dashboard/dashboard.component";


const routes :Route[] = [
  {path:'home', component:QuestionListComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'question',component:NewQuestionComponent},
  {path:'questionDetail',component:QuestionDetailsComponent},
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
