<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BuyInvoicePayment extends Model
{
    protected $table = 'buy_invoice_payment';
    protected $dates = ['invoice_date', 'created_at', 'updated_at'];

    public function invoice()
    {
        return $this->belongsTo('App\Models\BuyInvoice', 'buy_invoice_id');
    }
}
