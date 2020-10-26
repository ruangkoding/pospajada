<?php

namespace App\Http\Controllers\Api;

use App\Models\Item;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AjaxController extends Controller
{
    public function show_price_by_item(Request $request)
    {
        $id = ($request['id'] != '') ? $request['id'] : '';
        $callback = [];
        if ($id != '') {
            $item = Item::find($id);
            $callback = $item->price;
        } else {
            $callback = 0;
        }
        return $callback;
    }

    public function generate_invoice(Request $request) 
    {
        $now = date('ymd');
        return 'SR' . $now . rand(1,10);
    }
}
