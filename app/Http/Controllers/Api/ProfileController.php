<?php

namespace App\Http\Controllers\Api;

use App\Libraries\Common;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Closure;

class ProfileController extends Controller
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

    public function putUpdatePassword(Request $request)
    {
        $user = User::find($request->input('id'));
        $user->password = md5($request->input('password'));
        $user->updated_at = date('Y-m-d H:i:s');
        if ($user->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }
}
