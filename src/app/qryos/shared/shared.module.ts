import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListComponent} from "./list/list.component";
import {ListItemComponent} from "./list/list-item.component";
import {QuestionListItemComponent} from "./list/question-list-item.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    QuestionListItemComponent,
  ],
  exports: [
    ListComponent
  ],
  imports: [CommonModule, RouterLink]
})
export class SharedModule{}
