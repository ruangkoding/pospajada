<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PO extends Model
{
    protected $table = 'po';
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

    public function detail()
    {
        return $this->hasMany('App\Models\PODetail', 'id', 'po_id');
    }

    public function scopeSearchPoNumber($query, $q)
    {
        if ($q) {
            return $query->where('po_number', 'LIKE', '%' . $q . '%');
        }
    }

    public function scopeSearchAwalPeriode($query, $start)
    {
        if ($start) {
            return $query->where('po_date', '>=', $start);
        }
    }

    public function scopeSearchAkhirPeriode($query, $end)
    {
        if ($end) {
            return $query->where('po_date', '<=', $end);
        }
    }

    public function scopeSearchUser($query, $user)
    {
        if ($user != 1) {
            return $query->where('user_id', $user);
        }
    }
}
