<?php

use App\Http\Controllers\DiscordController;
use App\Http\Controllers\MinecraftController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TeamController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/invite-data', [DiscordController::class, 'getInviteData']);
Route::get('/api/players/online', [MinecraftController::class, 'getOnlinePlayers']);

Route::get('/team', [TeamController::class, 'index'])->name('team.show');
Route::get('/pravidla', function () {
    return Inertia::render('Rules/Rules');
})->name('rules.show');
Route::get('/mapa', function () {
    return Inertia::render('Map/Map');
})->name('map.show');
Route::get('/hlasovani', function () {
    return Inertia::render('Vote/Vote');
})->name('vote.show');

require __DIR__.'/auth.php';
