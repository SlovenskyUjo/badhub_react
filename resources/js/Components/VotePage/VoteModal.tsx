import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../../../css/app.css';

export default function VoteModal() {
    const [nickname, setNickname] = useState('');

    const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    };

    const showAlert = (message: string) => {
        Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            background: '#000',  // Black background
            color: '#fff',        // White text color
            iconColor: '#ff6b6b', // Custom red icon color
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
            },
            showConfirmButton: false,
        });
    };

    const redirectToCraftList = () => {
        const trimmedNickname = nickname.trim();
        if (trimmedNickname) {
            const url = `https://craftlist.org/badhub?nickname=${encodeURIComponent(trimmedNickname)}`;
            window.open(url, '_blank');
            setNickname('');
        } else {
            showAlert('Zadej svůj nick!');
        }
    };

    const redirectToMinecraftServery = () => {
        const trimmedNickname = nickname.trim();
        if (trimmedNickname) {
            const popupUrl = `https://minecraftservery.eu/server/badhubcz/vote/${encodeURIComponent(trimmedNickname)}`;
            window.open(popupUrl, '_blank')
            setNickname('');
        } else {
            showAlert('Zadej svůj nick!');
        }
    }

    return (
        <main>
            <div
                className="bg-[#0d0d13] py-4 flex flex-col items-center justify-center max-w-full sm:max-w-6xl flex-1 mx-auto rounded-[5px] px-4">
                <h1 className="text-xl sm:text-2xl uppercase font-bold">Hlasování</h1>
                <p className="text-base sm:text-[1.25rem] mt-2">Děkujeme všem, kteří pro nás hlasují a podporují tím náš
                    server.</p>
                <div className="w-full max-w-md mt-4">
                    <input
                        type="text"
                        value={nickname}
                        id="nickname"
                        onChange={handleNicknameChange}
                        placeholder="Zde napiš svůj nickname"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:text-[#495057] focus:outline-none focus:ring-2 focus:ring-[#32de1b] focus:border-transparent transition duration-200"
                    />
                </div>
                <h2 className="mt-5 text-base sm:text-[20px]">Hlasovat můžeš na těchto stránkách!</h2>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4">
                    <button
                        type="button"
                        className="transition-all-custom bg-[#32de1b] secret hover:bg-[#75ff53] py-2 px-4 sm:py-3 sm:px-6 text-white border-0 rounded-lg text-center font-semibold flex items-center justify-center"
                        onClick={redirectToCraftList}
                    >
                        CraftList.org
                    </button>

                    <button
                        type="button"
                        className="transition-all-custom bg-[#32de1b] secret hover:bg-[#75ff53] py-2 px-4 sm:py-3 sm:px-6 text-white border-0 rounded-lg text-center font-semibold flex items-center justify-center"
                        onClick={() => redirectToMinecraftServery()}
                    >
                        MinecraftServery.eu
                    </button>
                </div>
            </div>
        </main>
    );
}
