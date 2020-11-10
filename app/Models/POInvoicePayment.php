<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class POInvoicePayment extends Model
{
    protected $table = 'po_invoice_payment';
    protected $dates = ['invoice_date','created_at', 'updated_at'];

    public function invoice()
    {
        return $this->belongsTo('App\Models\PurchaseInvoice', 'po_invoice_id');
    }
}
