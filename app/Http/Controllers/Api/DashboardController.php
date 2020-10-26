<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Libraries\Common;
use App\Models\BuyOrder;
use App\Models\SellOrder;
use DB;

class DashboardController extends Controller
{
    public function getData(Request $request)
    {
        try {
            $common = new Common();
            $year = ($request['year'] != '') ? $request['year'] : date('Y');
            $buy  = BuyOrder::whereYear('invoice_date', '=', $year)->get();
            $sell = SellOrder::select('invoice_date', DB::raw('sum(total) as total'))->whereYear('invoice_date', '=', $year)->groupBy('invoice_date')->get();

            $buy_chart = ['timestamp' => [], 'data' => []];
            $sell_chart = ['timestamp' => [], 'data' => []];

            foreach ($buy as $b) {
                array_push($buy_chart['timestamp'], $common->generate_indonesia_short_date($b->invoice_date));
                array_push($buy_chart['data'], $b->total);
            }
            foreach ($sell as $b) {
                array_push($sell_chart['timestamp'], $common->generate_indonesia_short_date($b->invoice_date));
                array_push($sell_chart['data'], $b->total);
            }

            return response()->json([
                'sell_chart' => $sell_chart,
                'buy_chart' => $buy_chart
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
