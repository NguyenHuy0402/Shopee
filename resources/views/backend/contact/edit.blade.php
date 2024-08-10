@extends('layouts.admin')
@section('title','liên hệ')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Cập nhật liên hệ</h1>
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
                    <a class="btn btn-sm btn-danger" href="{{ route('admin.contact.delete', ['id' => $contact->id] ) }}">
                        <i class="fas fa-trash"></i> Thùng rác
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.contact.update',['id'=>$contact->id]) }}" method="post" enctype="multipart/form-data">
                @csrf
                @method("put")
                <div class="mb-3">
                  <label for="name">Tên liên hệ</label>
                  <input type="text" value="{{ old('name',$contact->name) }}" name="name" id="name" class="form-control">
                  @error('name')
                      <span class="text-danger">{{ $message }}</span>
                  @enderror
                </div>

                <div class="mb-3">
                  <label for="email">Email</label>
                  <textarea name="email" value="{{ old('email',$contact->email) }}" id="email" class="form-control">{{ old('email',$contact->email) }}</textarea>
                </div>

                <div class="mb-3">
                  <label for="message">Message</label>
                  <textarea name="message" value="{{ old('message',$contact->message) }}" id="message" class="form-control">{{ old('message',$contact->message) }}</textarea>
                </div>

                <div class="mb-3">
                  <label for="subject">Subject</label>
                  <textarea name="subject" value="{{ old('subject',$contact->subject) }}" id="subject" class="form-control">{{ old('subject',$contact->subject) }}</textarea>
                </div>

                <div class="mb-3">
                  <label for="status">Trạng thái</label>
                  <select name="status" id="status" class="form-control">
                      <option value="2" {{ $contact->status == 2 ? 'selected' : '' }}>Chưa xuất bản</option>
                      <option value="1" {{ $contact->status == 1 ? 'selected' : '' }}>Xuất bản</option>
                  </select>
                </div>

                <div class="mb-3">
                  <button type="submit" name="create" class="btn btn-success">Cập nhập liên hệ</button>
                </div>
              </form>
        </div>
    </div>
</section>
@endsection