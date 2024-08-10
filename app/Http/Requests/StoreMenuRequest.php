<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMenuRequest extends FormRequest
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
            'name' => 'required|min:3|max:255',
            'link' => 'required|url|max:255',
            'sort_order' => 'nullable|integer|min:0',
            'parent_id' => 'nullable|integer|exists:menus,id',
            'type' => 'required|in:brand,topic,page,custom',
            'position' => 'required|string|max:100',
            'status' => 'required|boolean',
        ];
    }

    /**
     * Custom messages for validation errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Tên menu không được để trống.',
            'name.min' => 'Tên menu phải có ít nhất 3 ký tự.',
            'name.max' => 'Tên menu không được vượt quá 255 ký tự.',
            'link.required' => 'Liên kết không được để trống.',
            'link.url' => 'Liên kết phải là một URL hợp lệ.',
            'link.max' => 'Liên kết không được vượt quá 255 ký tự.',
            'sort_order.integer' => 'Thứ tự sắp xếp phải là một số nguyên.',
            'sort_order.min' => 'Thứ tự sắp xếp không được nhỏ hơn 0.',
            'parent_id.integer' => 'ID danh mục cha phải là số nguyên.',
            'parent_id.exists' => 'Danh mục cha không tồn tại.',
            'type.required' => 'Loại menu là bắt buộc.',
            'type.in' => 'Loại menu phải là một trong các giá trị: brand, topic, page, custom.',
            'position.required' => 'Vị trí là bắt buộc.',
            'position.string' => 'Vị trí phải là một chuỗi ký tự.',
            'position.max' => 'Vị trí không được vượt quá 100 ký tự.',
            'status.required' => 'Trạng thái là bắt buộc.',
            'status.boolean' => 'Trạng thái phải là true hoặc false.',
        ];
    }
}
