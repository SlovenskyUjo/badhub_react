<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuthMe extends Model
{
    protected $connection = 'mysql';
    protected $table = 'authme';
    public $timestamps = false;
    protected $guarded = false;
}
