<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesInvoiceDetail extends Model
{
    protected $table = 'so_invoice_detail';
    protected $dates = ['created_at', 'updated_at'];

    public function order()
    {
        return $this->belongsTo('App\Models\SalesInvoice', 'so_invoice_id');
    }

    public function item()
    {
        return $this->belongsTo('App\Models\Item', 'item_id');
    }
}
