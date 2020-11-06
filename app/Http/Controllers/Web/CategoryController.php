<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Libraries\Access;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;
use Closure;

class CategoryController extends Controller
{
    protected $title = 'Jenis Barang';
    protected $link  = 'category';
    protected $api   = 'api/category';
    protected $route = 'category';
    protected $access;
    protected $common;
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
        return View::make('category.index', $data);
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
        return View::make('category.form', $data);
    }

    public function edit(Request $request)
    {
        $category = Category::find($request['id']);
        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['category'] = $category;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api . '?id=' . $category->id);
        $data['act'] = 'edit';
        $data['route'] = url($this->route);
        $data['mobile'] = $this->mobile;
        return View::make('category.form', $data);
    }
}
