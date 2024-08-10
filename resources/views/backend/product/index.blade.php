@extends('layouts.admin')
@section('title', 'Sản phẩm')
@section('content')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>QUẢN LÍ SẢN PHẨM </h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Quản lí sản phẩm</li>
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
                        <a class="btn btn-sm btn-success" href="{{ route('admin.product.create') }}">
                            <i class="fas fa-plus"></i>
                            Thêm
                        </a>
                        <a class="btn btn-sm btn-danger" href="{{ route('admin.product.trash') }}">
                            <i class="fas fa-trash-alt"></i>
                            Thùng rác
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="text-center" style="width:30px">#</th>
                            <th class="text-center" style="width:90px">Hình</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Giảm giá</th>
                            <th>Danh mục</th>
                            <th>Thương hiệu</th>
                            <th class="text-center" style="width:200px">Chức năng</th>
                            <th class="text-center" style="width:30px">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($list as $row)
                            @php
                                $args = ['product_id' => $row->product_id];
                            @endphp
                            <tr>
                                <td class="text-center">
                                    <input type="checkbox" id="checkId" value="1" name="checkId[]">
                                </td>
                                <td class="text-center">
                                    <img src="{{ asset('images/products/' . $row->image) }}"class="img-fluid"
                                        alt="{{ $row->image }}">
                                </td>
                                <td>{{ $row->product_name }}</td>
                                <td>{{ $row->price }}</td>
                                <td>{{ $row->discount }}</td>
                                <td>{{ $row->categoryname }}</td>
                                <td>{{ $row->brandname }}</td>
                                <td class="text-center" style="width:220px">
                                    
                                      <a href=""
                                          class="btn btn-sm btn-success">
                                          <i class="fas fa-toggle-on"></i>
                                      </a>
                                  <a href="{{ route('admin.product.show', $args ) }}" class="btn btn-sm btn-info">
                                      <i class="fas fa-eye"></i>
                                  </a>
                                  <a href="{{ route('admin.product.edit', $args ) }}"
                                      class="btn btn-sm btn-primary">
                                      <i class="fas fa-edit"></i>
                                  </a>
                                  <a href="{{ route('admin.product.delete', $args) }}"
                                      class="btn btn-sm btn-danger">
                                      <i class="fas fa-trash"></i>
                                  </a>
                              </td>
                                <td class="text-center">{{ $row->product_id }}</td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
        </div>
    </section>
@endsection
