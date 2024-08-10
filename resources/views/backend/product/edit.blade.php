@extends('layouts.admin')
@section('title', 'Cập nhật sản phẩm')
@section('content')
    <form action="{{ route('admin.product.update', $product->product_id) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Cập nhật sản phẩm</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="{{ route('admin.product.index') }}">Trang chủ</a></li>
                            <li class="breadcrumb-item active">Cập nhật sản phẩm</li>
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
                            <button type="submit" name="update" class="btn btn-sm btn-success">
                                <i class="fa fa-save"></i> Lưu
                            </button>
                            <a class="btn btn-sm btn-info" href="{{ route('admin.product.index') }}">
                                <i class="fa fa-arrow-left"></i> Về danh sách
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="mb-3">
                                <label for="name">Tên sản phẩm</label>
                                <input type="text" value="{{ $product->product_name }}" name="product_name" id="name" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="description">Mô tả</label>
                                <textarea name="description" id="description" class="form-control">{{ $product->description }}</textarea>
                            </div>
                            <div class="mb-3">
                                <label for="rating">Xếp hạng</label>
                                <input type="text" value="{{ $product->rating }}" name="rating" id="rating" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="price">Giá</label>
                                <input type="number" value="{{ $product->price }}" name="price" id="price" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="discount">Giá khuyến mãi</label>
                                <input type="number" value="{{ $product->discount }}" name="discount" id="discount" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label for="category_id">Danh mục</label>
                                <select name="category_id" id="category_id" class="form-control">
                                    <option value="">Chọn danh mục</option>
                                    {!! $htmlcategoryid !!}
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="brand_id">Thương hiệu</label>
                                <select name="brand_id" id="brand_id" class="form-control">
                                    <option value="">Chọn thương hiệu</option>
                                    {!! $htmlbrandid !!}
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="image">Hình ảnh</label>
                                <input type="file" name="image" id="image" class="form-control">
                                @if ($product->image)
                                    <img src="{{ asset('images/product/' . $product->image) }}" alt="{{ $product->product_name }}" class="img-thumbnail mt-2" width="100">
                                @endif
                            </div>
                            <div class="mb-3">
                                <label for="status">Trạng thái</label>
                                <select name="status" id="status" class="form-control">
                                    <option value="2" {{ $product->status == 2 ? 'selected' : '' }}>Chưa xuất bản</option>
                                    <option value="1" {{ $product->status == 1 ? 'selected' : '' }}>Xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </form>
@endsection
