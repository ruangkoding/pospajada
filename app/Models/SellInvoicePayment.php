<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SellInvoicePayment extends Model
{
    protected $table = 'sell_invoice_payment';
    protected $dates = ['invoice_date', 'created_at', 'updated_at'];

    public function invoice()
    {
        return $this->belongsTo('App\Models\SellInvoice', 'sell_invoice_id');
    }
}
