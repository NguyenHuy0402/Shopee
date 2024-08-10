@extends('layouts.admin')
@section('title','Đánh giá sản phẩm')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Chi tiết đánh giá sản phẩm</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Blank Page</li>
                </ol>
            </div>
        </div>
    </div>
</section>
<section class="content">
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-12 text-right">
                    <a href="productreview_edit.html" class="btn btn-sm btn-primary">
                        <i class="far fa-edit"></i> Sửa
                    </a>
                    <a href="#" class="btn btn-sm btn-danger">
                        <i class="fas fa-trash"></i> Xóa
                    </a>
                    <a class="btn btn-sm btn-info" href="{{ route('admin.productreview.index')}}">
                        <i class="fa fa-arrow-left"></i> Về danh sách
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th class="text-center" style="width:30%;">
                            <strong>Tên trường</strong>
                        </th>
                        <th class="text-center" style="width:70%;">Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{{ $productreview->review_id }}</td>
                    </tr>
                    <tr>
                        <td>Đánh giá</td>
                        <td>{{ $productreview->rating }}</td>
                    </tr>
                    <tr>
                        <td>Văn bản đánh giá</td>
                        <td>{{ $productreview->review_text }}</td>
                    </tr>
                    <tr>
                        <td>Ngày tạo</td>
                        <td>{{ $productreview->created_at }}</td>
                    </tr>
                    <tr>
                        <td>Người tạo</td>
                        <td>{{ $productreview->created_by }}</td>
                    </tr>
                    <tr>
                        <td>Ngày cập nhật</td>
                        <td>{{ $productreview->updated_at }}</td>
                    </tr>
                    <tr>
                        <td>Người cập nhật</td>
                        <td>{{ $productreview->updated_by }}</td>
                    </tr>
                    <tr>
                        <td>Trạng thái</td>
                        <td>{{ $productreview->status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
@endsection