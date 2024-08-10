@extends('layouts.admin')
@section('title','Người dùng')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Chi tiết người dùng</h1>
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
                    <a href="" class="btn btn-sm btn-primary">
                        <i class="fas fa-edit">Sửa</i>
                    </a>
                    <a href="" class="btn btn-sm btn-danger">
                        <i class="fas fa-trash">Xóa</i>
                    </a>
                    <a class="btn btn-sm btn-info" href="{{ route('admin.user.index')}}">
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
                        <td>Id</td>
                        <td>{{ $user->user_id }}</td>
                    </tr>
                   
                    <tr>
                        <td>Name</td>
                        <td>{{ $user->name }}</td>
                    </tr>
                    <tr>
                        <td>Hình ảnh</td>
                        <td>{{ $user->image }}</td>
                    </tr>
                    <tr>
                        <td>Giới tính</td>
                        <td>{{ $user->gender }}</td>
                    </tr>
                    <tr>
                        <td>Mật khẩu</td>
                        <td>{{ $user->password }}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{ $user->email }}</td>
                    </tr>
                    <tr>
                        <td>Số điện thoại</td>
                        <td>{{ $user->phone }}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>{{ $user->roles }}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{{ $user->status }}</td>
                    </tr>
                    <tr>
                        <td>Created_at</td>
                        <td>{{ $user->created_at }}</td>
                    </tr>
                    <tr>
                        <td>Created_by</td>
                        <td>{{ $user->created_by }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
@endsection