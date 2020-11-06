<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Libraries\Access;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;
use Closure;

class CustomerController extends Controller
{
    protected $title = 'Customer';
    protected $link  = 'customer';
    protected $api   = 'api/customer';
    protected $route = 'customer';
    protected $access;
    protected $breadcrumb;
    protected $mobile;

    public function __construct()
    {
        $this->middleware(
            function ($request, Closure $next) {
                if (Cookie::get('login') == true) {
                    $access = new Access();
                    $agent  = new Agent();
                    $common = new Common();

                    $nav = [
                        '<a href="' . url('dashboard') . '" style="color:#ffffff;">Beranda</a>',
                        $this->title
                    ];

                    if ($agent->isMobile()) {
                        $this->mobile = true;
                    } else {
                        $this->mobile = false;
                    }

                    $this->access = $access->generateAccess(Cookie::get('level'));
                    $this->breadcrumb = $common->generate_breadcrumbs($nav);
                    return $next($request);
                } else {
                    return redirect('login');
                }
            }
        );
    }

    public function index()
    {
        $data = [];
        $data['breadcrumb'] = $this->breadcrumb;
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['api'] = url($this->api);
        $data['route'] = url($this->route);
        $data['access'] = $this->access;
        $data['mobile'] = $this->mobile;
        return View::make('customer.index', $data);
    }

    public function create()
    {
        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api);
        $data['act'] = 'create';
        $data['route'] = url($this->route);
        $data['mobile'] = $this->mobile;
        return View::make('customer.form', $data);
    }

    public function edit(Request $request)
    {
        $customer = Customer::find($request['id']);
        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['customer'] = $customer;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api . '?id=' . $customer->id);
        $data['act'] = 'edit';
        $data['route'] = url($this->route);
        $data['mobile'] = $this->mobile;
        return View::make('customer.form', $data);
    }
}
