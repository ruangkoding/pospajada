<?php

namespace App\Http\Controllers\Web;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Libraries\Access;
use App\Libraries\Common;
use Jenssegers\Agent\Agent;

/**
 * @author rikyhsb
 *
 */
class ProfileController extends Controller
{
    public $title   = 'Ganti Password';
    public $link    = 'profile';
    protected $api  = 'api/profile';

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

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\View
     */
    public function index(Request $request) { 
        $user  = User::find(Cookie::get('id'));
        $data = [];
        $data['breadcrumb'] = $this->breadcrumb;
        $data['title']  = $this->title;
        $data['link'] = $this->link;
        $data['api'] = url($this->api.'?id='.$user->id);
        $data['user'] = $user;
        return View::make('profile', $data);
    }
}
