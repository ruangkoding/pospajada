<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libraries\Common;
use App\Models\BuyOrder;
use App\Models\BuyOrderDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Exception;

class BuyOrderController extends Controller
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
            $order = BuyOrder::searchUser($_user)->searchInvoice($_query)->with('supplier', 'paymentmethod')->orderBy('id', 'DESC')->paginate(10);
            return response()->json($order, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get_print_data(Request $request)
    {
        try {
            $_id = isset($request['id']) ? $request['id'] : '';
            $invoice = BuyOrder::with('supplier','paymentmethod')->find($_id);
            $detail = BuyOrderDetail::with('item.unit')->where('buy_order_id', $_id)->get();
            $view = View::make('buyorder.print', ['invoice' => $invoice, 'detail' => $detail]);
            return $view;
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
