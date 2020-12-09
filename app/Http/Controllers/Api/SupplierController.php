<?php

namespace App\Http\Controllers\Api;

use App\Models\Supplier;
use App\Libraries\Common;
use Illuminate\Http\Request;
use Exception;
use App\Http\Controllers\Controller;
use Closure;

class SupplierController extends Controller
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

    public function get_data(Request $request)
    {
        try {
            $_query = ($request['q'] !== '') ? $request['q'] : '';
            $_all   = isset($request['all']) ? true : false;
            if($_all == true) {
                $supplier = Supplier::all();
            } else {
                $supplier = Supplier::searchSupplier($_query)->orderBy('id', 'DESC')->paginate(10);
            }
            return response()->json($supplier, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function show_data(Request $request)
    {
        return response()->json(Supplier::find($request['id']), 200);
    }

    public function post_data(Request $request)
    {
        $check = Supplier::where('supplier_name', $request->input('supplier_name'))->count();
        if ($check == 0) {
            $supplier = new Supplier();
            $supplier->supplier_name = $request->input('supplier_name');
            $supplier->supplier_address = $request->input('supplier_address');
            $supplier->supplier_contact = $request->input('supplier_contact');
            $supplier->created_at = date('Y-m-d H:i:s');
            if ($supplier->save()) {
                return response()->json(['status'=>'ok'], 200);
            } else {
                return response()->json(['status'=>'failed'], 500);
            }
        } else {
            return response()->json(['status'=>'duplicate'], 200);
        }
    }

    public function put_data(Request $request)
    {
        $supplier = Supplier::find($request['id']);
        $supplier->supplier_name = $request->input('supplier_name');
        $supplier->supplier_address = $request->input('supplier_address');
        $supplier->supplier_contact = $request->input('supplier_contact');
        $supplier->updated_at = date('Y-m-d H:i:s');
        if ($supplier->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function delete_data(Request $request)
    {
        $supplier = Supplier::find($request['id']);
        if ($supplier->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }
}
