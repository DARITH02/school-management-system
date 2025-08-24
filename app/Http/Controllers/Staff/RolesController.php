<?php

namespace App\Http\Controllers\Staff;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RolesController extends Controller
{
    //
    public function index()
    {
        return Inertia::render("staff/roles/Index");
    }
}
