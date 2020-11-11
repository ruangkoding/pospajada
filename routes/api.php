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

// PO order
Route::get('order/po', 'Api\PurchaseOrderController@get_data');
Route::get('order/po/cart', 'Api\PurchaseOrderController@get_cart_data');
Route::post('order/po/cart', 'Api\PurchaseOrderController@post_cart_data');
Route::delete('order/po/cart', 'Api\PurchaseOrderController@delete_cart_data');
Route::post('order/po/checkout', 'Api\PurchaseOrderController@post_checkout_data');
Route::post('order/po/rejectitem', 'Api\PurchaseOrderController@post_reject_item_data');
Route::post('order/po/generateinvoice', 'Api\PurchaseOrderController@post_invoice_data');
Route::post('order/po/rejectpo', 'Api\PurchaseOrderController@post_reject_po_data');
Route::get('order/po/print', 'Api\PurchaseOrderController@get_print_data');

// SO order
Route::get('order/so', 'Api\SalesOrderController@get_data');
Route::get('order/so/cart', 'Api\SalesOrderController@get_cart_data');
Route::post('order/so/cart', 'Api\SalesOrderController@post_cart_data');
Route::delete('order/so/cart', 'Api\SalesOrderController@delete_cart_data');
Route::post('order/so/checkout', 'Api\SalesOrderController@post_checkout_data');
Route::post('order/so/rejectitem', 'Api\SalesOrderController@post_reject_item_data');
Route::post('order/so/generateinvoice', 'Api\SalesOrderController@post_invoice_data');
Route::post('order/so/rejectso', 'Api\SalesOrderController@post_reject_so_data');
Route::get('order/so/print', 'Api\SalesOrderController@get_print_data');

// invoice pembelian
Route::get('invoice/buy', 'Api\PurchaseInvoiceController@get_data');
Route::post('invoice/buy/pay', 'Api\PurchaseInvoiceController@post_payment_data');
Route::get('invoice/buy/pay', 'Api\PurchaseInvoiceController@get_payment_data');
Route::get('invoice/buy/print', 'Api\PurchaseInvoiceController@get_print_data');

// invoice penjualan
Route::get('invoice/sell', 'Api\SalesInvoiceController@get_data');
Route::post('invoice/sell/pay', 'Api\SalesInvoiceController@post_payment_data');
Route::get('invoice/sell/pay', 'Api\SalesInvoiceController@get_payment_data');
Route::get('invoice/sell/print', 'Api\SalesInvoiceController@get_print_data');
