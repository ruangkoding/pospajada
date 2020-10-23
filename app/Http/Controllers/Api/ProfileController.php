<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
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
