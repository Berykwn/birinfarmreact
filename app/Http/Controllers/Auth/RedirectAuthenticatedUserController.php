<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RedirectAuthenticatedUserController extends Controller
{
    public function home()
    {
        if (auth()->user()->role == 'admin') {
            return redirect('/dashboard');
        } elseif (auth()->user()->role == 'user') {
            return redirect('/pemesanan');
        } else {
            return auth()->logout();
        }
    }
}