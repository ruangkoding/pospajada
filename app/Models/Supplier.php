<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    protected $table = 'supplier';
    protected $dates = ['created_at', 'updated_at'];

    public function scopeSearchSupplier($query, $q)
    {
        if ($q) {
            return $query->where('supplier_name', 'LIKE', '%' . $q . '%');
        }
    }
}
