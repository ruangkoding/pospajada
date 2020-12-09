<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Str;
class LoginController extends Controller
{
    public function postLogin(Request $request)
    {
        try {
            $user_data = [];
            $user_data['username'] = $request->input('username');
            $user_data['password'] = hash('sha1', $request->input('password'));
            $user = User::where($user_data)->first();
            if ($user) {
                if ($user['active'] == 1) {
                    $token = Str::random(64);
                    $response = [];
                    $response['login'] = 'true';
                    $response['id'] = $user['id'];
                    $response['username'] = $user['username'];
                    $response['level'] = $user['level'];
                    $response['token'] = $token;
                    $response['category_id'] = $user['category_id'];
                    if ($user['level'] == 1) {
                        $response['role'] = 'admin';
                    } else {
                        $response['role'] = 'operator';
                    }
                    User::where('id', $user['id'])->update(['remember_token' => $response['token']]);
                    return response()->json(['status' => 'success', 'data' => $response], 200);
                } else {
                    return response()->json(['status' => 'inactive', 'data' => ''], 200);
                }
            } else {
                return response()->json(['status' => 'failed', 'data' => ''], 200);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
