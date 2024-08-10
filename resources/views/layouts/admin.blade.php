<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bảng điều khiển</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset('plugins/fontawesome-free/css/all.min.css')}}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('dist/css/adminlte.min.css')}}">
  
  <style>
    .navbar { background-color: #343a40; }
    .navbar a.nav-link { color: #ffffff; }
    .main-sidebar { background-color: #23272b; }
    .main-sidebar .nav-link { color: #c2c7d0; }
    .main-sidebar .nav-link.active { background-color: #007bff; color: #ffffff; }
    .main-sidebar .nav-header { color: #ffffff; }
    .content-wrapper { background-color: #f8f9fa; }
    .footer { background-color: #343a40; color: #ffffff; }
    .footer a { color: #ffffff; }
    .brand-link { background-color: #343a40; }
  </style>
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-dark">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Liên Hệ</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">0</span>
        </a>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">0</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="{{ asset('dist/img/AdminLTELogo.png')}}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Quản trị viên</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="{{ asset('dist/img/user2-160x160.jpg')}}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Nhóm 1</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Dashboard Section -->
            <li class="nav-item menu-open">
                <a href="#" class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Bảng điều khiển
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="{{ route('admin.dashboard.index') }}" class="nav-link active">
                            <i class="fas fa-columns nav-icon"></i>
                            <p>Tổng quan</p>
                        </a>
                    </li>
                </ul>
            </li>
    
            <!-- Products Management -->
            <li class="nav-header">Quản lý Sản phẩm</li>
            <li class="nav-item">
                <a href="{{ route('admin.product.index') }}" class="nav-link">
                    <i class="fas fa-gifts nav-icon"></i>
                    <p>Sản phẩm</p>
                </a>
            </li>
            <li class="nav-item">
              <a href="{{ route('admin.productreview.index')}}" class="nav-link">
                <i class="fas fa-star nav-icon"></i>
                <p>Đánh giá sản phẩm</p>
              </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('admin.category.index') }}" class="nav-link">
                    <i class="fas fa-tasks nav-icon"></i>
                    <p>Danh mục</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('admin.brand.index') }}" class="nav-link">
                    <i class="fab fa-shopify nav-icon"></i>
                    <p>Thương Hiệu</p>
                </a>
            </li>
    
            <!-- Marketing and Content Management -->
            <li class="nav-header">Marketing và Nội dung</li>
            <li class="nav-item">
                <a href="{{ route('admin.banner.index') }}" class="nav-link">
                    <i class="fas fa-image nav-icon"></i>
                    <p>Banner</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('admin.post.index') }}" class="nav-link">
                    <i class="fas fa-file-alt nav-icon"></i>
                    <p>Bài viết</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('admin.topic.index') }}" class="nav-link">
                    <i class="fas fa-tags nav-icon"></i>
                    <p>Chủ đề</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('admin.menu.index') }}" class="nav-link">
                    <i class="fas fa-list nav-icon"></i>
                    <p>Menu</p>
                </a>
            </li>
            <!-- Add Voucher Management -->
            <li class="nav-item">
              <a href="{{ route('admin.promotion.index') }}" class="nav-link">
                  <i class="fas fa-gift nav-icon"></i>
                  <p>Khuyến mãi</p>
              </a>
          </li>
          
    
            <!-- Transactions and Payments -->
            <li class="nav-header">Giao dịch và Thanh toán</li>
            <li class="nav-item">
                <a href="{{ route('admin.transaction.index') }}" class="nav-link">
                    <i class="fas fa-exchange-alt nav-icon"></i>
                    <p>Giao dịch</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('admin.payment.index') }}" class="nav-link">
                    <i class="far fa-money-bill-alt nav-icon"></i>
                    <p>Thanh toán</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('admin.shipping.index') }}" class="nav-link">
                    <i class="fas fa-truck nav-icon"></i>
                    <p>Giao hàng</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('admin.order.index') }}" class="nav-link">
                    <i class="fas fa-shopping-cart nav-icon"></i>
                    <p>Đơn hàng</p>
                </a>
            </li>
            <li class="nav-item">
              <a href="{{ route('admin.orderdetail.index')}}" class="nav-link">
                <i class="fas fa-box nav-icon"></i>
                <p>Chi tiết đơn hàng</p>
              </a>
            </li>
            <!-- User Management -->
            <li class="nav-header">Quản lý Người dùng</li>
            <li class="nav-item">
                <a href="{{ route('admin.user.index') }}" class="nav-link">
                    <i class="fas fa-users nav-icon"></i>
                    <p>Người dùng</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ route('admin.contact.index') }}" class="nav-link">
                    <i class="fas fa-address-book nav-icon"></i>
                    <p>Liên hệ khách hàng</p>
                </a>
            </li>
    
            <!-- Policies and Settings -->
            <li class="nav-header">Chính sách và Cài đặt</li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="far fa-file-alt nav-icon"></i>
                    <p>Chính sách</p>
                </a>
            </li>
    
            <!-- Labels Section -->
            <li class="nav-header">LABELS</li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon far fa-circle text-danger"></i>
                    <p>Important</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon far fa-circle text-warning"></i>
                    <p>Warning</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon far fa-circle text-info"></i>
                    <p>Informational</p>
                </a>
            </li>
        </ul>
    </nav>
    <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- CONTENT -->
    @yield('content')
    <!-- /.CONTENT -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.2.0
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- jQuery -->
<script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script>
<!-- Bootstrap 4 -->
<!-- jQuery Mapael -->

<script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('dist/js/adminlte.js') }}"></script>
</body>
</html>
