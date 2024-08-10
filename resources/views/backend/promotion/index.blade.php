@extends('layouts.admin')
@section('title', 'Khuyến mãi')
@section('content')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>QUẢN LÍ KHUYẾN MÃI</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Quản lí khuyến mãi</li>
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
                        <a class="btn btn-sm btn-success" href="{{ route('admin.promotion.create') }}">
                            <i class="fas fa-plus"></i>
                            Thêm
                        </a>
                        <a class="btn btn-sm btn-danger" href="{{ route('admin.promotion.trash') }}">
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
                            <th>Tên khuyến mãi</th>
                            <th>Loại giảm giá</th>
                            <th>Giá khuyến mãi</th>
                            <th>Thời gian bắt đầu</th>
                            <th>Thời gian kết thúc</th>
                            <th class="text-center" style="width:200px">Chức năng</th>
                            <th>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($list as $row)
                            @php
                                $args = ['id' => $row->id];
                            @endphp
                            <tr>
                                <td class="text-center">
                                    <input type="checkbox" id="checkId" value="1" name="checkId[]">
                                </td>
                                <td>{{ $row->promotion_name }}</td>
                                <td>{{ $row->discount_type }}</td>
                                <td>{{ $row->discount_value }}</td>
                                <td>{{ $row->start_date }}</td>
                                <td>{{ $row->end_date }}</td>
                                <td class="text-center" style="width:220px">

                                  <a href="{{ route('admin.promotion.show', $args ) }}" class="btn btn-sm btn-info">
                                      <i class="fas fa-eye"></i>
                                  </a>
                                <a href="{{ route('admin.promotion.edit', $args ) }}" class="btn btn-sm btn-primary">
                                    <i class="fas fa-edit"></i>
                                </a>
                                  <a href="{{ route('admin.promotion.trash', $args ) }}"
                                      class="btn btn-sm btn-danger">
                                      <i class="fas fa-trash"></i>
                                  </a>
                              </td>
                              <td>{{ $row->id }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </section>
@endsection
