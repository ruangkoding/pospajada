<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\SalesInvoice;
use App\Models\SalesInvoiceDetail;
use App\Models\Item;
use App\Libraries\Access;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;
use Closure;

class SOInvoiceController extends Controller
{
    protected $title = 'Invoice Penjualan';
    protected $link  = 'soinvoice';
    protected $api   = 'api/invoice/sell';
    protected $route = 'soinvoice';
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
        return View::make('soinvoice.index', $data);
    }

    public function detail(Request $request)
    {
        $invoice = SalesInvoice::with('so.supplier', 'so.user', 'paymentmethod')->find($request['id']);
        $detail  = SalesInvoiceDetail::where('so_invoice_id', $invoice->id)->with('item.unit')->get();

        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api);
        $data['print_api'] = url($this->api . '/print?id=' . $invoice->id);
        $data['invoice'] = $invoice;
        $data['detail'] = $detail;
        $data['act'] = 'create';
        $data['route'] = url($this->route);
        $data['mobile'] = $this->mobile;
        return View::make('soinvoice.detail', $data);
    }
}
