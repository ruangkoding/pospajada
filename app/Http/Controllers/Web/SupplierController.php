<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Supplier;
use App\Libraries\Access;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;
use Closure;

class SupplierController extends Controller
{
    protected $title = 'Supplier';
    protected $link  = 'supplier';
    protected $api   = 'api/supplier';
    protected $route = 'supplier';
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
        return View::make('supplier.index', $data);
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
        return View::make('supplier.form', $data);
    }

    public function edit(Request $request)
    {
        $supplier = Supplier::find($request['id']);
        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['supplier'] = $supplier;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api . '?id=' . $supplier->id);
        $data['act'] = 'edit';
        $data['route'] = url($this->route);
        $data['mobile'] = $this->mobile;
        return View::make('supplier.form', $data);
    }
}
