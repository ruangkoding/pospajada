<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Customer;
use App\Models\BuyCart;
use App\Models\PaymentMethod;
use App\Libraries\Access;
use App\Libraries\Common;
use Closure;

class SellCartController extends Controller
{
    protected $title = 'Keranjang Belanja';
    protected $link  = 'sellcart';
    protected $api   = 'api/cart/sell';
    protected $route = 'sellcart';
    protected $access;
    protected $breadcrumb;
    protected $common;

    public function __construct()
    {
        $this->middleware(
            function ($request, Closure $next) {
                if (Cookie::get('login') == true) {
                    $access = new Access();
                    $this->common = new Common();
                    $this->access = $access->generateAccess(Cookie::get('level'));
                    $nav = [
                        '<a href="' . url('dashboard') . '"><i class="fa fa-dashboard"></i> Dashboard</a>',
                        '<i class="fa fa-shopping-bag"></i> ' . $this->title
                    ];
                    $this->breadcrumb = $this->common->generate_breadcrumbs($nav);
                    return $next($request);
                } else {
                    return redirect('login');
                }
            }
        );
    }

    public function index()
    {
        $customer = Customer::all();
        $paymentmethod = PaymentMethod::all();
        $data = [];
        $data['breadcrumb'] = $this->breadcrumb;
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['api'] = url($this->api);
        $data['route'] = url($this->route);
        $data['access'] = $this->access;
        $data['customer'] = $customer;
        $data['paymentmethod'] = $paymentmethod;
        return View::make('sellcart.index', $data);
    }

    public function create()
    {
        $item = Item::all();
        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api);
        $data['act'] = 'create';
        $data['route'] = url($this->route);
        $data['item'] = $item;
        return View::make('sellcart.form', $data);
    }
}
