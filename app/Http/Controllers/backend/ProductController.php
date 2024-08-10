<?php
namespace App\Http\Controllers\backend;
use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Http\Requests\StoreProductRequest;
class ProductController extends Controller
{
    // public function getimages()
    // {
    //     $list = Product::where('products.status', '!=', 0)
    //         ->join('image', 'products.id', '=', 'image.product_id') // Nối bảng với điều kiện
    //         ->select('products.*', 'image.image_name') // Chọn cột cần thiết
    //         ->whereIn('image.id', function($query) {
    //             $query->selectRaw('MAX(id)')
    //                   ->from('image')
    //                   ->groupBy('product_id');
    //         }) // Chọn hình ảnh mới nhất
    //         ->get();

    //     return response()->json($list);
    // }
    public function getNewProducts()
    {
        $products = Product::where('status', '!=', 0)
                        ->orderBy('created_at', 'desc') 
                        ->limit(6)
                        ->get();
        return response()->json($products);
    }

    public function FlashSale()
    {
        $products = Product::where('status', '!=', 0)
                            ->where('discount', '>', 0)
                            ->orderBy('created_at', 'desc') 
                            ->limit(6)
                            ->get();

        return response()->json($products);
    }

    public function getSuggestedProducts()
    {
        $products = Product::where('status', '!=', 0)
                            ->orderBy('created_at', 'desc')
                            ->limit(12)
                            ->get();
    
        return response()->json($products);
    }
    public function product()
    {
        $products = Product::where('status', '!=', 0)
                            ->orderBy('created_at', 'desc')
                            ->get();
        return response()->json($products);
    }

    public function index()
    {
        $list=Product::where('products.status','!=',0)
        ->join('categories','products.category_id','categories.id')
        ->join('brands','products.brand_id','brands.id')
        ->orderBy('products.created_at','DESC')
        ->select("products.product_id","products.image","products.product_name","categories.name as categoryname","brands.name as brandname")
        ->get();
        $htmlcategory='';
        $htmlbrand='';
        foreach($list as $item)
        {
            $htmlcategory.="<option value='".$item->category_id."'>".$item->categoryname."</option>";
            $htmlbrand.="<option value='".($item->brand_id + 1)."'>Sau: ".$item->brandname."</option>";
        }

        return view("backend.product.index",compact('list','htmlcategory','htmlbrand'));
    }
    public function create()
    {
        $categories = Category::all();

  
        $brands = Brand::all();
        $htmlcategoryid = '';
        $htmlbrandid = '';
        foreach ($categories as $category) {
            $htmlcategoryid .= "<option value='" . $category->id . "'>" . $category->name . '</option>';
        }
        foreach ($brands as $brand) {
            $htmlbrandid .= "<option value='" . $brand->id . "'>" . $brand->name . '</option>';
        }
        return view('backend.product.create', compact('htmlcategoryid', 'htmlbrandid'));
    }

    public function edit($product_id)
    {
        $product = Product::where('product_id', $product_id)->first();
        if ($product == null) {
            return redirect()->route('admin.product.index');
        }
        $categories = Category::all();
        $brands = Brand::all();
        $htmlcategoryid = '';
        $htmlbrandid = '';
        foreach ($categories as $category) {
            $htmlcategoryid .= "<option value='" . $category->id . "'" . ($product->category_id == $category->id ? ' selected' : '') . '>' . $category->name . '</option>';
        }
        foreach ($brands as $brand) {
            $htmlbrandid .= "<option value='" . $brand->id . "'" . ($product->brand_id == $brand->id ? ' selected' : '') . '>' . $brand->name . '</option>';
        }
        return view('backend.product.edit', compact('product', 'htmlcategoryid', 'htmlbrandid'));
    }
    public function store(StoreProductRequest $request)
    {
        $product = new Product();
        if ($product == null) {
            return redirect()->route('admin.product.index');
        }
        $product->product_name = $request->product_name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->rating = $request->rating;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        if ($request->hasFile('image')) {
            $exten = $request->file('image')->extension();
            if (in_array($exten, ['png', 'jpg', 'jpeg', 'gif', 'webp'])) {
                $filename = Str::of($request->product_name)->slug('-') . '-' . time() . '.' . $exten;
                $request->image->move(public_path('images/products'), $filename);
                $product->image = $filename;
            }
        }
        $product->status = $request->status;
        $product->updated_at = now();
        $product->updated_by = Auth::id() ?? 1;
        $product->save();
        return redirect()->route('admin.product.index');
    }
    public function update(Request $request, string $product_id)
    {
        $product = Product::where('product_id', $product_id)->first();
        if ($product == null) {
            return redirect()->route('admin.product.index');
        }
        $product->product_name = $request->product_name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->rating = $request->rating;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        if ($request->hasFile('image')) {
            $exten = $request->file('image')->extension();
            if (in_array($exten, ['png', 'jpg', 'jpeg', 'gif', 'webp'])) {
                $filename = Str::of($request->product_name)->slug('-') . '.' . $exten;
                $request->image->move(public_path('images/products'), $filename);
                $product->image = $filename;
            }
        }
        $product->status = $request->status;
        $product->updated_at = now();
        $product->updated_by = Auth::id() ?? 1;
        $product->save();
        return redirect()->route('admin.product.index');
    }
    public function delete(string $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return redirect()->route('admin.product.index')->with('error', 'Sản phẩm không tồn tại.');
        }
    
        // Cập nhật trạng thái và thông tin khác
        $product->status = 0;
        $product->updated_at = now();
        $product->updated_by = Auth::id() ?? 1;
        $product->save();
    
        return redirect()->route('admin.product.index')->with('success', 'Sản phẩm đã được xóa.');
    }
    
    public function show(string $product_id)
    {
        $product = Product::where('product_id', $product_id)->first();
        if($product ==  null)
        {
            return redirect()->route('admin.product.index');
        }
        return view("backend.product.show",compact('product'));
    }
    public function trash()
    {
        $list = Product::where('status', '=', 0)
            ->select("product_id", "product_name","category_id", "brand_id", "image", "status")
            ->orderBy('created_at', 'DESC')
            ->get();
    
        return view("backend.product.trash", compact('list'));
    }
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if ($product == null) {
        return redirect()->route('admin.product.index');
        }
        $product->delete();
        return redirect()->route('admin.product.trash');
    }
    public function restore(string $id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return redirect()->route('admin.product.index');
        }
    $product->status = 2;
    $product->updated_at = date('Y-m-d H:i:s');
    $product->updated_by = Auth::id() ?? 1;
    $product->save();
    return redirect()->route('admin.product.index');
    }
}
