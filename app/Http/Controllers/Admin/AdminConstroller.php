<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Permissions;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminConstroller extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Admin/Register');
    }
    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'permission_id'=> $request['permission_id'],
            'password' => Hash::make($request['password'])
        ]);

        $admin = Permissions::where('permission_name', 'admin')->first();

        Admin::create(
            [
                'permission_id' => $admin['id'],
                'user_id' => $user['id'],
                'name' => $request['name'],
                'email' => $request['email'],
            ]
        );
          return response()->json(['message' => 'Admin registered successfully 🎉']);
    }
}
