<?php

namespace App\Http\Controllers\Api;

use App\Libraries\Common;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Closure;

class UserController extends Controller
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
            $_query = isset($request['q']) ? $request['q'] : '';
            $user = User::searchNotAdmin()
                        ->searchUser($_query)
                        ->with('category')
                        ->orderBy('id', 'DESC')
                        ->paginate(10);
            return response()->json($user, 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function post_data(Request $request)
    {
        $check = User::where(['username' => $request->input('username')])->count();
        if ($check == 0) {
            $user = new User();
            $user->username = $request->input('username');
            $user->category_id = $request->input('category_id');
            $user->password = hash('sha256', 'sosroretno');
            $user->level = 2;
            $user->active = 1;
            $user->created_at = date('Y-m-d H:i:s');
            if ($user->save()) {
                return response()->json(['status' => 'ok'], 200);
            } else {
                return response()->json(['status' => 'failed'], 500);
            }
        } else {
            return response()->json(['status' => 'duplicate'], 200);
        }
    }

    public function show_data(Request $request)
    {
        return response()->json(User::find($request['id']), 200);
    }

    public function put_data(Request $request)
    {
        $user = User::find($request['id']);
        $user->username = $request->input('username');
        $user->category_id = $request->input('category_id');
        $user->updated_at = date('Y-m-d H:i:s');
        if ($user->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function reset_password(Request $request)
    {
        $user = User::find($request['id']);
        $user->password = hash('sha256', 'sosroretno');
        $user->updated_at = date('Y-m-d H:i:s');
        if ($user->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }

    public function delete_data(Request $request)
    {
        $user = User::find($request['id']);
        $user->active = 0;
        $user->updated_at = date('Y-m-d H:i:s');
        if ($user->save()) {
            return response()->json(['status' => 'ok'], 200);
        } else {
            return response()->json(['status' => 'failed'], 500);
        }
    }
}
