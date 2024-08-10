@extends('layouts.admin')
@section('title','Bài viết')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Chi tiết bài viết</h1>
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
                    <a href="post_edit.html" class="btn btn-sm btn-primary">
                        <i class="far fa-edit"></i> Sửa
                    </a>
                    <a href="#" class="btn btn-sm btn-danger">
                        <i class="fas fa-trash"></i> Xóa
                    </a>
                    <a class="btn btn-sm btn-info" href="{{ route('admin.post.index')}}">
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
                        <td>{{ $post->post_id }}</td>
                    </tr>
                    <tr>
                        <td>Tiêu đề</td>
                        <td>{{ $post->title }}</td>
                    </tr>
                    <tr>
                        <td>slug</td>
                        <td>{{ $post->slug }}</td>
                    </tr>
                    <tr>
                        <td>Chi tiết</td>
                        <td>{{ $post->detail }}</td>
                    </tr>
                    <tr>
                        <td>Sự miêu tả</td>
                        <td>{{ $post->description }}</td>
                    </tr>
                    <tr>
                        <td>Kiểu</td>
                        <td>{{ $post->type }}</td>
                    </tr>
                    <tr>
                        <td>Hình ảnh</td>
                        <td>
                            <img style="width: 100px" class="img img-fluid"
                                src="{{ asset('images/post/' . $post->image) }}" alt="{{ $post->image }}">
                        </td>
                    </tr>
                    <tr>
                        <td>Ngày tạo</td>
                        <td>{{ $post->created_at }}</td>
                    </tr>
                    <tr>
                        <td>Người tạo</td>
                        <td>{{ $post->created_by }}</td>
                    </tr>
                    <tr>
                        <td>Ngày cập nhật</td>
                        <td>{{ $post->updated_at }}</td>
                    </tr>
                    <tr>
                        <td>Người cập nhật</td>
                        <td>{{ $post->updated_by }}</td>
                    </tr>
                    <tr>
                        <td>Trạng thái</td>
                        <td>{{ $post->status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
@endsection