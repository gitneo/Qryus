import {Component, ElementRef, ViewChild} from "@angular/core";
import {AbstractQuestionService} from "../classes/abstract-question.service";
import {Question} from "../interface/question";

@Component({
  selector:'qryus-question',
  template:`

    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Ask Question</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="row">
      <div class="col-9">
        <div class="card card-primary">
          <form>
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" placeholder="Enter Title" #titleOfQuestion>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-9">
            <!-- /.card-header -->
              <textarea id="summernote"  #bodyOfQuestion>
                Place <em>some</em> <u>text</u> <strong>here</strong>
              </textarea>
        </div>
        <!-- /.col-->
      </div>
      <!-- ./row -->
<!--      <div class="row">-->
<!--        <div class="col-md-12">-->
<!--          <div class="card card-outline card-info">-->
<!--            <div class="card-header">-->
<!--              <h3 class="card-title">-->
<!--                CodeMirror-->
<!--              </h3>-->
<!--            </div>-->
<!--            &lt;!&ndash; /.card-header &ndash;&gt;-->
<!--            <div class="card-body p-0">-->
<!--              <textarea id="codeMirrorDemo" class="p-3">-->
<!--                <div class="info-box bg-gradient-info">-->
<!--                  <span class="info-box-icon"><i class="far fa-bookmark"></i></span>-->
<!--                  <div class="info-box-content">-->
<!--                    <span class="info-box-text">Bookmarks</span>-->
<!--                    <span class="info-box-number">41,410</span>-->
<!--                    <div class="progress">-->
<!--                      <div class="progress-bar" style="width: 70%"></div>-->
<!--                    </div>-->
<!--                    <span class="progress-description">-->
<!--                      70% Increase in 30 Days-->
<!--                    </span>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </textarea>-->
<!--            </div>-->
<!--            <div class="card-footer">-->
<!--              Visit <a href="https://codemirror.net/">CodeMirror</a> documentation for more examples and information about the plugin.-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- /.col-->
<!--      </div>-->
      <!-- ./row -->
    </section>
    <!-- /.content -->
    <div class="row">
      <div class="col-9">
        <div class="card elevation-0">
          <div class="card-body row">
            <div class="col-md-12">
              <button type="button" class="btn bg-maroon" (click)="saveQuestion()">Submit Question</button>
            </div>
          </div>
        </div>
      </div>
    </div>



  `
})
export class NewQuestionComponent {

  @ViewChild("titleOfQuestion") title: ElementRef | undefined;
  @ViewChild("bodyOfQuestion")  body: ElementRef | undefined;

  constructor(private questionService: AbstractQuestionService) {}

  saveQuestion(){
    let question: Question = {
      title:this.title?.nativeElement.value,
      body:this.body?.nativeElement.value,
      user:{id:'xxx', name:'OgoOkafor',pic:'xxx' },
    }
    this.questionService.save(question);
  }
}
