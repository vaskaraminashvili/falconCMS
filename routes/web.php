<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
// we do not to prefix to load front end pages. as it is in admin
// for front side it is Web/Pages
*/

// Route::inertia('/', 'Welcome');

Route::get('/', function () {
    return Inertia::render('Welcome');
});