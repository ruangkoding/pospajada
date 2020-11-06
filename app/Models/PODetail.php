<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PODetail extends Model
{
    protected $table = 'po_detail';
    protected $dates = ['created_at', 'updated_at'];

    public function order()
    {
        return $this->belongsTo('App\Models\PO', 'po_id');
    }

    public function item()
    {
        return $this->belongsTo('App\Models\Item', 'item_id');
    }
}
