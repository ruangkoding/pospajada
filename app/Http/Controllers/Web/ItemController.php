<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Category;
use App\Models\Unit;
use App\Libraries\Access;
use App\Libraries\Common;
use Closure;

class ItemController extends Controller
{
    protected $title = 'Barang';
    protected $link  = 'item';
    protected $api   = 'api/item';
    protected $route = 'item';
    protected $access;
    protected $common;
    protected $breadcrumb;

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
                        '<i class="fa fa-dropbox"></i> ' . $this->title
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
        $category = Category::all();
        $unit = Unit::all();

        $data = [];
        $data['breadcrumb'] = $this->breadcrumb;
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['api'] = url($this->api);
        $data['route'] = url($this->route);
        $data['access'] = $this->access;
        $data['category'] = $category;
        $data['unit'] = $unit;
        return View::make('item.index', $data);
    }

    public function create()
    {
        $category = Category::all();
        $unit = Unit::all();

        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api);
        $data['act'] = 'create';
        $data['category'] = $category;
        $data['unit'] = $unit;
        $data['route'] = url($this->route);
        return View::make('item.form', $data);
    }

    public function edit(Request $request)
    {
        $item = Item::find($request['id']);
        $category = Category::all();
        $unit = Unit::all();

        $data = [];
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['item'] = $item;
        $data['breadcrumb'] = $this->breadcrumb;
        $data['api'] = url($this->api . '?id=' . $item->id);
        $data['act'] = 'edit';
        $data['category'] = $category;
        $data['unit'] = $unit;
        $data['route'] = url($this->route);
        return View::make('item.form', $data);
    }
}
