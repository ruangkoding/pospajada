<?php

namespace App\Http\Controllers\Api;

use App\Models\PaymentMethod;
use Illuminate\Http\Request;
use Exception;
use App\Http\Controllers\Controller;
use Closure;

class PaymentMethodController extends Controller
{
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
            $paymentmethod = PaymentMethod::all();
            return response()->json($paymentmethod, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
