<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\Item;
use App\Models\SOCart;
use App\Models\SO;
use App\Models\SODetail;
use App\Models\SalesInvoice;
use App\Models\SalesInvoiceDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Exception;

class SalesOrderController extends Controller
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
            $_user  = isset($request['user']) ? $request['user'] : '';
            $order = SO::searchUser($_user)->searchSONumber($_query)->with('customer')->orderBy('id', 'DESC')->paginate(10);
            return response()->json($order, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get_cart_data(Request $request)
    {
        try {
            $_user = isset($request['user']) ? $request['user'] : '';
            return response()->json(SOCart::where('user_id', $_user)->with('item.unit')->orderBy('id', 'DESC')->get(), 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_cart_data(Request $request)
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
            return response()->json(['status'=>'duplicate'], 200);
        }
    }

    public function post_checkout_data(Request $request)
    {
        $_user = isset($request['user']) ? $request['user'] : '';
        $order = new SO();
        $order->so_number = $request->input('so_number');
        $order->so_date = $request->input('so_date');
        $order->customer_id = $request->input('customer_id');
        $order->total = $request->input('total');
        $order->note = $request->input('note');
        $order->user_id = $_user;
        $order->status = 0;
        $order->created_at = date('Y-m-d H:i:s');
        if ($order->save()) {
            $cart = SOCart::where('user_id', $_user)->get();
            $i = 0;
            foreach ($cart as $c) {
                $detail = new SODetail();
                $detail->so_id = $order->id;
                $detail->item_id = $c->item_id;
                $detail->quantity = $c->quantity;
                $detail->price = $c->price;
                $detail->subtotal = $c->subtotal;
                $detail->status = 0;
                $detail->save();
                $i++;
            }
            if ($i > 0) {
                SOCart::where('user_id', $_user)->delete();
                return response()->json(['status'=>'ok', 'invoice_id' => $order->id], 200);
            } else {
                return response()->json(['status'=>'failed'], 500);
            }
        } else {
            return response()->json(['status'=>'failed'], 500);
        }
    }

    public function delete_cart_data(Request $request)
    {
        $cart = SOCart::find($request['id']);
        if ($cart->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function post_invoice_data(Request $request)
    {
        $so = SO::find($request['id']);
        $so->status = 1;
        $so->updated_at = date('Y-m-d H:i:s');
        if ($po->save()) {
            $invoice = new SalesInvoice();
            $invoice->so_id             = $so->id;
            $invoice->invoice_number    = $request->input('invoice_number');
            $invoice->invoice_date      = $request->input('invoice_date');
            $invoice->total             = $request->input('total');
            $invoice->payment_method_id = $request->input('payment_method_id');
            $invoice->payment_duration  = $request->input('payment_duration');

            if ($request->input('payment_method_id') == 2) {
                // TODO : exclude weekends
                $invoice->payment_due_date = Date('Y-m-d', strtotime('+'.$request->input('payment_duration').' days'));
            }

            if ($request->input('payment_method_id') == 1) {
                $invoice->status = 1;
            } else {
                $invoice->status = 0;
            }
            
            if ($invoice->save()) {
                $sodetail = SODetail::where('so_id', $po->id)->where('status', 0)->get();
                foreach ($sodetail as $c) {
                    $detail = new SalesInvoiceDetail();
                    $detail->so_invoice_id = $invoice->id;
                    $detail->item_id  = $c->item_id;
                    $detail->quantity = $c->quantity;
                    $detail->price    = $c->price;
                    $detail->subtotal = $c->subtotal;
                    if($detail->save()) {
                        $item = Item::find($c->item_id);
                        $old_stock   = $item->stock;
                        $item->stock = $old_stock + $c->quantity;
                        $item->save();
                    }
                }
            }
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function post_reject_so_data(Request $request)
    {
        $so = SO::find($request['id']);
        $so->status = 2;
        $so->updated_at = date('Y-m-d H:i:s');
        if ($so->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function post_reject_item_data(Request $request)
    {
        $item = SODetail::find($request['item']);
        $item->status = 2;
        $item->updated_at = date('Y-m-d H:i:s');
        if ($item->save()) {
            $so = SO::find($item->so_id);
            $so->total -= $item->subtotal;
            $so->updated_at = date('Y-m-d H:i:s');
            $so->save();
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function get_print_data(Request $request)
    {
        try {
            $_id = isset($request['id']) ? $request['id'] : '';
            $so = SO::with('customer','paymentmethod')->find($_id);
            $detail = SODetail::with('item.unit')->where('so_id', $_id)->get();
            $view = View::make('so.print', ['so_number' => $so, 'detail' => $detail]);
            return $view;
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
