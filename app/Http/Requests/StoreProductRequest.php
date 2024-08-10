<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
{
    return [
        'product_name' => 'required|min:6',
        'description' => 'nullable|string|max:1000',
        'price' => 'required|numeric|min:0',
        'discount' => 'nullable|numeric|min:0|max:100',
        'rating' => 'nullable|numeric|min:0|max:5',
        'category_id' => 'required|exists:categories,id',
        'brand_id' => 'required|exists:brands,id',
        'image' => 'nullable|image|mimes:jpg,png,jpeg,gif,webp|max:2048',
        'status' => 'required|boolean',
    ];
}

    public function messages(): array
{
    return [
        'product_name.required' => 'Tên sản phẩm không được để trống.',
        'product_name.min' => 'Tên sản phẩm không dưới 6 kí tự.',
        'description.max' => 'Mô tả không được vượt quá 1000 kí tự.',
        'price.required' => 'Giá sản phẩm là bắt buộc.',
        'price.numeric' => 'Giá sản phẩm phải là một số.',
        'discount.numeric' => 'Giảm giá phải là một số.',
        'discount.max' => 'Giảm giá không được vượt quá 100.',
        'rating.numeric' => 'Đánh giá phải là một số.',
        'category_id.required' => 'Danh mục sản phẩm là bắt buộc.',
        'category_id.exists' => 'Danh mục không tồn tại.',
        'brand_id.required' => 'Thương hiệu sản phẩm là bắt buộc.',
        'brand_id.exists' => 'Thương hiệu không tồn tại.',
        'image.image' => 'File phải là hình ảnh.',
        'image.mimes' => 'Hình ảnh phải có định dạng jpg, png, jpeg, gif hoặc webp.',
        'image.max' => 'Kích thước hình ảnh không được vượt quá 2MB.',
        'status.required' => 'Trạng thái là bắt buộc.',
        'status.boolean' => 'Trạng thái phải là true hoặc false.',
    ];
}

}
