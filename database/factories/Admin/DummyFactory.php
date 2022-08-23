<?php

namespace Database\Factories\Admin;

use App\Models\Admin\Dummy;
use Illuminate\Database\Eloquent\Factories\Factory;

class DummyFactory extends Factory
{
    protected $model = Dummy::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->email,
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'country_id' => rand(1, 50),
            'status_id' => rand(1, 5),
            'amount' => $this->faker->randomFloat(null , 8 , 2)
        ];
    }
}
