<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BuyOrder extends Model
{
    protected $table = 'buy_order';
    protected $dates = ['created_at', 'updated_at'];

    public function supplier()
    {
        return $this->belongsTo('App\Models\Supplier', 'supplier_id');
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

    public function scopeSearchUser($query, $user)
    {
        if ($user != 1) {
            return $query->where('user_id', $user);
        }
    }
}
