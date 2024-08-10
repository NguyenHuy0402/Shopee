@extends('layouts.admin')
@section('title', 'Thêm phương thức thanh toán')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Thêm phương thức thanh toán</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('admin.payment.index') }}">Trang chủ</a></li>
                    <li class="breadcrumb-item active">Thêm phương thức thanh toán</li>
                </ol>
            </div>
        </div>
    </div>
</section>

<form action="{{ route('admin.payment.store') }}" method="POST">
    @csrf
    <section class="content">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-12 text-right">
                        <button type="submit" class="btn btn-sm btn-success">
                            <i class="fa fa-save"></i> Lưu
                        </button>
                        <a class="btn btn-sm btn-info" href="{{ route('admin.payment.index') }}">
                            <i class="fa fa-arrow-left"></i> Về danh sách
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-9">
                        <div class="mb-3">
                            <label for="payment_method">Tên phương thức thanh toán</label>
                            <input type="text" value="{{ old('payment_method') }}" name="payment_method" id="payment_method"
                                class="form-control" />
                            @error('payment_method')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="amount">Giá</label>
                            <input type="number" value="{{ old('amount') }}" name="amount" id="amount"
                                class="form-control" />
                            @error('amount')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="status">Trạng thái</label>
                            <select name="status" id="status" class="form-control">
                                <option value="2" {{ old('status') == 2 ? 'selected' : '' }}>Chưa xuất bản</option>
                                <option value="1" {{ old('status') == 1 ? 'selected' : '' }}>Xuất bản</option>
                            </select>
                            @error('status')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</form>
@endsection
