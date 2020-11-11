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

// user
Route::get('user', 'Web\UserController@index');
Route::get('user/create', 'Web\UserController@create');
Route::get('user/edit', 'Web\UserController@edit');

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

// buy invoice
Route::get('po', 'Web\PurchaseOrderController@index');
Route::get('po/create', 'Web\PurchaseOrderController@create');
Route::get('po/detail', 'Web\PurchaseOrderController@detail');

// sell invoice
Route::get('so', 'Web\SalesOrderController@index');
Route::get('so/create', 'Web\SalesOrderController@create');
Route::get('so/detail', 'Web\SalesOrderController@detail');

// buy invoice
Route::get('poinvoice', 'Web\POInvoiceController@index');
Route::get('poinvoice/detail', 'Web\POInvoiceController@detail');

// sell invoice
Route::get('soinvoice', 'Web\SOInvoiceController@index');
Route::get('soinvoice/detail', 'Web\SOInvoiceController@detail');
