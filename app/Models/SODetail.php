<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SODetail extends Model
{
    protected $table = 'so_detail';
    protected $dates = ['created_at', 'updated_at'];

    public function order()
    {
        return $this->belongsTo('App\Models\SO', 'so_id');
    }

    public function item()
    {
        return $this->belongsTo('App\Models\Item', 'item_id');
    }
}
