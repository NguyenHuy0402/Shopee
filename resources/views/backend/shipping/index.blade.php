@extends('layouts.admin')
@section('title', 'Giao hàng')
@section('content')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>QUẢN LÍ GIAO HÀNG</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Quản lí giao hàng</li>
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
                        <a class="btn btn-sm btn-success" href="{{ route('admin.shipping.create') }}">
                            <i class="fas fa-plus"></i>
                            Thêm
                        </a>
                        <a class="btn btn-sm btn-danger" href="{{ route('admin.shipping.trash') }}">
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
                            <th>Mã vận chuyển</th>
                            <th>Phương thức vận chuyển</th>
                            <th>Giá</th>
                            <th class="text-center" style="width:200px">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($list as $row)
                            @php
                                $args = ['shipping_id' => $row->shipping_id];
                            @endphp
                            <tr>
                                <td class="text-center">
                                    <input type="checkbox" id="checkId" value="1" name="checkId[]">
                                </td>
                                <td>{{ $row->shipping_id}}</td>
                                <td>{{ $row->shipping_method}}</td>
                                <td>{{ $row->cost }}</td>
                                <td class="text-center" style="width:220px">
                                @if ($row->status == 1)
                                <a href="{{ route('admin.shipping.status', $args ) }}" class="btn btn-sm btn-success">
                                    <i class="fas fa-toggle-on"></i>
                                </a>
                                @else
                                <a href="{{ route('admin.shipping.status', $args ) }}" class="btn btn-sm btn-danger">
                                  <i class="fas fa-toggle-off"></i>
                                </a>
                                @endif
                                <a href="{{ route('admin.shipping.show', $args ) }}" class="btn btn-sm btn-info">
                                    <i class="fas fa-eye"></i>
                                </a>
                                <a href="{{ route('admin.shipping.edit', $args ) }}" class="btn btn-sm btn-primary">
                                    <i class="fas fa-edit"></i>
                                </a>
                              <a href="{{ route('admin.shipping.delete', $args ) }}" class="btn btn-sm btn-danger">
                                <i class="fas fa-trash"></i>
                            </a>
                            </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
        </div>
    </section>
@endsection
