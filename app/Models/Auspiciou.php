<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Auspiciou extends Model
{
    use HasFactory;
    protected $table ='auspicious';
    protected $fillable = [
        'auspicious_date',
        'day',
        'auspicious_time_start',
        'auspicious_time_end',
    ];
}
