@extends('layouts.admin')
@section('title','Menu')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Chi tiết menu</h1>
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
                    <a href="menu_edit.html" class="btn btn-sm btn-primary">
                        <i class="far fa-edit"></i> Sửa
                    </a>
                    <a href="#" class="btn btn-sm btn-danger">
                        <i class="fas fa-trash"></i> Xóa
                    </a>
                    <a class="btn btn-sm btn-info" href="{{ route('admin.menu.index')}}">
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
                        <td>{{ $menu->id }}</td>
                    </tr>
                    <tr>
                        <td>Tên</td>
                        <td>{{ $menu->name }}</td>
                    </tr>
                    <tr>
                        <td>Link </td>
                        <td>{{ $menu->link }}</td>
                    </tr>
                    <tr>
                        <td>Position </td>
                        <td>{{ $menu->position }}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{{ $menu->status }}</td>
                    </tr>
                    <tr>
                        <td>Created_at</td>
                        <td>{{ $menu->created_at }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
@endsection