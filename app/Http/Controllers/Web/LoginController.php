<?php

namespace App\Http\Controllers\Web;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Cookie;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    public function login()
    {
        $data = [];
        $data['redirect'] = url('dashboard');
        $data['api'] = url('api/login');
        return View::make('login', $data);
    }

    public function logout()
    {
        return redirect('login')->withCookie(Cookie::forget('login'))
            ->withCookie(Cookie::forget('id'))
            ->withCookie(Cookie::forget('username'))
            ->withCookie(Cookie::forget('password'))
            ->withCookie(Cookie::forget('role'))
            ->withCookie(Cookie::forget('level'));
    }
}
