<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customer';
    protected $dates = ['created_at', 'updated_at'];

    public function scopeSearchCustomer($query, $q)
    {
        if ($q) {
            return $query->where('customer_name', 'LIKE', '%' . $q . '%');
        }
    }
}
