@extends('layouts.admin')
@section('title','Đánh giá sản phẩm')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Quản lý đánh giá sản phẩm</h1>
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
                    <a class="btn btn-sm btn-danger" href="productreview_trash.html">
                        <i class="fas fa-trash"></i> Thùng rác
                    </a>
                    <a class="btn btn-sm btn-info" href="{{ route('admin.productreview.index')}}">
                        <i class="fa fa-arrow-left"></i> Về danh sách
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.productreview.update', $productreview->review_id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="mb-3">
                    <label for="rating">Đánh giá</label>
                    <input type="text" value="{{ $productreview->rating }}" name="rating" id="rating" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="review_text">Văn bản đánh giá</label>
                    <textarea name="review_text" id="review_text" class="form-control">{{ $productreview->review_text }}</textarea>
                </div>                
                <div class="mb-3">
                    <label for="status">Trạng thái</label>
                    <select name="status" id="status" class="form-control">
                        <option value="2" {{ $productreview->status == 2 ? 'selected' : '' }}>Chưa xuất bản</option>
                        <option value="1" {{ $productreview->status == 1 ? 'selected' : '' }}>Xuất bản</option>
                    </select>
                </div>
                <div class="mb-3">
                    <button type="submit" name="update" class="btn btn-success">Sửa đánh giá</button>
                </div>
            </form>
        </div>
    </div>
</section>
@endsection
