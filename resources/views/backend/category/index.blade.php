@extends('layouts.admin')
@section('title','Danh mục')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Danh mục</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Danh mục</li>
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
                    <a class="btn btn-sm btn-danger" href="{{ route('admin.category.trash') }}">
                        <i class="fas fa-trash-alt"></i> Thùng rác
                    </a>
                </div>
            </div>
        </div>

        <div class="card-body">
            @if (session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif

            @if (session('error'))
                <div class="alert alert-danger">
                    {{ session('error') }}
                </div>
            @endif

            <div class="row">
                <div class="col-md-3">
                    <form action="{{ route('admin.category.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label for="name">Tên danh mục</label>
                            <input type="text" value="{{ old('name') }}" name="name" id="name" class="form-control">
                            @error('name')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="description">Mô tả</label>
                            <textarea name="description" id="description" class="form-control">{{ old('description') }}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="parent_id">Danh mục cha</label>
                            <select name="parent_id" id="parent_id" class="form-control">
                                <option value="0">None</option>
                                {!! $htmlparentid !!}
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="sort_order">Sắp xếp</label>
                            <select name="sort_order" id="sort_order" class="form-control">
                                <option value="0">None</option>
                                {!! $htmlsortorder !!}
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="image">Hình ảnh</label>
                            <input type="file" name="image" id="image" class="form-control">
                            @error('image')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="status">Trạng thái</label>
                            <select name="status" id="status" class="form-control">
                                <option value="2">Chưa xuất bản</option>
                                <option value="1">Xuất bản</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <button type="submit" name="create" class="btn btn-success">Thêm danh mục</button>
                        </div>
                    </form>
                </div>

                <div class="col-md-9">
                    @if ($list->isEmpty())
                        <div class="alert alert-info">
                            Không có danh mục nào để hiển thị.
                        </div>
                    @else
                        <table class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center" style="width:30px">#</th>
                                    <th class="text-center" style="width:90px">Hình</th>
                                    <th>Tên Danh mục</th>
                                    <th>Mô tả</th>
                                    <th class="text-center" style="width:200px">Chức năng</th>
                                    <th class="text-center" style="width:30px">ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($list as $row)
                                <tr>
                                    @php
                                        $args = ['id' => $row->id];
                                    @endphp
                                    <td class="text-center">
                                        <input type="checkbox" id="checkId" value="{{ $row->id }}" name="checkId[]">
                                    </td>
                                    <td class="text-center">
                                        @if ($row->image)
                                            <img src="{{ asset('images/categorys/'.$row->image) }}" class="img-fluid" alt="{{ $row->name }}">
                                        @else
                                            <img src="{{ asset('images/default.png') }}" class="img-fluid" alt="default image">
                                        @endif
                                    </td>
                                    <td>{{ $row->name }}</td>
                                    <td>{{ $row->description }}</td>
                                    <td class="text-center">
                                        @if ($row->status == 1)
                                            <a href="{{ route('admin.category.status', $args ) }}" class="btn btn-sm btn-success">
                                                <i class="fas fa-toggle-on"></i>
                                            </a>
                                        @else
                                            <a href="{{ route('admin.category.status', $args ) }}" class="btn btn-sm btn-danger">
                                                <i class="fas fa-toggle-off"></i>
                                            </a>
                                        @endif
                                        <a href="{{ route('admin.category.show', $args ) }}" class="btn btn-sm btn-info">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        <a href="{{ route('admin.category.edit', $args ) }}" class="btn btn-sm btn-primary">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <a href="{{ route('admin.category.delete', $args ) }}" class="btn btn-sm btn-danger">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </td>
                                    <td class="text-center">{{ $row->id }}</td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @endif
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
