<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
// @. use this in app js to change the directory of folder with to load.
// for front side it is Admin/Pages
*/

// Route::inertia('/', 'Welcome');

Route::get('/', function () {
    return Inertia::render('@.Welcome');
})->name('Index');