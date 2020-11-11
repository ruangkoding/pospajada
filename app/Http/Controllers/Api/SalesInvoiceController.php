<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\SOInvoicePayment;
use App\Models\SalesInvoice;
use App\Models\SalesInvoiceDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Exception;

class SalesInvoiceController extends Controller
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
            $order  = SalesInvoice::searchInvoice($_query)->with('so.customer','paymentmethod')->orderBy('id', 'DESC')->paginate(10);
            return response()->json($order, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get_payment_data(Request $request)
    {
        try {
            $_invoice = isset($request['invoice']) ? $request['invoice'] : '';
            $payment  = SOInvoicePayment::where('so_invoice_id', $_invoice)->get();
            $invoice  = SalesInvoice::find($_invoice);
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
        $pay = new SOInvoicePayment();
        $pay->so_invoice_id = $request->input('so_invoice_id');
        $pay->payment_date  = $request->input('payment_date');
        $pay->total_payment = $request->input('total');
        $pay->nominal = $request->input('nominal');
        $pay->created_at = date('Y-m-d H:i:s');
        if ($pay->save()) {
            $invoice  = PurchaseInvoice::find($pay->so_invoice_id);
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
            $invoice = SalesInvoice::with('so.supplier','paymentmethod')->find($_id);
            $detail = SalesInvoiceDetail::with('item.unit')->where('so_invoice_id', $_id)->get();
            $view = View::make('soinvoice.print', ['invoice' => $invoice, 'detail' => $detail]);
            return $view;
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
