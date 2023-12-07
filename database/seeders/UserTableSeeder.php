<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $admin = User::create([
            'name' => 'Kanishdan',
            'email' => 'kanishdan23@gmail.com',
            'address' => 'NO 51, kachcherinullur Road,Nullur,Jaffna',
            'mobilenumber' => '0769195186',
            'password' => bcrypt('as12df45'),
        ]);

        //$users = factory(User::class, 5)->create();
    }
}
