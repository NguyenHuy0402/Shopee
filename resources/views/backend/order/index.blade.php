@extends('layouts.admin')
@section('title', 'Đơn hàng')
@section('content')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>QUẢN LÍ ĐƠN HÀNG</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Quản lí đơn hàng</li>
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
                        <a class="btn btn-sm btn-danger" href="{{ route('admin.order.trash') }}">
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
                            <th>Ngày đặt hàng</th>
                            <th>Tổng đơn hàng</th>
                            <th>Địa chỉ</th>
                            <th>Phương pháp vận chuyển</th>
                            <th>Phương thức thanh toán	</th>
                            <th class="text-center" style="width:200px">Chức năng</th>
                            <th class="text-center" style="width:30px">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($list as $row)
                            @php
                                $args = ['order_id' => $row->order_id];
                            @endphp
                            <tr>
                                <td class="text-center">
                                    <img src="{{ asset('images/brands/' . $row->image) }}"class="img-fluid"
                                        alt="{{ $row->image }}">
                                </td>
                                <td>{{ $row->order_date }}</td>
                                <td>{{ $row->totalorder	 }}</td>
                                <td>{{ $row->address }}</td>
                                <td>{{ $row->shipping_method }}</td>
                                <td>{{ $row->payment_method	 }}</td>
                                <td class="text-center" style="width:220px">
                                    @if ($row->status == 1)
                                    <a href="{{ route('admin.order.status', $args ) }}" class="btn btn-sm btn-success">
                                        <i class="fas fa-toggle-on"></i>
                                    </a>
                                    @else
                                    <a href="{{ route('admin.order.status', $args ) }}" class="btn btn-sm btn-danger">
                                      <i class="fas fa-toggle-off"></i>
                                    </a>
                                    @endif
                                    <a href="{{ route('admin.order.show', $args ) }}" class="btn btn-sm btn-info">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                    <a href="{{ route('admin.order.delete', $args ) }}" class="btn btn-sm btn-danger">
                                        <i class="fas fa-trash"></i>
                                    </a>
                              </td>
                                <td class="text-center">{{ $row->order_id }}</td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
        </div>
    </section>
@endsection
