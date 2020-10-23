<?php

namespace App\Http\Controllers\Web;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Cookie;
use App\Http\Controllers\Controller;
use Jenssegers\Agent\Agent;
use Closure;

class LoginController extends Controller
{
    public function login()
    {
        if (Cookie::get('login') == true) {
            return redirect('dashboard');
        } else {
            $agent  = new Agent();
            if ($agent->isMobile()) {
                $this->mobile = true;
            } else {
                $this->mobile = false;
            }
            $data = [];
            $data['redirect'] = url('dashboard');
            $data['api'] = url('api/login');
            $data['mobile'] = $this->mobile;
            return View::make('login', $data);
        }
    }

    public function logout()
    {
        return redirect('login')
            ->withCookie(Cookie::forget('login'))
            ->withCookie(Cookie::forget('id'))
            ->withCookie(Cookie::forget('username'))
            ->withCookie(Cookie::forget('password'))
            ->withCookie(Cookie::forget('role'))
            ->withCookie(Cookie::forget('level'));
    }
}
