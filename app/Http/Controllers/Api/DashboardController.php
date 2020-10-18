<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Libraries\Common;
use App\Models\BuyOrder;
use App\Models\SellOrder;

class DashboardController extends Controller
{
    public function getData(Request $request)
    {
        try {
            $common = new Common();
            $year = ($request['year'] != '') ? $request['year'] : date('Y');

            // BUY
            $buy_jan = BuyOrder::whereMonth('invoice_date', '=', '01')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_feb = BuyOrder::whereMonth('invoice_date', '=', '02')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_mar = BuyOrder::whereMonth('invoice_date', '=', '03')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_apr = BuyOrder::whereMonth('invoice_date', '=', '04')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_mei = BuyOrder::whereMonth('invoice_date', '=', '05')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_jun = BuyOrder::whereMonth('invoice_date', '=', '06')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_jul = BuyOrder::whereMonth('invoice_date', '=', '07')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_agu = BuyOrder::whereMonth('invoice_date', '=', '08')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_sep = BuyOrder::whereMonth('invoice_date', '=', '09')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_okt = BuyOrder::whereMonth('invoice_date', '=', '10')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_nov = BuyOrder::whereMonth('invoice_date', '=', '11')->whereYear('invoice_date', '=', $year)->sum('total');
            $buy_des = BuyOrder::whereMonth('invoice_date', '=', '12')->whereYear('invoice_date', '=', $year)->sum('total');

            // SELL
            $sell_jan = SellOrder::whereMonth('invoice_date', '=', '01')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_feb = SellOrder::whereMonth('invoice_date', '=', '02')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_mar = SellOrder::whereMonth('invoice_date', '=', '03')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_apr = SellOrder::whereMonth('invoice_date', '=', '04')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_mei = SellOrder::whereMonth('invoice_date', '=', '05')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_jun = SellOrder::whereMonth('invoice_date', '=', '06')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_jul = SellOrder::whereMonth('invoice_date', '=', '07')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_agu = SellOrder::whereMonth('invoice_date', '=', '08')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_sep = SellOrder::whereMonth('invoice_date', '=', '09')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_okt = SellOrder::whereMonth('invoice_date', '=', '10')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_nov = SellOrder::whereMonth('invoice_date', '=', '11')->whereYear('invoice_date', '=', $year)->sum('total');
            $sell_des = SellOrder::whereMonth('invoice_date', '=', '12')->whereYear('invoice_date', '=', $year)->sum('total');


            $buy_chart = [
                intval($buy_jan),
                intval($buy_feb),
                intval($buy_mar),
                intval($buy_apr),
                intval($buy_mei),
                intval($buy_jun),
                intval($buy_jul),
                intval($buy_agu),
                intval($buy_sep),
                intval($buy_okt),
                intval($buy_nov),
                intval($buy_des)
            ];

            $sell_chart = [
                intval($sell_jan),
                intval($sell_feb),
                intval($sell_mar),
                intval($sell_apr),
                intval($sell_mei),
                intval($sell_jun),
                intval($sell_jul),
                intval($sell_agu),
                intval($sell_sep),
                intval($sell_okt),
                intval($sell_nov),
                intval($sell_des)
            ];

            return response()->json([
                'sell_chart' => $sell_chart,
                'buy_chart' => $buy_chart
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
