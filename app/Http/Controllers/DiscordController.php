<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DiscordController extends Controller
{
    public function getInviteData()
    {
        $url = 'https://discord.com/api/v9/invites/9vhUGpzrwt?with_counts=true';
        $response = Http::get($url);

        return response()->json($response->json());
    }
}
