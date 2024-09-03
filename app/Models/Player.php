<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $connection = 'mysql';
    protected $table = 'luckperms_players';
    public $timestamps = false;
    protected $guarded = false;
}
