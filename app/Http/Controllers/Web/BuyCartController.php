<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Supplier;
use App\Models\BuyCart;
use App\Models\PaymentMethod;
use App\Libraries\Access;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;
use Closure;

class BuyCartController extends Controller
{
    protected $title = 'Keranjang Belanja';
    protected $link  = 'buycart';
    protected $api   = 'api/cart/buy';
    protected $route = 'buycart';
    protected $access;
    protected $breadcrumb;
    protected $mobile;

    public function __construct()
    {
        $this->middleware(
            function ($request, Closure $next) {
                if (Cookie::get('login') == true) {
                    $access = new Access();
                    $common = new Common();
                    $agent  = new Agent();

                    $nav = [
                        '<a href="' . url('dashboard') . '"><i class="fa fa-dashboard"></i> Dashboard</a>',
                        '<i class="fa fa-shopping-bag"></i> ' . $this->title
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
        $supplier = Supplier::all();
        $paymentmethod = PaymentMethod::all();
        $data = [];
        $data['breadcrumb'] = $this->breadcrumb;
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['api'] = url($this->api);
        $data['route'] = url($this->route);
        $data['access'] = $this->access;
        $data['supplier'] = $supplier;
        $data['paymentmethod'] = $paymentmethod;
        $data['mobile'] = $this->mobile;
        return View::make('buycart.index', $data);
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
        $data['mobile'] = $this->mobile;
        $data['item'] = $item;
        return View::make('buycart.form', $data);
    }
}
