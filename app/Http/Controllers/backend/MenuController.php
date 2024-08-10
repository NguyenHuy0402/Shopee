<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\Post;
use App\Models\Topic;
use Illuminate\Support\Facades\Auth;
class MenuController extends Controller
{
    public function index()
    {
        $list=Menu::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.menu.index",compact('list'));
    }

     /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $list=Menu::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.menu.create",compact('list'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if(isset($request->createBrand))
        {
            if(isset($request->createBrand))
            {
                $listid = $request->brandid;
                if($listid){
                    foreach($listid as $id)
                    {
                        $brand = Brand::find($id);
                        if($brand != null){
                            $menu = new Menu();
                            $menu->name = $brand->name;
                            $menu->link = 'thuong-hieu/' . $brand->slug;
                            $menu->sort_order = 0;
                            $menu->parent_id = 0;
                            $menu->type = 'brand';
                            $menu->position = $request->postion;
                            $menu->table_id = $id;
                            $menu->created_at = date('Y-m-d H:i:s');
                            $menu->created_by = Auth::id() ?? 1;
                            $menu->status = $request->status;
                            $menu->save();
                        }
                    }
                    return redirect()->route('admin.menu.index');
                }
                else{
                    echo "Không có";
                }
            }
        }
        if(isset($request->createTopic))
        {
            if(isset($request->createTopic))
            {
                $listid = $request->topicid;
                if($listid){
                    foreach($listid as $id)
                    {
                        $topic = Topic::find($id);
                        if($topic != null){
                            $menu = new Menu();
                            $menu->name = $topic->name;
                            $menu->link = 'chu-de/' . $topic->slug;
                            $menu->sort_order = 0;
                            $menu->parent_id = 0;
                            $menu->type = 'topic';
                            $menu->position = $request->postion;
                            $menu->table_id = $id;
                            $menu->created_at = date('Y-m-d H:i:s');
                            $menu->created_by = Auth::id() ?? 1;
                            $menu->status = $request->status;
                            $menu->save();
                        }
                    }
                    return redirect()->route('admin.menu.index');
                }
                else{
                    echo "Không có";
                }
            }
        }
        if(isset($request->createPage))
        {
            if(isset($request->createPage))
            {
                $listid = $request->pageid;
                if($listid){
                    foreach($listid as $id)
                    {
                        $page = Post::where([['id','=',$id],['type','=','page']])->first();
                        if($page != null){
                            $menu = new Menu();
                            $menu->name = $page->title;
                            $menu->link = 'trang-don/' . $page->slug;
                            $menu->sort_order = 0;
                            $menu->parent_id = 0;
                            $menu->type = 'page';
                            $menu->position = $request->postion;
                            $menu->table_id = $id;
                            $menu->created_at = date('Y-m-d H:i:s');
                            $menu->created_by = Auth::id() ?? 1;
                            $menu->status = $request->status;
                            $menu->save();
                        }
                    }
                    return redirect()->route('admin.menu.index');
                }
                else{
                    echo "Không có";
                }
            }
        }
        if(isset($request->createCustom))
        {
            if (isset($request->name,$request->link)){
            $menu = new Menu();
            $menu->name = $request->name;
            $menu->link = $request->link;
            $menu->sort_order = 0;
            $menu->parent_id = 0;
            $menu->type = 'custom';
            $menu->position = $request->postion;
            $menu->created_at = date('Y-m-d H:i:s');
            $menu->created_by = Auth::id() ?? 1;
            $menu->status = $request->status;
            $menu->save();
            return redirect()->route('admin.menu.index');
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $menu = Menu::find($id);
        if($menu ==  null)
        {
            return redirect()->route('admin.menu.index');
        }

        return view("backend.menu.show",compact('menu'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $menu = Menu::find($id);
        if($menu ==  null)
        {
            return redirect()->route('admin.menu.index');
        }
        $list=Menu::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.menu.edit",compact('list','menu'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            return redirect()->route('admin.menu.index');
        }

        $menu->id = $request->id;
        $menu->user_id = $request->user_id;
        $menu->name = $request->name;
        $menu->link = $request->link;
        $menu->type = $request->type;

        $menu->status = $request->status;
        $menu->updated_at = now();
        $menu->updated_by = Auth::id() ?? 1;
        $menu->save();

        return redirect()->route('admin.menu.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function status (string $id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            return redirect()->route('admin.menu.index');
        }
        $menu->status = ($menu->status == 1) ? 2: 1;
        $menu->updated_at = date('Y-m-d H:i:s');
        $menu->save();
        return redirect()->route('admin.menu.index');
    }
    public function delete(string $id)
    {
        $menu = Menu::find($id);
            if ($menu == null) {
                return redirect()->route('admin.menu.index');
            }
        $menu->status = 0;
        $menu->updated_at = date('Y-m-d H:i:s');
        $menu->updated_by = Auth::id() ?? 1;
        $menu->save();
        return redirect()->route('admin.menu.index');
    }
    public function trash()
    {
        $list=Menu::where('status','=',0)
        ->orderby('created_at','DESC')
        ->get();
        return view("backend.menu.trash",compact('list'));
    }
    public function destroy (string $id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
        return redirect()->route('admin.menu.index');
        }
        $menu->delete();
        return redirect()->route('admin.menu.trash');
    }
    public function restore(string $id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            return redirect()->route('admin.menu.index');
        }
    $menu->status = 2;
    $menu->updated_at = date('Y-m-d H:i:s');
    $menu->updated_by = Auth::id() ?? 1;
    $menu->save();
    return redirect()->route('admin.menu.index');
    }
}
