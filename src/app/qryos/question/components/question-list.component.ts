import {Component, OnInit, Output} from "@angular/core";
import {from, Observable, of} from "rxjs";
import {QuestionListItem} from "../interface/question-list.item";
import {AbstractQuestionService} from "../classes/abstract-question.service";

@Component({
  selector: "qryos-home",
  template: `

    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Top Questions</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-9 order-2 order-md-1">
          <div class="card elevation-1">
            <div class="card-body p-3">
              <div class="row">
                <listOf [listOfItems]="questions"></listOf>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class QuestionListComponent implements OnInit {



  @Output()
  questions?: Observable<QuestionListItem[]>;

  constructor(private questionService: AbstractQuestionService) {}

  ngOnInit(): void {
    this.questions = this.questionService.findAll();
  }

}
