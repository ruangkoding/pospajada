<?php

namespace App\Http\Controllers\Api;

use App\Models\Customer;
use App\Libraries\Common;
use Illuminate\Http\Request;
use Exception;
use App\Http\Controllers\Controller;
use Closure;

class CustomerController extends Controller
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
            if ($_all == true) {
                $customer = Customer::all();
            } else {
                $customer = Customer::searchCustomer($_query)->orderBy('id', 'DESC')->paginate(10);
            }
            return response()->json($customer, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function show_data(Request $request)
    {
        return response()->json(Customer::find($request['id']), 200);
    }

    public function post_data(Request $request)
    {
        $check = Customer::where('customer_name', $request->input('customer_name'))->count();
        if ($check == 0) {
            $customer = new Customer();
            $customer->customer_name = $request->input('customer_name');
            $customer->customer_address = $request->input('customer_address');
            $customer->hp = $request->input('hp');
            $customer->created_at = date('Y-m-d H:i:s');
            if ($customer->save()) {
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
        $customer = Customer::find($request['id']);
        $customer->customer_name = $request->input('customer_name');
        $customer->customer_address = $request->input('customer_address');
        $customer->hp = $request->input('hp');
        $customer->updated_at = date('Y-m-d H:i:s');
        if ($customer->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function delete_data(Request $request)
    {
        $customer = Customer::find($request['id']);
        if ($customer->delete()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }
}
