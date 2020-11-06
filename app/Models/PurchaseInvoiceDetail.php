<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchaseInvoiceDetail extends Model
{
    protected $table = 'po_invoice_detail';
    protected $dates = ['created_at', 'updated_at'];

    public function order()
    {
        return $this->belongsTo('App\Models\PurchaseInvoice', 'po_invoice_id');
    }

    public function item()
    {
        return $this->belongsTo('App\Models\Item', 'item_id');
    }
}
