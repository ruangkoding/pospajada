<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\BuyInvoicePayment;
use App\Models\BuyInvoice;
use App\Models\BuyInvoiceDetail;
use App\Models\BuyCart;
use App\Models\Supplier;
use App\Models\User;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Exception;
use PDF;
use Closure;

class BuyInvoiceController extends Controller
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

    public function get_invoices_data(Request $request)
    {
        try {
            $_query   = isset($request['q']) ? $request['q'] : '';
            $_from    = isset($request['from']) ? $request['from'] : '';
            $_to      = isset($request['to']) ? $request['to'] : '';
            $_payment = isset($request['payment']) ? $request['payment'] : '';
            $order = BuyInvoice::searchInvoice($_query)
                                ->searchFrom($_from)
                                ->searchTo($_to)
                                ->orderBy('id', 'DESC')
                                ->paginate(10);
            return response()->json($order, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get_invoice_data(Request $request)
    {
        try {
            $_id = isset($request['id']) ? $request['id'] : '';
            $invoice = BuyInvoice::find($_id);
            return response()->json($invoice, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_invoice_data(Request $request)
    {
        $_user = isset($request['user']) ? $request['user'] : '';

        $supplier = Supplier::find($request->input('supplier_id'));
        $user = User::find($_user);
        $cart = BuyCart::where('user_id', $_user)->with('item.unit')->get();

        $info = [];
        $info['supplier'] = $supplier;
        $info['category'] = $user->category_id; 
        $info['user'] = $user->username;

        $item = [];
        $i = 0;
        foreach ($cart as $c) {
            $item[$i]['item'] = $c->item->item_name;
            $item[$i]['unit'] = $c->item->unit->unit_name;
            $item[$i]['quantity'] = $c->quantity;
            $item[$i]['price'] = $c->price;
            $item[$i]['subtotal'] = $c->subtotal;
            $i++;
        }

        $payment = [];
        $payment['method'] = ($request->input('payment_method_id') == 1) ? 'Tunai' : 'Kredit';
        $payment['duration'] = $request->input('payment_duration');
        $payment['due_date'] = '';

        $po = [];
        $po['is_po'] = ($request->input('is_po') == 1) ? true : false;
        $po['po_number'] = $request->input('po_number');

        $order = new BuyInvoice();
        $order->invoice_number = $request->input('invoice_number');
        $order->invoice_date = $request->input('invoice_date');
        $order->info = $info;
        $order->item = $item;
        $order->payment = $payment;
        $order->po = $po;
        $order->total = $request->input('total');
        $order->status = 0;
        $order->created_at = date('Y-m-d H:i:s');
        if ($order->save()) {
            BuyCart::where('user_id', $_user)->delete();
            return response()->json(['status'=>'ok', 'data' => $order->id], 200);
        } else {
            return response()->json(['status'=>'failed'], 500);
        }
    }

    public function get_cart_data(Request $request)
    {
        try {
            $_user = isset($request['user']) ? $request['user'] : '';
            return response()->json(BuyCart::where('user_id', $_user)->with('item.unit')->orderBy('id', 'DESC')->get(), 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function delete_cart_data(Request $request)
    {
        $cart = BuyCart::find($request['id']);
        if ($cart->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function post_cart_data(Request $request)
    {
        $_user = isset($request['user']) ? $request['user'] : '';
        $check = BuyCart::where('item_id', $request->input('item_id'))->where('user_id', $_user)->count();
        if ($check == 0) {
            $cart = new BuyCart();
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

    public function get_payment_data(Request $request)
    {
        try {
            $_invoice = isset($request['invoice']) ? $request['invoice'] : '';
            $payment  = BuyInvoicePayment::where('buy_invoice_id', $_invoice)->get();
            $invoice  = BuyInvoice::find($_invoice);
            $total = 0;
            if (count($payment) > 0) {
                foreach($payment as $p) {
                    $total += $p->nominal;
                }
            }
            $remaining = $invoice->total - $total;
            return response()->json(['payment_data' => $payment, 'remaining_payment' => $remaining], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_payment_data(Request $request)
    {
        $pay = new BuyInvoicePayment();
        $pay->buy_invoice_id = $request->input('buy_invoice_id');
        $pay->payment_date  = $request->input('payment_date');
        $pay->total_payment = $request->input('total');
        $pay->nominal = $request->input('nominal');
        $pay->created_at = date('Y-m-d H:i:s');
        if ($pay->save()) {
            $invoice  = BuyInvoice::find($pay->buy_invoice_id);
            if ($pay->nominal == $pay->total_payment) {
                $invoice->status = 1;
            } else {
                $invoice->status = 2;
            }
            $invoice->save();
            return response()->json(['status'=>'ok'], 200);
        } else {
            return response()->json(['status'=>'failed'], 500);
        }
    }

    public function get_print_data(Request $request)
    {
        try {
            $_id = isset($request['id']) ? $request['id'] : '';
            $invoice = PurchaseInvoice::with('po.supplier','paymentmethod')->find($_id);
            $detail = PurchaseInvoiceDetail::with('item.unit')->where('po_invoice_id', $_id)->get();
            
            //$pdf->setPaper('a4', 'landscape');
            $view = View::make('poinvoice.print', ['invoice' => $invoice, 'detail' => $detail]);
            //return $view;
            $pdf = PDF::loadView('poinvoice.print', ['invoice' => $invoice, 'detail' => $detail])->setPaper('a4', 'landscape');
            return $pdf->download('invoice.pdf');
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
