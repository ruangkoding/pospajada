<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\PO;
use App\Models\PODetail;
use App\Models\POCart;
use App\Models\Item;
use App\Models\Supplier;
use App\Models\PaymentMethod;
use App\Libraries\Access;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;
use Closure;

class PurchaseOrderController extends Controller
{
    protected $title = 'Purchase Order';
    protected $link  = 'purchaseorder';
    protected $api   = 'api/order/po';
    protected $route = 'po';
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
        return View::make('po.index', $data);
    }

    public function detail(Request $request)
    {
        $po = PO::with('supplier', 'user')->find($request['id']);
        $podetail = PODetail::where('po_id', $po->id)->with('item.unit')->get();
        $paymentmethod = PaymentMethod::all();

        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api);
        $data['print_api'] = url($this->api . '/print?id=' . $po->id);
        $data['po'] = $po;
        $data['podetail'] = $podetail;
        $data['paymentmethod'] = $paymentmethod;
        $data['act'] = 'create';
        $data['route'] = url($this->route);
        $data['mobile'] = $this->mobile;
        return View::make('po.detail', $data);
    }

    public function create()
    {
        $item = Item::all();
        $supplier = Supplier::all();

        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api);
        $data['act'] = 'create';
        $data['route'] = url($this->route);
        $data['mobile'] = $this->mobile;
        $data['item'] = $item;
        $data['supplier'] = $supplier;
        $data['access'] = $this->access;
        return View::make('po.cart', $data);
    }
}
