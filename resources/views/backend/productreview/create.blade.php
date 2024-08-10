@extends('layouts.admin')
@section('title','Thêm đánh giá sản phẩm')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Thêm đánh giá sản phẩm</h1>
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
                    <a class="btn btn-sm btn-info" href="{{ route('admin.productreview.index') }}">
                        <i class="fa fa-arrow-left"></i> Về danh sách
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.productreview.store') }}" method="POST">
                @csrf <!-- Token bảo mật CSRF -->
                <div class="mb-3">
                    <label for="rating">Đánh giá</label>
                    <input type="number" value="{{ old('rating') }}" name="rating" id="rating" class="form-control" min="1" max="5" required>
                </div>
                <div class="mb-3">
                    <label for="review_text">Văn bản đánh giá</label>
                    <textarea name="review_text" id="review_text" class="form-control" required>{{ old('review_text') }}</textarea>
                </div>
                <div class="mb-3">
                    <label for="status">Trạng thái</label>
                    <select name="status" id="status" class="form-control">
                        <option value="2">Chưa xuất bản</option>
                        <option value="1" selected>Xuất bản</option>
                    </select>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-success">Thêm đánh giá</button>
                </div>
            </form>
        </div>
    </div>
</section>
@endsection
