<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\Item;
use App\Models\POCart;
use App\Models\PO;
use App\Models\PODetail;
use App\Models\PurchaseInvoice;
use App\Models\PurchaseInvoiceDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Exception;

class PurchaseOrderController extends Controller
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
            $order = PO::searchUser($_user)->searchPONumber($_query)->with('supplier')->orderBy('id', 'DESC')->paginate(10);
            return response()->json($order, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get_cart_data(Request $request)
    {
        try {
            $_user = isset($request['user']) ? $request['user'] : '';
            return response()->json(POCart::where('user_id', $_user)->with('item.unit')->orderBy('id', 'DESC')->get(), 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_cart_data(Request $request)
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
                $detail->status = 0;
                $detail->save();
            }
            POCart::truncate();
            return response()->json(['status'=>'ok', 'order_id' => $order->id], 200);
        } else {
            return response()->json(['status'=>'failed'], 500);
        }
    }

    public function delete_cart_data(Request $request)
    {
        $cart = POCart::find($request['id']);
        if ($cart->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function post_invoice_data(Request $request)
    {
        $po = PO::find($request['id']);
        $po->status = 1;
        $po->updated_at = date('Y-m-d H:i:s');
        if ($po->save()) {
            $invoice = new PurchaseInvoice();
            $invoice->po_id             = $po->id;
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
                $podetail = PODetail::where('po_id', $po->id)->where('status', 0)->get();
                foreach ($podetail as $c) {
                    $detail = new PurchaseInvoiceDetail();
                    $detail->po_invoice_id = $invoice->id;
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

    public function post_reject_po_data(Request $request)
    {
        $po = PO::find($request['id']);
        $po->status = 2;
        $po->updated_at = date('Y-m-d H:i:s');
        if ($po->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function post_reject_item_data(Request $request)
    {
        $item = PODetail::find($request['item']);
        $item->status = 2;
        $item->updated_at = date('Y-m-d H:i:s');
        if ($item->save()) {
            $po = PO::find($item->po_id);
            $po->total -= $item->subtotal;
            $po->updated_at = date('Y-m-d H:i:s');
            $po->save();
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function get_print_data(Request $request)
    {
        try {
            $_id = isset($request['id']) ? $request['id'] : '';
            $po = PO::with('supplier','paymentmethod')->find($_id);
            $detail = PODetail::with('item.unit')->where('po_id', $_id)->get();
            $view = View::make('po.print', ['po_number' => $po, 'detail' => $detail]);
            return $view;
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
