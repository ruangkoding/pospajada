<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesInvoice extends Model
{
    protected $table = 'so_invoice';
    protected $dates = ['created_at', 'updated_at'];

    public function so()
    {
        return $this->belongsTo('App\Models\SO', 'so_id');
    }

    public function paymentmethod()
    {
        return $this->belongsTo('App\Models\PaymentMethod', 'payment_method_id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }

    public function supplier()
    {
        return $this->belongsTo('App\Models\Supplier', 'supplier_id');
    }

    public function detail()
    {
        return $this->hasMany('App\Models\SODetail', 'id', 'so_id');
    }

    public function scopeSearchInvoice($query, $q)
    {
        if ($q) {
            return $query->where('invoice_number', 'LIKE', '%' . $q . '%');
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
}
