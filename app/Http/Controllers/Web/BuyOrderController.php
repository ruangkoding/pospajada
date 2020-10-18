<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\BuyOrder;
use App\Models\BuyOrderDetail;
use App\Libraries\Access;
use App\Libraries\Common;
use Closure;

class BuyOrderController extends Controller
{
  protected $title = 'Invoice Pembelian';
  protected $link  = 'buyorder';
  protected $api   = 'api/order/buy';
  protected $route = 'buyorder';
  protected $access;
  protected $breadcrumb;
  protected $common;

  public function __construct()
  {
    $this->middleware(
      function ($request, Closure $next) {
        if (Cookie::get('login') == true) {
          $access = new Access();
          $this->access = $access->generateAccess(Cookie::get('level'));
          $this->common = new Common();
          $nav = [
            '<a href="' . url('dashboard') . '"><i class="fa fa-dashboard"></i> Dashboard</a>',
            '<i class="fa fa-file-text"></i> ' . $this->title
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
    $data = [];
    $data['breadcrumb'] = $this->breadcrumb;
    $data['title']  = $this->title;
    $data['link'] = $this->link;
    $data['api'] = url($this->api);
    $data['route'] = url($this->route);
    $data['access'] = $this->access;
    return View::make('buyorder.index', $data);
  }

  public function detail(Request $request)
  {
    $invoice = BuyOrder::with('supplier','paymentmethod')->find($request['id']);
    $invoicedetail = BuyOrderDetail::where('buy_order_id', $invoice->id)->with('item.unit')->get();
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
    return View::make('buyorder.detail', $data);
  }
}
