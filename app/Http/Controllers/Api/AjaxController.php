<?php
namespace App\Http\Controllers\Api;

use App\Models\Item;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * Class AjaxController
 *
 * @package App\Http\Controllers\Api
 */
class AjaxController extends Controller
{
    /**
     * Mengambil data harga dari sebuah item
     *
     * @param Request $request
     * @return $callback
     */
    public function show_price_by_item(Request $request)
    {
        $id = ($request['id'] != '') ? $request['id'] : '';
        $callback = [];
        if ($id != '') {
            $item = Item::find($id);
            $callback = $item->price;
        } else {
            $callback = 0;
        }
        return $callback;
    }

    /**
     * Membuat sebuah invoice otomatis untuk purchasing order
     *
     * @param Request $request
     * @return void
     */
    public function generate_purchasing_invoice(Request $request)
    {
        return 'SR/P/' . date('ymd') .'/'. rand(10, 99);
    }

    /**
     * Membuat sebuah invoice otomatis untuk sales order
     *
     * @param Request $request
     * @return void
     */
    public function generate_sales_invoice(Request $request)
    {
        return 'SR/S/' . date('ymd') .'/'. rand(10, 99);
    }

    /**
     * Membuat sebuah noomor PO otomatis untuk purchasing order
     *
     * @param Request $request
     * @return void
     */
    public function generate_purchasing_number(Request $request)
    {
        return 'PO/' . date('ymd') .'/'. rand(10, 99);
    }

    /**
     * Membuat sebuah nomor SO otomatis untuk sales order
     *
     * @param Request $request
     * @return void
     */
    public function generate_sales_number(Request $request)
    {
        return 'SO/' . date('ymd') .'/'. rand(10, 99);
    }
}
