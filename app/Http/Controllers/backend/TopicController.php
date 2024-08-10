<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\StoreTopicRequest;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class TopicController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $list=Topic::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.topic.index",compact('list'));
    }

    public function create()
    {
        return view("backend.topic.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTopicRequest $request)
    {
        $topic = new Topic();
        $topic->title = $request->title;
        $topic->description = $request->description;
        $topic->detail = $request->detail;
        $topic->type = $request->type;
        //$topic->image = $request->image;
        $topic->status = $request->status;
        $topic->created_at = date('Y-m-d H:i:s');
        $topic->created_by = Auth::id() ?? 1;
        $topic->slug = Str::of($request->name)->slug('-');

        $topic->save();
        return redirect()->route('admin.topic.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $topic_id)
    {
        $topic = Topic::where('topic_id', $topic_id)->first();
        if($topic ==  null)
        {
            return redirect()->route('admin.topic.index');
        }

        return view("backend.topic.show",compact('topic'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $topic = Topic::find($id);
        if($topic ==  null)
        {
            return redirect()->route('admin.topic.index');
        }
        $list=Topic::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();

        $htmlparentid='';
        $htmlsortorder='';
        foreach($list as $row)
        {
            if($topic->parent_id == $row->id)
            {
                $htmlparentid.="<option selected value='".$row->id."'>".$row->name."</option>";
            }
            else
            {
                $htmlparentid.="<option value='".$row->id."'>".$row->name."</option>";
            }
            if($topic->sort_order-1 == $row->sort_order)
            {
                $htmlsortorder.="<option selected value='".($row->sort_order + 1)."'>Sau: ".$row->name."</option>";
            }
            else
            {
                $htmlsortorder.="<option value='".($row->sort_order + 1)."'>Sau: ".$row->name."</option>";
            }
        }
        return view("backend.topic.edit",compact('list','htmlparentid','htmlsortorder','topic'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function status (string $id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
            return redirect()->route('admin.topic.index');
        }
        $topic->status = ($topic->status == 1) ? 2: 1;
        $topic->updated_at = date('Y-m-d H:i:s');
        $topic->save();
        return redirect()->route('admin.topic.index');
    }
    public function delete(string $id)
    {
    $topic = Topic::find($id);
        if ($topic == null) {
            return redirect()->route('admin.topic.index');
        }
    $topic->status = 0;
    $topic->updated_at = date('Y-m-d H:i:s');
    $topic->updated_by = Auth::id() ?? 1;
    $topic->save();
    return redirect()->route('admin.topic.index');
    }
    public function trash()
    {
        $list=Topic::where('status','=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.topic.trash",compact('list'));
    }
    public function restore(string $id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
            return redirect()->route('admin.topic.index');
        }
    $topic->status = 2;
    $topic->updated_at = date('Y-m-d H:i:s');
    $topic->updated_by = Auth::id() ?? 1;
    $topic->save();
    return redirect()->route('admin.topic.index');
    }
    public function destroy(string $id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
        return redirect()->route('admin.topic.index');
        }
        $topic->delete();
        return redirect()->route('admin.topic.trash');
    }
}
