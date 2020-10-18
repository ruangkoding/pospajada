<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category';
    protected $dates = ['created_at', 'updated_at'];

    public function scopeSearchCategory($query, $q)
    {
        if ($q) {
            return $query->where('category_name', 'LIKE', '%' . $q . '%');
        }
    }
}
