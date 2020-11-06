<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\SellOrder;
use App\Models\SellOrderDetail;
use App\Libraries\Access;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;
use Closure;

class SellOrderController extends Controller
{
  protected $title = 'Invoice Penjualan';
  protected $link  = 'sellorder';
  protected $api   = 'api/order/sell';
  protected $route = 'sellorder';
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
    return View::make('sellorder.index', $data);
  }

  public function detail(Request $request)
  {
    $invoice = SellOrder::with('customer', 'paymentmethod')->find($request['id']);
    $invoicedetail = SellOrderDetail::where('sell_order_id', $invoice->id)->with('item.unit')->get();
    $data = [];
    $data['title']  = $this->title;
    $data['link'] = $this->link;
    $data['breadcrumb'] = $this->breadcrumb;
    $data['api'] = url($this->api);
    $data['print_api'] = url($this->api . '/print?id=' . $invoice->id);
    $data['invoice'] = $invoice;
    $data['invoicedetail'] = $invoicedetail;
    $data['act'] = 'create';
    $data['route'] = url($this->route);
    $data['mobile'] = $this->mobile;
    return View::make('sellorder.detail', $data);
  }
}
