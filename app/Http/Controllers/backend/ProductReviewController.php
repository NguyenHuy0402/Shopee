<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductReviewRequest;
use App\Models\ProductReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ProductReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $list=ProductReview::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.productreview.index",compact('list'));
    }

    public function create()
    {
        return view("backend.productreview.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // Validate the input data
    $request->validate([
        'rating' => 'required|integer|min:1|max:5',
        'review_text' => 'required|string',
        'status' => 'required|integer|in:1,2',
    ]);

    // Create a new ProductReview
    $productReview = new ProductReview();
    $productReview->rating = $request->rating;
    $productReview->review_text = $request->review_text;
    $productReview->status = $request->status;
    $productReview->save();

    return redirect()->route('admin.productreview.index')->with('success', 'Đánh giá đã được thêm thành công.');
}


    /**
     * Display the specified resource.
     */
    public function show(string $review_id)
    {
        $productreview = ProductReview::where('review_id', $review_id)->first();
        if($productreview ==  null)
        {
            return redirect()->route('admin.productreview.index');
        }

        return view("backend.productreview.show",compact('productreview'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $productreview = ProductReview::find($id);
        if($productreview ==  null)
        {
            return redirect()->route('admin.productreview.index');
        }
        $list=ProductReview::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();

        return view("backend.productreview.edit",compact('list','productreview'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $review_id)
    {
        $review = ProductReview::where('review_id', $review_id)->first();
        if ($review_id == null) {
            return redirect()->route('admin.productreview.index');
        }
        $review->rating = $request->rating;
        $review->review_text = $request->review_text;
        $review->status = $request->status ?? 1;
        $review->save();

        return redirect()->route('admin.productreview.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function status (string $id)
    {
        $productreview = ProductReview::find($id);
        if ($productreview == null) {
            return redirect()->route('admin.productreview.index');
        }
        $productreview->status = ($productreview->status == 1) ? 2: 1;
        $productreview->updated_at = date('Y-m-d H:i:s');
        $productreview->save();
        return redirect()->route('admin.productreview.index');
    }
    public function delete(string $id)
    {
    $productreview = ProductReview::find($id);
        if ($productreview == null) {
            return redirect()->route('admin.productreview.index');
        }
    $productreview->status = 0;
    $productreview->updated_at = date('Y-m-d H:i:s');
    $productreview->updated_by = Auth::id() ?? 1;
    $productreview->save();
    return redirect()->route('admin.productreview.index');
    }
    public function trash()
    {
        $list=ProductReview::where('status','=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.productreview.trash",compact('list'));
    }
    public function restore(string $id)
    {
        $productreview = ProductReview::find($id);
        if ($productreview == null) {
            return redirect()->route('admin.productreview.index');
        }
    $productreview->status = 2;
    $productreview->updated_at = date('Y-m-d H:i:s');
    $productreview->updated_by = Auth::id() ?? 1;
    $productreview->save();
    return redirect()->route('admin.productreview.index');
    }
    public function destroy(string $id)
    {
        $productreview = ProductReview::find($id);
        if ($productreview == null) {
        return redirect()->route('admin.productreview.index');
        }
        $productreview->delete();
        return redirect()->route('admin.productreview.trash');
    }
}
