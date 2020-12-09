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
Route::get('ajax/poinvoice', 'Api\AjaxController@generate_purchasing_invoice');
Route::get('ajax/soinvoice', 'Api\AjaxController@generate_sales_invoice');
Route::get('ajax/ponumber', 'Api\AjaxController@generate_purchasing_number');
Route::get('ajax/sonumber', 'Api\AjaxController@generate_sales_number');

Route::get('unit', 'Api\UnitController@get_data');
Route::get('paymentmethod', 'Api\PaymentMethodController@get_data');

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
Route::get('user/show/{id}', 'Api\UserController@show_data');
Route::post('user', 'Api\UserController@post_data');
Route::put('user', 'Api\UserController@put_data');
Route::put('user/resetpassword', 'Api\UserController@reset_password');
Route::delete('user', 'Api\UserController@delete_data');

// Buy Invoice
Route::get('order/buy', 'Api\BuyInvoiceController@get_invoices_data');
Route::get('order/buy/show/{id}', 'Api\BuyInvoiceController@get_invoice_data');
Route::post('order/buy', 'Api\BuyInvoiceController@post_invoice_data');
Route::get('order/buy/cart', 'Api\BuyInvoiceController@get_cart_data');
Route::post('order/buy/cart', 'Api\BuyInvoiceController@post_cart_data');
Route::delete('order/buy/cart', 'Api\BuyInvoiceController@delete_cart_data');
Route::get('order/buy/pay', 'Api\BuyInvoiceController@get_payment_data');
Route::post('order/buy/pay', 'Api\BuyInvoiceController@post_payment_data');

// Sell Invoice
Route::get('order/sell', 'Api\SellInvoiceController@get_invoices_data');
Route::get('order/sell/show/{id}', 'Api\SellInvoiceController@get_invoice_data');
Route::post('order/sell', 'Api\SellInvoiceController@post_invoice_data');
Route::get('order/sell/cart', 'Api\SellInvoiceController@get_cart_data');
Route::post('order/sell/cart', 'Api\SellInvoiceController@post_cart_data');
Route::delete('order/sell/cart', 'Api\SellInvoiceController@delete_cart_data');
Route::get('order/sell/pay', 'Api\SellInvoiceController@get_payment_data');
Route::post('order/sell/pay', 'Api\SellInvoiceController@post_payment_data');