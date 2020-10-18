<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/
Route::get('/offline', function () {
    return view('vendor/laravelpwa/offline');
});

Route::get('/', 'Web\LoginController@login');
Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
});

Route::get('login', 'Web\LoginController@login');
Route::get('logout', 'Web\LoginController@logout');

Route::get('dashboard', 'Web\DashboardController@index');
Route::get('profile', 'Web\ProfileController@index');
Route::get('report', 'Web\ReportController@index');

// category
Route::get('category', 'Web\CategoryController@index');
Route::get('category/create', 'Web\CategoryController@create');
Route::get('category/edit', 'Web\CategoryController@edit');

// item
Route::get('item', 'Web\ItemController@index');
Route::get('item/create', 'Web\ItemController@create');
Route::get('item/edit', 'Web\ItemController@edit');

// supplier
Route::get('supplier', 'Web\SupplierController@index');
Route::get('supplier/create', 'Web\SupplierController@create');
Route::get('supplier/edit', 'Web\SupplierController@edit');

// customer
Route::get('customer', 'Web\CustomerController@index');
Route::get('customer/create', 'Web\CustomerController@create');
Route::get('customer/edit', 'Web\CustomerController@edit');

// buycart
Route::get('buycart', 'Web\BuyCartController@index');
Route::get('buycart/create', 'Web\BuyCartController@create');

// sellcart
Route::get('sellcart', 'Web\SellCartController@index');
Route::get('sellcart/create', 'Web\SellCartController@create');

// buy invoice
Route::get('buyorder', 'Web\BuyOrderController@index');
Route::get('buyorder/detail', 'Web\BuyOrderController@detail');

// sell invoice
Route::get('sellorder', 'Web\SellOrderController@index');
Route::get('sellorder/detail', 'Web\SellOrderController@detail');
