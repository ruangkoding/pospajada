<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/
// Route::get('/offline', function () {
//     return view('vendor/laravelpwa/offline');
// });

// Route::get('/', 'Web\LoginController@login');
// Route::get('/linkstorage', function () {
//     Artisan::call('storage:link');
// });

Route::get('/{any}', 'Web\AppController@index')->where('any', '.*');