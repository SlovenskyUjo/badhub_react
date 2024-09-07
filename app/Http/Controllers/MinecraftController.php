<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MinecraftController extends Controller
{
    public function getOnlinePlayers()
    {
        // Vykonaj GET požiadavku na API
        $response = Http::get('https://minecraftservery.eu/api/v1/server/joqPwhw8OpzB435i/info');

        // Skontroluj, či odpoveď je úspešná
        if ($response->successful()) {
            $data = $response->json();

            // Skontroluj, či odpoveď obsahuje očakávané kľúče
            $playersOnline = isset($data['players']) ? $data['players'] : 'N/A';

            return response()->json([
                'players' => $playersOnline
            ]);
        } else {
            // Ak API nevracia úspešnú odpoveď
            return response()->json([
                'players' => 'N/A'
            ], $response->status());
        }
    }
}
