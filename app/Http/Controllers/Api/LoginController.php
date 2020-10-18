<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class LoginController extends Controller
{
    public function postLogin(Request $request)
    {
        try {
            $user_data = array();
            $user_data['username'] = $request->input('username');
            $user_data['password'] = hash('md5', $request->input('password'));
            $user = User::where($user_data)->first();

            if ($user) {
                if ($user['active'] == 1) {
                    $response = array();
                    $response['login'] = 'true';
                    $response['id'] = $user['id'];
                    $response['username'] = $user['username'];
                    $response['level'] = $user['level'];
                    if ($user['level'] == 1) {
                        $response['role'] = 'admin';
                    } else {
                        $response['role'] = 'cashier';
                    }
                    return response()->json($response, 200);
                } else {
                    return response()->json(['login' => 'inactive'], 200);
                }
            } else {
                return response()->json(['login' => 'false'], 200);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
