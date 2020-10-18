<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SellCart extends Model
{
    protected $table = 'sell_cart';
    protected $dates = ['created_at', 'updated_at'];

    public function item()
    {
        return $this->belongsTo('App\Models\Item', 'item_id');
    }
}
