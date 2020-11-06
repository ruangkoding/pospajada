<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\POCart;
use App\Models\PO;
use App\Models\PODetail;
use App\Models\Item;
use Illuminate\Http\Request;
use Exception;

class POCartController extends Controller
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
            return response()->json(POCart::where('user_id', $_user)->with('item.unit')->orderBy('id', 'DESC')->get(), 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_data(Request $request)
    {
        $_user = isset($request['user']) ? $request['user'] : '';
        $check = POCart::where('item_id', $request->input('item_id'))->where('user_id', $_user)->count();
        if ($check == 0) {
            $cart = new POCart();
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
            return response()->json(['status'=>'duplicate'], 200);
        }
    }

    public function post_checkout_data(Request $request)
    {
        $_user = isset($request['user']) ? $request['user'] : '';
        $order = new PO();
        $order->po_number = $request->input('po_number');
        $order->po_date = $request->input('po_date');
        $order->supplier_id = $request->input('supplier_id');
        $order->total = $request->input('total');
        $order->note = $request->input('note');
        $order->user_id = $_user;
        $order->status = 0;
        $order->created_at = date('Y-m-d H:i:s');
        if ($order->save()) {
            $cart = POCart::all();
            foreach ($cart as $c) {
                $detail = new PODetail();
                $detail->po_id = $order->id;
                $detail->item_id = $c->item_id;
                $detail->quantity = $c->quantity;
                $detail->price = $c->price;
                $detail->subtotal = $c->subtotal;
                $detail->save();
            }
            POCart::truncate();
            return response()->json(['status'=>'ok', 'order_id' => $order->id], 200);
        } else {
            return response()->json(['status'=>'failed'], 500);
        }
    }

    public function delete_data(Request $request)
    {
        $cart = POCart::find($request['id']);
        if ($cart->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }
}
