<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('dummies', function (Blueprint $table) {
            $table->id();

            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->foreignId('country_id')->nullable();
            $table->foreignId('status_id')->nullable();
            $table->decimal('amount' , 8 , 2)->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('dummies');
    }
};
