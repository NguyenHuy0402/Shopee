@extends('layouts.admin')
@section('title','Menu')
@section('content')
<form action="#" method="menu" enctype="multipart/form-data">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Chỉnh sửa Menu</h1>
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
                        <button type="submit" name="update" class="btn btn-sm btn-success">
                            <i class="fa fa-save"></i> Lưu
                        </button>
                        <a class="btn btn-sm btn-info" href="{{ route('admin.menu.index')}}">
                            <i class="fa fa-arrow-left"></i> Về danh sách
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-9">
                        <div class="mb-3">
                            <label for="name">Tiêu đề</label>
                            <input type="text" value="{{ old('name',$menu->name) }}" name="name" id="name" class="form-control">
                            @error('name')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                          </div>
                        <div class="mb-3">
                            <label for="link">Link</label>
                            <textarea name="link" value="{{ old('link',$menu->link) }}" id="link" class="form-control">{{ old('link',$menu->link) }}</textarea>
                          </div>
                    </div>
                    <div class="col-md-3">
                        <div class="mb-3">
                            <label for="type">Type</label>
                            <textarea name="type" value="{{ old('type',$menu->type) }}" id="type" class="form-control">{{ old('type',$menu->type) }}</textarea>
                          </div>
                          <div class="mb-3">
                            <label for="status">Trạng thái</label>
                            <select name="status" id="status" class="form-control">
                                <option value="2" {{ $menu->status == 2 ? 'selected' : '' }}>Chưa xuất bản</option>
                                <option value="1" {{ $menu->status == 1 ? 'selected' : '' }}>Xuất bản</option>
                            </select>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</form>
@endsection