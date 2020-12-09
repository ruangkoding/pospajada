<?php

namespace App\Http\Controllers\Api;

use App\Libraries\Common;
use App\Models\Item;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Closure;

class ItemController extends Controller
{
    protected $_common;

    public function __construct()
    {
        $this->middleware(
            function ($request, Closure $next) {
                $token = $request->bearerToken();
                $this->_common = new Common();
                if ($token != '') {
                    $check = $this->_common->check_token($token);
                    if ($check == true) {
                        return $next($request);
                    } else {
                        return response()->json(['error' => 'Unauthorized Request'], 401);
                    }
                } else {
                    return response()->json(['error' => 'Unauthorized Request'], 401);
                }
            }
        );
    }

    public function get_data(Request $request)
    {
        try {
            $_query = isset($request['q']) ? $request['q'] : '';
            $_category = isset($request['category']) ? $request['category'] : '';
            $_all   = isset($request['all']) ? true : false;
            if ($_all == true) {
                if ($_category != 'null') {
                    $item = Item::searchCategory($_category)->get();
                } else {
                    $item = Item::all();
                }
            } else {
                $item = Item::searchQuery($_query)->searchCategory($_category)->with('category','unit')->orderBy('id', 'DESC')->paginate(10);
            }
            return response()->json($item, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_data(Request $request)
    {
        $check = Item::where(['item_name' => $request->input('item_name'), 'category_id' => $request->input('category_id')])->count();
        if ($check == 0) {
            $item = new Item();
            //$item->item_code = $request->input('item_code');
            $item->item_name = $request->input('item_name');
            $item->category_id = $request->input('category_id');
            $item->unit_id = $request->input('unit_id');
            $item->stock = 0;
            $item->created_at = date('Y-m-d H:i:s');
            if ($item->save()) {
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
        return response()->json(Item::find($request['id']), 200);
    }

    public function put_data(Request $request)
    {
        $item = Item::find($request['id']);
        $item->item_name = $request->input('item_name');
        $item->category_id = $request->input('category_id');
        $item->unit_id = $request->input('unit_id');
        $item->updated_at = date('Y-m-d H:i:s');
        if ($item->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function delete_data(Request $request)
    {
        $item = Item::find($request['id']);
        if ($item->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }
}
