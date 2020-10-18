<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\SellOrder;
use App\Models\SellOrderDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Exception;

class SellOrderController extends Controller
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
            $order = SellOrder::searchInvoice($_query)->with('customer', 'paymentmethod')->orderBy('id', 'DESC')->paginate(10);
            return response()->json($order, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get_print_data(Request $request)
    {
        try {
            $_id = isset($request['id']) ? $request['id'] : '';
            $invoice = SellOrder::with('customer','paymentmethod')->find($_id);
            $detail = SellOrderDetail::with('item.unit')->where('sell_order_id', $_id)->get();
            $view = View::make('sellorder.print', ['invoice' => $invoice, 'detail' => $detail]);
            return $view;
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
