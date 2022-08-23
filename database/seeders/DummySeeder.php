<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DummySeeder extends Seeder
{
    public function run()
    {
         \App\Models\Admin\Dummy::factory(1000)->create();
    }
}
