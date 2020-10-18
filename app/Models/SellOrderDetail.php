<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SellOrderDetail extends Model
{
    protected $table = 'sell_order_detail';
    protected $dates = ['created_at', 'updated_at'];

    public function order()
    {
        return $this->belongsTo('App\Models\SellOrder', 'sell_order_id');
    }

    public function item()
    {
        return $this->belongsTo('App\Models\Item', 'item_id');
    }
}
