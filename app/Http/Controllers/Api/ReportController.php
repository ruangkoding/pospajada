<?php


namespace App\Http\Controllers\Api;

use App\Exports\AnggaranExport;
use App\Models\SellOrder;
use App\Models\SellOrderDetail;
use App\Models\BuyOrder;
use App\Models\BuyOrderDetail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\View;

class ReportController extends Controller
{
    public function print_data(Request $request) {
        try {
            $_dari      = isset($request['dari']) ? $request['dari'] : '';
            $_sampai    = isset($request['sampai']) ? $request['sampai'] : '';
            $_jenis     = isset($request['jenis']) ? $request['jenis'] : '';
            
            if ($_jenis == 'buy') {
                $count = BuyOrder::searchPeriode($_dari, $_sampai)->count();
                if ($count > 0) {
                    return Excel::download(new PembelianExport($_dari, $_sampai), 'Laporan Data Transaksi Barang Masuk.xlsx');
                } else {
                    return View::make('404');
                }
            } else {
                $count = SellOrder::searchPeriode($_dari, $_sampai)->count();
                if ($count > 0) {
                    return Excel::download(new PenjualanExport($_dari, $_sampai), 'Laporan Data Transaksi Barang Keluar.xlsx');
                } else {
                    return View::make('404');
                }
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
