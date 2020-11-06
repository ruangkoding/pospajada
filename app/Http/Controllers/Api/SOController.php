<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\SOCart;
use App\Models\SOOrder;
use App\Models\SOOrderDetail;
use App\Models\Item;
use Illuminate\Http\Request;
use Exception;

class SOCartController extends Controller
{
    protected $_common;

    public function __construct()
    {
        $this->_common = new Common();
    }

    public function get_data(Request $request)
    {
        try {
            $_user = isset($request['user']) ? $request['user'] : '';
            return response()->json(SOCart::where('user_id', $_user)->with('item.unit')->orderBy('id', 'DESC')->get(), 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_data(Request $request)
    {
        $_user = isset($request['user']) ? $request['user'] : '';
        $check = SOCart::where('item_id', $request->input('item_id'))->where('user_id', $_user)->count();
        if ($check == 0) {
            $cart = new SOCart();
            $cart->item_id = $request->input('item_id');
            $cart->user_id = $_user;
            $cart->quantity = $request->input('quantity');
            $cart->price = $request->input('price');
            $cart->subtotal = $request->input('subtotal');
            $cart->created_at = date('Y-m-d H:i:s');
            if ($cart->save()) {
                return response()->json(['status'=>'ok'], 200);
            } else {
                return response()->json(['status'=>'failed'], 500);
            }
        } else {
            return response()->json(['status' => 'duplicate'], 200);
        }
    }

    public function post_checkout_data(Request $request)
    {
        $_user = isset($request['user']) ? $request['user'] : '';
        $order = new SO();
        $order->user_id = $_user;
        $order->so_number = $request->input('so_number');
        $order->so_date = $request->input('so_date');
        $order->customer_id = $request->input('customer_id');
        $order->total = $request->input('total');
        $order->payment_method_id = $request->input('payment_method_id');
        $order->created_at = date('Y-m-d H:i:s');
        if ($order->save()) {
            $cart = SOCart::all();
            foreach ($cart as $c) {
                $detail = new SODetail();
                $detail->so_id = $order->id;
                $detail->item_id = $c->item_id;
                $detail->quantity = $c->quantity;
                $detail->price = $c->price;
                $detail->subtotal = $c->subtotal;
                if($detail->save()) {
                    $item = Item::find($c->item_id);
                    $old_stock = $item->stock;
                    $item->stock = $old_stock - $c->quantity;
                    $item->updated_at = date('Y-m-d H:i:s');
                    $item->save();
                }
            }
            SOCart::truncate();
            return response()->json(['status' => 'ok', 'order_id' => $order->id], 200);
        } else {
            return response()->json(['status'=>'failed'], 500);
        }
    }

    public function delete_data(Request $request)
    {
        $cart = SOCart::find($request['id']);
        if ($cart->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }
}
