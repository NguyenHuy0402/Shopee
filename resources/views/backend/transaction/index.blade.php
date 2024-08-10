@extends('layouts.admin')
@section('title', 'Sản phẩm')
@section('content')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>QUẢN LÍ GIAO DỊCH</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Quản lí giao dịch</li>
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
                        <a class="btn btn-sm btn-danger" href="{{ route('admin.transaction.trash') }}">
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
                            <th>Tên giao dịch</th>
                            <th>Giá tiền</th>
                            <th>Phương thức thanh toán</th>
                            <th class="text-center" style="width:200px">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($list as $row)
                            @php
                                $args = ['transaction_id' => $row->transaction_id];
                            @endphp
                            <tr>
                                <td class="text-center">
                                    <input type="checkbox" id="checkId" value="1" name="checkId[]">
                                </td>
                                <td>{{ $row->order_id }}</td>
                                <td>{{ $row->amount }}</td>
                                <td>{{ $row->payment_method }}</td>
                                <td class="text-center" style="width:220px">
        
                                      <a href=""
                                          class="btn btn-sm btn-success">
                                          <i class="fas fa-toggle-on"></i>
                                      </a>
                                  <a href="{{ route('admin.transaction.show', $args ) }}" class="btn btn-sm btn-info">
                                      <i class="fas fa-eye"></i>
                                  </a>
                                  <a href="{{ route('admin.transaction.trash', $args ) }}"
                                      class="btn btn-sm btn-danger">
                                      <i class="fas fa-trash"></i>
                                  </a>
                              </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </section>
@endsection
