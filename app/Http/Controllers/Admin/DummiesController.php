<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Dummy;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DummiesController extends Controller
{
    public function index()
    {
        $data = Dummy::limit(100)->get();
        $test = [
            'name' => 'name here',
            'add' => 'address here',
        ];
        return Inertia::render('@.Module.Index' , [
            'data' => $data
        ]);

    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show(Article $article)
    {
    }

    public function edit(Article $article)
    {
    }

    public function update(Request $request, Article $article)
    {
    }

    public function destroy(Article $article)
    {
    }
}
