<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'user';
    protected $dates = ['created_at', 'updated_at'];

    public function scopeSearchUser($query, $q)
    {
        if ($q) {
            return $query->where('username', 'LIKE', '%' . $q . '%');
        }
    }

    public function scopeSearchLevel($query, $level)
    {
        if ($level) {
            return $query->where('level', '=', $level);
        }
    }

    public function scopeSearchActive($query, $active)
    {
        if ($active) {
            return $query->where('active', '=', $active);
        }
    }
    
    public function scopeSearchNotAdmin($query)
    {
        return $query->where('level', '!=', 1);
    }
}
