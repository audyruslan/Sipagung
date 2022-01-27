<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Admin',
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'address' => 'anywhere',
            'password' => Hash::make('1234')
        ]);

        $user->assignRole('admin');

        $user = User::create([
            'name' => 'Fadli Nur Zaman',
            'username' => 'fadhlynz',
            'email' => 'fadhlynzn@gmail.com',
            'address' => 'anywhere',
            'password' => Hash::make('admin1234')
        ]);

        $user->assignRole('user');
    }
}
