<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SOInvoicePayment extends Model
{
    protected $table = 'so_invoice_payment';
    protected $dates = ['invoice_date','created_at', 'updated_at'];

    public function invoice()
    {
        return $this->belongsTo('App\Models\PurchaseInvoice', 'so_invoice_id');
    }
}
