import {Component, Input} from '@angular/core';
import {QuestionListItem} from "../../question/interface/question-list.item";

@Component({
  selector: 'question-list-item',
  template: `
          <div class="col-12 col-md-12 col-lg-12">
            <div class="post clearfix">
              <a routerLink="../questionDetail" class="nav-link">
                <h4>How to install Java 20 on my Linux Server</h4>
              </a>
              <div class="user-block">
                <img class="img-circle img-bordered-sm" src="../../assets/img/user1-128x128.jpg" alt="user image">
                <span class="username">
                              <a href="#" class="text-maroon">Jonathan Burke Jr.</a>
                            </span>
                <span class="description">Shared publicly - 7:45 PM today</span>
              </div>
              <!-- /.user-block -->
              <p>
                Lorem ipsum represents a long-held tradition for designers,
                typographers and the like. Some people hate it and argue for
                its demise, but others ignore.
              </p>
            </div>
          </div>
  `,
  styles: [
  ]
})
export class QuestionListItemComponent<T> {

  @Input()
  questionlistItem!: T;

}
