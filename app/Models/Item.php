<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'item';
    protected $dates = ['created_at', 'updated_at'];

    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'category_id');
    }
    
    public function unit()
    {
        return $this->belongsTo('App\Models\Unit', 'unit_id');
    }

    public function scopeSearchQuery($query, $q)
    {
        if ($q) {
            return $query->where('item_name', 'LIKE', '%' . $q . '%');
        }
    }

    public function scopeSearchCategory($query, $category)
    {
        if ($category) {
            return $query->where('category_id', $category);
        }
    }
}
