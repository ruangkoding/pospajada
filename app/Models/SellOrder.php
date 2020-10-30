<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SellOrder extends Model
{
    protected $table = 'sell_order';
    protected $dates = ['created_at', 'updated_at'];

    public function customer()
    {
        return $this->belongsTo('App\Models\Customer', 'customer_id');
    }

    public function paymentmethod()
    {
        return $this->belongsTo('App\Models\PaymentMethod', 'payment_method_id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }

    public function scopeSearchInvoice($query, $q)
    {
        if ($q) {
            return $query->where('invoice', 'LIKE', '%' . $q . '%');
        }
    }

    public function scopeSearchAwalPeriode($query, $start)
    {
        if ($start) {
            return $query->where('invoice_date', '>=', $start);
        }
    }

    public function scopeSearchAkhirPeriode($query, $end)
    {
        if ($end) {
            return $query->where('invoice_date', '<=', $end);
        }
    }

    public function scopeSearchUser($query, $user)
    {
        if ($user != 1) {
            return $query->where('user_id', $user);
        }
    }
}
