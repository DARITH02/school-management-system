<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permissions extends Model
{
    protected $table = "permissions";
    protected $fillable = ['permission_name','access_rights','hr_id'];

    public function hr(){
        return $this->belongsTo(Hr::class,'hr_id');
    }
    public function admins(){
        return $this->hasMany(Admin::class,'permission_id');
    }
}
