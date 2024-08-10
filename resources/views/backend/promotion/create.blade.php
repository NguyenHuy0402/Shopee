@extends('layouts.admin')
@section('title', 'Thêm khuyến mãi')
@section('content')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Thêm khuyến mãi</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.promotion.index') }}">Trang chủ</a></li>
                        <li class="breadcrumb-item active">Thêm khuyến mãi</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <form action="{{ route('admin.promotion.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <section class="content">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-12 text-right">
                            <button type="submit" name="create" class="btn btn-sm btn-success">
                                <i class="fa fa-save"></i> Lưu
                            </button>
                            <a class="btn btn-sm btn-info" href="{{ route('admin.promotion.index') }}">
                                <i class="fa fa-arrow-left"></i> Về danh sách
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="mb-3">
                                <label for="promotion_name">Tên khuyến mãi</label>
                                <input type="text" value="{{ old('promotion_name') }}" name="promotion_name" id="promotion_name"
                                    class="form-control" />
                                @error('promotion_name')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="discount_type">Loại giảm giá</label>
                                <input type="text" value="{{ old('discount_type') }}" name="discount_type" id="discount_type" class="form-control"/>
                                @error('discount_type')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="discount_value">Giá khuyến mãi</label>
                                <input type="number" value="{{ old('discount_value') }}" name="discount_value" id="discount_value" class="form-control"/>
                                @error('discount_value')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label for="start_date">Thời gian bắt đầu</label>
                                <input type="date" value="{{ old('start_date') }}" name="start_date" id="start_date" class="form-control"/>
                                @error('start_date')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="end_date">Thời gian kết thúc</label>
                                <input type="date" value="{{ old('end_date') }}" name="end_date" id="end_date" class="form-control"/>
                                @error('end_date')
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
