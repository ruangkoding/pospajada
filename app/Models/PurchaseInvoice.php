<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchaseInvoice extends Model
{
    protected $table = 'po_invoice';
    protected $dates = ['created_at', 'updated_at'];

    public function po()
    {
        return $this->belongsTo('App\Models\PO', 'po_id');
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
        return $this->hasMany('App\Models\PODetail', 'id', 'po_id');
    }

    public function scopeSearchInvoiceNumber($query, $q)
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
