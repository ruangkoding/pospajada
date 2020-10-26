<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
Route::post('login', 'Api\LoginController@postLogin');
Route::get('dashboard', 'Api\DashboardController@getData');
Route::put('profile', 'Api\ProfileController@putUpdatePassword');
Route::get('report', 'Api\ReportController@print_data');

// AJAX request
Route::get('ajax/item', 'Api\AjaxController@show_price_by_item');
Route::get('ajax/invoice', 'Api\AjaxController@generate_invoice');

// category
Route::get('category', 'Api\CategoryController@get_data');
Route::get('category/{id}', 'Api\CategoryController@show_data');
Route::post('category', 'Api\CategoryController@post_data');
Route::put('category', 'Api\CategoryController@put_data');
Route::delete('category', 'Api\CategoryController@delete_data');

// item
Route::get('item', 'Api\ItemController@get_data');
Route::get('item/{id}', 'Api\ItemController@show_data');
Route::post('item', 'Api\ItemController@post_data');
Route::put('item', 'Api\ItemController@put_data');
Route::delete('item', 'Api\ItemController@delete_data');

// customer
Route::get('customer', 'Api\CustomerController@get_data');
Route::get('customer/{id}', 'Api\CustomerController@show_data');
Route::post('customer', 'Api\CustomerController@post_data');
Route::put('customer', 'Api\CustomerController@put_data');
Route::delete('customer', 'Api\CustomerController@delete_data');

// supplier
Route::get('supplier', 'Api\SupplierController@get_data');
Route::get('supplier/{id}', 'Api\SupplierController@show_data');
Route::post('supplier', 'Api\SupplierController@post_data');
Route::put('supplier', 'Api\SupplierController@put_data');
Route::delete('supplier', 'Api\SupplierController@delete_data');

// user
Route::get('user', 'Api\UserController@get_data');
Route::get('user/{id}', 'Api\UserController@show_data');
Route::post('user', 'Api\UserController@post_data');
Route::put('user', 'Api\UserController@put_data');
Route::put('user/resetpassword', 'Api\UserController@reset_password');
Route::delete('user', 'Api\UserController@delete_data');

// buy cart
Route::get('cart/buy', 'Api\BuyCartController@get_data');
Route::post('cart/buy', 'Api\BuyCartController@post_data');
Route::post('cart/buy/checkout', 'Api\BuyCartController@post_checkout_data');
Route::delete('cart/buy', 'Api\BuyCartController@delete_data');

// sell cart
Route::get('cart/sell', 'Api\SellCartController@get_data');
Route::post('cart/sell', 'Api\SellCartController@post_data');
Route::post('cart/sell/checkout', 'Api\SellCartController@post_checkout_data');
Route::delete('cart/sell', 'Api\SellCartController@delete_data');

// buy order
Route::get('order/buy', 'Api\BuyOrderController@get_data');
Route::get('order/buy/print', 'Api\BuyOrderController@get_print_data');

// sell order
Route::get('order/sell', 'Api\SellOrderController@get_data');
Route::get('order/sell/print', 'Api\SellOrderController@get_print_data');
