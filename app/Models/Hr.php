<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hr extends Model
{
    protected $table='hrs';
    protected $fillable = ['hr_name','hr_contact'];

    public function permissions(){
        return $this->hasMany(Permissions::class,'hr_id');
    }
}
