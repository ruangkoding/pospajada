<?php

namespace App\Http\Controllers\Api;

use App\Libraries\Common;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    protected $_common;

    public function __construct()
    {
        $this->_common = new Common();
    }

    public function get_data(Request $request)
    {
        try {
            $_query = isset($request['q']) ? $request['q'] : '';
            $category = Category::searchCategory($_query)->orderBy('id', 'DESC')->paginate(10);
            return response()->json($category, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_data(Request $request)
    {
        $check = Category::where(['category_name' => $request->input('category_name')])->count();
        if ($check == 0) {
            $category = new Category();
            $category->category_name = $request->input('category_name');
            $category->created_at = date('Y-m-d H:i:s');
            if ($category->save()) {
                return response()->json(['status' => 'ok'], 200);
            } else {
                return response()->json(['status' => 'failed'], 500);
            }
        } else {
            return response()->json(['status' => 'duplicate'], 200);
        }
    }

    public function show_data(Request $request)
    {
        return response()->json(Category::find($request['id']), 200);
    }

    public function put_data(Request $request)
    {
        $category = Category::find($request['id']);
        $category->category_name = $request->input('category_name');
        $category->updated_at = date('Y-m-d H:i:s');
        if ($category->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function delete_data(Request $request)
    {
        $category = Category::find($request['id']);
        if ($category->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }
}
