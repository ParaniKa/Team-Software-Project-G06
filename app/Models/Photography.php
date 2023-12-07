<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photography extends Model
{
    use HasFactory;
    protected $table ='photographys';
    protected $fillable = [
        'package',
        'details',
        'price',
    ];
}
