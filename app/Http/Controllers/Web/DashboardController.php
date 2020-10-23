<?php

namespace App\Http\Controllers\Web;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;

class DashboardController extends Controller
{
    public $title   = 'Dashboard';
    public $link    = 'dashboard';
    protected $api  = 'api/dashboard';
    protected $breadcrumb;
    protected $mobile;

    public function __construct()
    {
        $this->middleware(
            function ($request, Closure $next) {
                if (Cookie::get('login') == 'true') {
                    $common = new Common();
                    $agent  = new Agent();
                    $nav = ['<i class="fa fa-dashboard"></i> Dashboard'];

                    if ($agent->isMobile()) {
                        $this->mobile = true;
                    } else {
                        $this->mobile = false;
                    }
                    $this->breadcrumb = $common->generate_breadcrumbs($nav);
                    return $next($request);
                } else {
                    return redirect('login');
                }
            }
        );
    }

    public function index(Request $request)
    {
        $data = [];
        $data['breadcrumb'] = $this->breadcrumb;
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['api'] = url($this->api);
        $data['mobile'] = $this->mobile;
        return View::make('dashboard', $data);
    }
}
