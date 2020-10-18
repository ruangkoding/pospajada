<?php

namespace App\Http\Controllers\Web;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Libraries\Common;

class DashboardController extends Controller
{
    public $title   = 'Dashboard';
    public $link    = 'dashboard';
    protected $api  = 'api/dashboard';
    protected $common;
    protected $breadcrumb;

    public function __construct()
    {
        $this->middleware(
            function ($request, Closure $next) {
                if (Cookie::get('login') == 'true') {
                    $this->common = new Common();
                    $nav = ['<i class="fa fa-dashboard"></i> Dashboard']; 
                    $this->breadcrumb = $this->common->generate_breadcrumbs($nav);
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
        return View::make('dashboard', $data);
    }
}
