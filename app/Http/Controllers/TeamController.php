<?php

namespace App\Http\Controllers;

use App\Models\AuthMe;
use App\Models\Player;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamController extends Controller
{
    public function index()
    {
        $owners = Player::where('primary_group', 'Owner')->get();
        $developers = Player::where('primary_group', 'Developer')->get();
        $helpers = Player::where('primary_group', 'Helper')->get();
        $builders = Player::where('primary_group', 'Builder')->get();
        $youtubers = Player::where('primary_group', 'YouTuber')->get();

        $ownersWithDetails = $this->addRealNames($owners)->map(function ($owner) {
            $descriptions = [
                'ItzRegen' => 'Vývoj serveru a dizajn',
                'BadFoxxx' => 'Marketingová stránka serveru',
            ];

            return [
                'primary_group' => $owner->primary_group,
                'realname' => $owner->realname,
                'skinUrl' => $this->showSkin($owner->realname),
                'isLogged' => $owner->isLogged,
                'description' => $descriptions[$owner->realname] ?? '',
            ];
        });

        $developersWithDetails = $this->addRealNames($developers)->map(function ($developer) {
            $descriptions = [
                'SlovenskyUjo' => 'Správa webových stránek',
                'Water_Chick' => 'Tvorba pluginů',
            ];

            return [
                'realname' => $developer->realname,
                'primary_group' => $developer->primary_group,
                'skinUrl' => $this->showSkin($developer->realname),
                'isLogged' => $developer->isLogged,
                'description' => $descriptions[$developer->realname] ?? '',
            ];
        });

        $helpersWithDetails = $this->addRealNames($helpers)->map(function ($helper) {
            $descriptions = [
                'Jakum11' => 'Vedoucí Helper Teamu',
            ];

            return [
                'username' => $helper->username,
                'primary_group' => $helper->primary_group,
                'realname' => $helper->realname,
                'skinUrl' => $this->showSkin($helper->realname),
                'isLogged' => $helper->isLogged,
                'description' => $descriptions[$helper->realname] ?? '',
            ];
        });

        $buildersWithDetails = $this->addRealNames($builders)->map(function ($builder) {
            return [
                'username' => $builder->username,
                'primary_group' => $builder->primary_group,
                'realname' => $builder->realname,
                'skinUrl' => $this->showSkin($builder->realname),
                'isLogged' => $builder->isLogged,
            ];
        });

        $youtubersWithDetails = $this->addRealNames($youtubers)->map(function ($youtuber) {
            return [
                'username' => $youtuber->username,
                'primary_group' => $youtuber->primary_group,
                'realname' => $youtuber->realname,
                'skinUrl' => $this->showSkin($youtuber->realname),
                'isLogged' => $youtuber->isLogged,
            ];
        });

        return Inertia::render('Team/Team', [
            'owners' => $ownersWithDetails,
            'developers' => $developersWithDetails,
            'helpers' => $helpersWithDetails,
            'builders' => $buildersWithDetails,
            'youtubers' => $youtubersWithDetails,
        ]);
    }

    private function addRealNames($players) {
        return $players->map(function ($player) {
            $authMe = AuthMe::where('username', $player->username)->first();
            $player->realname = $authMe ? $authMe->realname : 'Unknown';
            $player->isLogged = $authMe ? $authMe->isLogged : 0;
            return $player;
        });
    }

    private function showSkin($username)
    {
        // Získajte Mojang UUID na základe používateľského mena
        $mojangUUID = $this->getMojangUUID($username);

        // Ak má Mojang UUID, vráťte URL pre skin podľa UUID
        if ($mojangUUID) {
            return "https://visage.surgeplay.com/bust/256/$mojangUUID.png";
        }

        // Predvolený skin pre hráčov bez UUID
        return "https://visage.surgeplay.com/bust/256/X-Steve";
    }


    private function getMojangUUID($username)
    {
        // Mojang API URL
        $url = "https://api.mojang.com/users/profiles/minecraft/$username";

        // Inicializujeme CURL pre volanie API
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Uložíme odpoveď z Mojang API
        $response = curl_exec($ch);

        // Zatvoríme CURL spojenie
        curl_close($ch);

        // Skontrolujeme, či odpoveď nie je prázdna
        if ($response) {
            // Odpoveď dekódujeme do JSON formátu
            $data = json_decode($response, true);
            return $data['id'] ?? null; // Vrátime UUID alebo null, ak neexistuje
        }

        return null;
    }





}
