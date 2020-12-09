<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BuyInvoice extends Model
{
    protected $table = 'buy_invoice';
    protected $dates = ['invoice_date', 'created_at', 'updated_at'];
    protected $casts = [
        'info' => 'array',
        'item' => 'array',
        'po' => 'array',
        'payment' => 'array'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }

    public function scopeSearchInvoice($query, $q)
    {
        if ($q) {
            return $query->where('invoice_number', 'LIKE', '%' . $q . '%');
        }
    }

    public function scopeSearchFrom($query, $start)
    {
        if ($start) {
            return $query->where('invoice_date', '>=', $start);
        }
    }

    public function scopeSearchTo($query, $end)
    {
        if ($end) {
            return $query->where('invoice_date', '<=', $end);
        }
    }

    public function scopeSearchPayment($query, $payment)
    {
        if ($payment) {
            return $query->where('payment_method_id', $payment);
        }
    }
}
