import {Component} from "@angular/core";

@Component({
  selector:"dashboard",
  template:`

    <div class="wrapper">

      <div class="sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">

        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Dashboard v2</h1>
              </div><!-- /.col -->
            </div><!-- /.row -->
          </div><!-- /.container-fluid -->
        </div>


        <section class="content" >
          <div class="container-fluid">


                <div class="row">

                  <div class="col-8">

                    <!-- TABLE: LATEST ORDERS -->
                    <div class="card">
                      <div class="card-header border-transparent">
                        <h3 class="card-title">Latest Orders</h3>

                        <div class="card-tools">
                          <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                          </button>
                          <button type="button" class="btn btn-tool" data-card-widget="remove">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                      <!-- /.card-header -->
                      <div class="card-body p-0">
                        <div class="table-responsive">
                          <table class="table m-0">
                            <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Item</th>
                              <th>Status</th>
                              <th>Popularity</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td><a href="pages/examples/invoice.html">OR9842</a></td>
                              <td>Call of Duty IV</td>
                              <td><span class="badge badge-success">Shipped</span></td>
                              <td>
                                <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="pages/examples/invoice.html">OR1848</a></td>
                              <td>Samsung Smart TV</td>
                              <td><span class="badge badge-warning">Pending</span></td>
                              <td>
                                <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="pages/examples/invoice.html">OR7429</a></td>
                              <td>iPhone 6 Plus</td>
                              <td><span class="badge badge-danger">Delivered</span></td>
                              <td>
                                <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="pages/examples/invoice.html">OR7429</a></td>
                              <td>Samsung Smart TV</td>
                              <td><span class="badge badge-info">Processing</span></td>
                              <td>
                                <div class="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="pages/examples/invoice.html">OR1848</a></td>
                              <td>Samsung Smart TV</td>
                              <td><span class="badge badge-warning">Pending</span></td>
                              <td>
                                <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="pages/examples/invoice.html">OR7429</a></td>
                              <td>iPhone 6 Plus</td>
                              <td><span class="badge badge-danger">Delivered</span></td>
                              <td>
                                <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="pages/examples/invoice.html">OR9842</a></td>
                              <td>Call of Duty IV</td>
                              <td><span class="badge badge-success">Shipped</span></td>
                              <td>
                                <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- /.table-responsive -->
                      </div>
                    </div>
                    <!-- /.card -->

                  </div>


                  <div class="col-md-4">
                    <!-- USERS LIST -->
                    <div class="card">
                      <div class="card-header">
                        <h3 class="card-title">Latest Members</h3>
                        <div class="card-tools">
                          <span class="badge badge-danger">8 New Members</span>
                          <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                          </button>
                          <button type="button" class="btn btn-tool" data-card-widget="remove">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                      <!-- /.card-header -->
                      <div class="card-body p-0">
                        <ul class="users-list clearfix">
                          <li>
                            <img src="assets/img/user1-128x128.jpg" alt="User Image">
                            <a class="users-list-name" href="#">Yiigit</a>
                            <span class="users-list-date">Today</span>
                          </li>
                          <li>
                            <img src="assets/img/user8-128x128.jpg" alt="User Image">
                            <a class="users-list-name" href="#">Ogo</a>
                            <span class="users-list-date">Yesterday</span>
                          </li>
                          <li>
                            <img src="assets/img/user7-128x128.jpg" alt="User Image">
                            <a class="users-list-name" href="#">Steve</a>
                            <span class="users-list-date">12 Jan</span>
                          </li>
                          <li>
                            <img src="assets/img/user6-128x128.jpg" alt="User Image">
                            <a class="users-list-name" href="#">Jobs</a>
                            <span class="users-list-date">12 Jan</span>
                          </li>
                          <li>
                            <img src="assets/img/user2-160x160.jpg" alt="User Image">
                            <a class="users-list-name" href="#">Bill</a>
                            <span class="users-list-date">13 Jan</span>
                          </li>
                          <li>
                            <img src="assets/img/user5-128x128.jpg" alt="User Image">
                            <a class="users-list-name" href="#">Gates</a>
                            <span class="users-list-date">14 Jan</span>
                          </li>
                          <li>
                            <img src="assets/img/user4-128x128.jpg" alt="User Image">
                            <a class="users-list-name" href="#">Nora</a>
                            <span class="users-list-date">15 Jan</span>
                          </li>
                          <li>
                            <img src="assets/img/user3-128x128.jpg" alt="User Image">
                            <a class="users-list-name" href="#">Nadia</a>
                            <span class="users-list-date">15 Jan</span>
                          </li>
                        </ul>
                        <!-- /.users-list -->
                      </div>
                      <!-- /.card-body -->
                      <div class="card-footer text-center">
                        <a href="javascript:">View All Users</a>
                      </div>
                      <!-- /.card-footer -->
                    </div>
                    <!--/.card -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->

            <!-- /.row -->
          </div><!--/. container-fluid -->
        </section>
      </div>
    </div>
    <!-- /.content -->
  `,
})
export class DashboardComponent {

}
