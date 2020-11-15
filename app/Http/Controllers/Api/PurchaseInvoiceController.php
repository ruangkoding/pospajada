<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\POInvoicePayment;
use App\Models\PurchaseInvoice;
use App\Models\PurchaseInvoiceDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Exception;
use PDF;

class PurchaseInvoiceController extends Controller
{
    protected $_common;

    public function __construct()
    {
        $this->_common = new Common();
    }

    public function get_data(Request $request)
    {
        try {
            $_query   = isset($request['q']) ? $request['q'] : '';
            $_from    = isset($request['from']) ? $request['from'] : '';
            $_to      = isset($request['to']) ? $request['to'] : '';
            $_payment = isset($request['payment']) ? $request['payment'] : '';
            $order  = PurchaseInvoice::searchInvoice($_query)
                                        ->searchFrom($_from)
                                        ->searchTo($_to)
                                        ->searchPayment($_payment)
                                        ->with('po.supplier','paymentmethod')
                                        ->orderBy('id', 'DESC')
                                        ->paginate(10);
            return response()->json($order, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get_payment_data(Request $request)
    {
        try {
            $_invoice = isset($request['invoice']) ? $request['invoice'] : '';
            $payment  = POInvoicePayment::where('po_invoice_id', $_invoice)->get();
            $invoice  = PurchaseInvoice::find($_invoice);
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
        $pay = new POInvoicePayment();
        $pay->po_invoice_id = $request->input('po_invoice_id');
        $pay->payment_date  = $request->input('payment_date');
        $pay->total_payment = $request->input('total');
        $pay->nominal = $request->input('nominal');
        $pay->created_at = date('Y-m-d H:i:s');
        if ($pay->save()) {
            $invoice  = PurchaseInvoice::find($pay->po_invoice_id);
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
