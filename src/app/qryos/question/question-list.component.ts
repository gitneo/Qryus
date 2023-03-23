import {Component} from "@angular/core";

@Component({
  selector:"qryos-home",
  template:`

    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Top Questions</h1>
          </div>
          <!--              <div class="col-sm-6">-->
          <!--                <ol class="breadcrumb float-sm-right">-->
          <!--                  <li class="breadcrumb-item"><a href="#">Home</a></li>-->
          <!--                  <li class="breadcrumb-item"><a href="#">Layout</a></li>-->
          <!--                  <li class="breadcrumb-item active">Fixed Layout</li>-->
          <!--                </ol>-->
          <!--              </div>-->
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <section class="content">
      <!-- Default box -->
      <div class="row">
        <div class="col-12 col-md-12 col-lg-9 order-2 order-md-1">

        <div class="card elevation-1">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                <div class="post clearfix">
                  <a routerLink="/questionDetail" class="nav-link"><h4>How to install Java 20 on my Linux Server</h4></a>
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
            </div>
          </div>
        </div>

      </div>
      </div>


    </section>
    <!-- /.content -->
  `,
})
export class QuestionListComponent {

}
