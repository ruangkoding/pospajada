<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BuyCart extends Model
{
    protected $table = 'buy_cart';
    protected $dates = ['created_at', 'updated_at'];

    public function item()
    {
        return $this->belongsTo('App\Models\Item', 'item_id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
