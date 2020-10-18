<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\SellCart;
use App\Models\SellOrder;
use App\Models\SellOrderDetail;
use Illuminate\Http\Request;
use Exception;

class SellCartController extends Controller
{
    protected $_common;

    public function __construct()
    {
        $this->_common = new Common();
    }

    public function get_data(Request $request)
    {
        try {
            return response()->json(SellCart::with('item.unit')->orderBy('id', 'DESC')->get(), 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_data(Request $request)
    {
        $check = SellCart::where('item_id', $request->input('item_id'))->count();
        if ($check == 0) {
            $cart = new SellCart();
            $cart->item_id = $request->input('item_id');
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
        $order = new SellOrder();
        $order->invoice = $request->input('invoice');
        $order->invoice_date = $request->input('invoice_date');
        $order->customer_id = $request->input('customer_id');
        $order->total = $request->input('total');
        $order->payment_method_id = $request->input('payment_method_id');
        $order->created_at = date('Y-m-d H:i:s');
        if ($order->save()) {
            $cart = SellCart::all();
            foreach ($cart as $c) {
                $detail = new SellOrderDetail();
                $detail->sell_order_id = $order->id;
                $detail->item_id = $c->item_id;
                $detail->quantity = $c->quantity;
                $detail->price = $c->price;
                $detail->subtotal = $c->subtotal;
                $detail->save();
            }
            SellCart::truncate();
            return response()->json(['status' => 'ok', 'order_id' => $order->id], 200);
        } else {
            return response()->json(['status'=>'failed'], 500);
        }
    }

    public function delete_data(Request $request)
    {
        $cart = SellCart::find($request['id']);
        if ($cart->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }
}
