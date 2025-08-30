<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * Global middleware run on every request.
     *
     * @var array<int, class-string|string>
     */
    // protected $middleware = [
    //     \App\Http\Middleware\TrustProxies::class,
    //     \Fruitcake\Cors\HandleCors::class,
    //     \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
    //     \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
    //     \App\Http\Middleware\TrimStrings::class,
    //     \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
    // ];

    /**
     * Middleware groups (web, api).
     *
     * @var array<string, array<int, class-string|string>>
     */
    protected $middlewareGroups = [
        'web' => [
            // \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            // \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \App\Http\Middleware\HandleInertiaRequests::class, // Inertia
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ],

        'api' => [
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    /**
     * Route middleware can be assigned to individual routes.
     *
     * @var array<string, class-string|string>
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        // 'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,

        // ✅ Custom role-based middleware
        'role' => \App\Http\Middleware\RoleMiddleware::class, // usage: ->middleware('role:admin')
    ];
}
