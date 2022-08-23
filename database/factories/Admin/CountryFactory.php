<?php

namespace Database\Factories\Admin;

use App\Models\Admin\Country;
use Illuminate\Database\Eloquent\Factories\Factory;

class CountryFactory extends Factory
{
    protected $model = Country::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->country,
            'status' => 1
        ];
    }
}
