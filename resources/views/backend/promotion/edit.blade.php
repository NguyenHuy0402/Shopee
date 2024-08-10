@extends('layouts.admin')
@section('title','Khuyến mãi')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Cập nhật khuyến mãi</h1>
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
                    <a class="btn btn-sm btn-danger" href="{{ route('admin.promotion.delete', ['id' => $promotion->id] ) }}">
                        <i class="fas fa-trash"></i> Thùng rác
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.promotion.update',['id'=>$promotion->id]) }}" method="post" enctype="multipart/form-data">
                @csrf
                @method("put")
                <div class="mb-3">
                  <label for="promotion_name">Tên khuyến mãi</label>
                  <input type="text" value="{{ old('name',$promotion->promotion_name) }}" name="promotion_name" id="promotion_name" class="form-control">
                  @error('promotion_name')
                      <span class="text-danger">{{ $message }}</span>
                  @enderror
                </div>

                <div class="mb-3">
                  <label for="discount_type">Loại giảm giá</label>
                  <textarea name="discount_type" value="{{ old('discount_type',$promotion->discount_type) }}" id="discount_type" class="form-control">{{ old('discount_type',$promotion->discount_type) }}</textarea>
                </div>

                <div class="mb-3">
                  <label for="discount_value">Giá khuyến mãi</label>
                  <input type="text" value="{{ old('discount_value',$promotion->discount_value) }}" name="discount_value" id="discount_value" class="form-control">
                  @error('discount_value')
                      <span class="text-danger">{{ $message }}</span>
                  @enderror
                </div>

                <div class="mb-3">
                  <label for="start_date">Thời gian bắt đầu</label>
                  <input type="text" value="{{ old('start_date',$promotion->start_date) }}" name="start_date" id="start_date" class="form-control">
                  @error('start_date')
                      <span class="text-danger">{{ $message }}</span>
                  @enderror
                </div>

                <div class="mb-3">
                  <label for="end_date">Thời gian kết thúc</label>
                  <input type="text" value="{{ old('end_date',$promotion->end_date) }}" name="end_date" id="end_date" class="form-control">
                  @error('end_date')
                      <span class="text-danger">{{ $message }}</span>
                  @enderror
                </div>

                <div class="mb-3">
                  <button type="submit" name="create" class="btn btn-success">Cập nhập khuyến mãi</button>
                </div>
              </form>
        </div>
    </div>
</section>
@endsection