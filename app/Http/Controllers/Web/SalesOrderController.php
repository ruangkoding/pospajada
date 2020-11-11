<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\SO;
use App\Models\SODetail;
use App\Models\SOCart;
use App\Models\Item;
use App\Models\Customer;
use App\Models\PaymentMethod;
use App\Libraries\Access;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;
use Closure;

class SalesOrderController extends Controller
{
    protected $title = 'Sales Order';
    protected $link  = 'salesorder';
    protected $api   = 'api/order/so';
    protected $route = 'so';
    protected $access;
    protected $breadcrumb;
    protected $common;
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
        return View::make('so.index', $data);
    }

    public function detail(Request $request)
    {
        $so = SO::with('customer', 'user')->find($request['id']);
        $sodetail = SODetail::where('so_id', $so->id)->with('item.unit')->get();
        $paymentmethod = PaymentMethod::all();

        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api);
        $data['print_api'] = url($this->api . '/print?id=' . $so->id);
        $data['so'] = $so;
        $data['sodetail'] = $sodetail;
        $data['paymentmethod'] = $paymentmethod;
        $data['act'] = 'create';
        $data['route'] = url($this->route);
        $data['mobile'] = $this->mobile;
        return View::make('so.detail', $data);
    }

    public function create()
    {
        $item = Item::all();
        $customer = Customer::all();

        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api);
        $data['act'] = 'create';
        $data['route'] = url($this->route);
        $data['mobile'] = $this->mobile;
        $data['item'] = $item;
        $data['customer'] = $customer;
        $data['access'] = $this->access;
        return View::make('so.cart', $data);
    }
}
