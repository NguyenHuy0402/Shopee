@extends('layouts.admin')
@section('title', 'Cập nhật thanh toán')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Cập nhật thanh toán</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Cập nhật thanh toán</li>
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
                    <a class="btn btn-sm btn-danger" href="{{ route('admin.payment.delete', ['id' => $payment->id]) }}">
                        <i class="fas fa-trash"></i> Thùng rác
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.payment.update', ['id' => $payment->id]) }}" method="post" enctype="multipart/form-data">
                @csrf
                @method('put')

                <div class="mb-3">
                    <label for="payment_method">Tên phương thức thanh toán</label>
                    <input type="text" value="{{ old('payment_method', $payment->payment_method) }}" name="payment_method" id="payment_method" class="form-control">
                    @error('payment_method')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="amount">Giá</label>
                    <input type="text" value="{{ old('amount', $payment->amount) }}" name="amount" id="amount" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="status">Trạng thái</label>
                    <select name="status" id="status" class="form-control">
                        <option value="2" {{ $payment->status == 2 ? 'selected' : '' }}>Chưa xuất bản</option>
                        <option value="1" {{ $payment->status == 1 ? 'selected' : '' }}>Xuất bản</option>
                    </select>
                </div>

                <div class="mb-3">
                    <button type="submit" class="btn btn-success">Cập nhật</button>
                </div>
            </form>
        </div>
    </div>
</section>
@endsection
