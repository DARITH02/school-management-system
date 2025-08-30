<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admins';
    protected $fillable = ['permission_id', 'name', 'email','user_id'];

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function permission()
    {
        return $this->belongsTo(Permissions::class, 'permission_id');
    }
}
