<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BuyOrderDetail extends Model
{
    protected $table = 'buy_order_detail';
    protected $dates = ['created_at', 'updated_at'];

    public function order()
    {
        return $this->belongsTo('App\Models\BuyOrder', 'buy_order_id');
    }

    public function item()
    {
        return $this->belongsTo('App\Models\Item', 'item_id');
    }
}
