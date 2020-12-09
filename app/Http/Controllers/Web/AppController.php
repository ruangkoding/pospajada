<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Jenssegers\Agent\Agent;
use Closure;
class AppController extends Controller
{
    
    protected $mobile;

    public function __construct()
    {
        $this->middleware(
            function ($request, Closure $next) {
                $agent  = new Agent();
                if ($agent->isMobile()) {
                    $this->mobile = true;
                } else {
                    $this->mobile = false;
                }
                return $next($request);
            }
        );
    }

    public function index()
    {
        return view('app', ['mobile' => $this->mobile]);
    }
}
