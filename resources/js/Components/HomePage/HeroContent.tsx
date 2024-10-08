import { motion } from 'framer-motion';
import Logo from '../../../../storage/app/public/logo.png';
import { useEffect, useState } from "react";
import { IoConstruct, IoGameControllerOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import Swal from "sweetalert2";
import '../../../css/app.css';
import axios from "axios";

const HeroContent = () => {
    const [presenceCount, setPresenceCount] = useState(null);
    const [players, setPlayers] = useState(null);
    const ipAddress = 'mc.badhub.cz';

    useEffect(() => {
        const fetchInviteData = async () => {
            try {
                const response = await fetch('/invite-data/');
                const data = await response.json();

                setPresenceCount(data.approximate_presence_count);
            } catch (error) {
                console.error("Failed to fetch invite data:", error);
            }
        };

        const fetchData = async () => {
            try {
                const response = await axios.get('/api/players/online');
                setPlayers(response.data.players);
            } catch (error) {
                console.error('Error fetching server info:', error);
            }
        };

        fetchInviteData();
        fetchData();
    }, []);

    const handleCopyIP = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(ipAddress)
                .then(() => {
                    Swal.fire({
                        text: 'IP adresa skopírovaná',
                        icon: 'success',
                        toast: true,
                        position: 'top-end',
                        timer: 3000,
                        timerProgressBar: false,
                        background: '#000',  // Black background
                        color: '#fff',        // White text color
                        iconColor: '#32de1b', // Custom red icon color
                        customClass: {
                            popup: 'custom-swal-popup',
                            title: 'custom-swal-title',
                        },
                        showConfirmButton: false,
                    });
                })
                .catch(err => {
                    Swal.fire({
                        text: 'Nepodarilo sa skopírovať IP adresu.',
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
                    console.error('Failed to copy IP address:', err);
                });
        } else {
            // Fallback for browsers that do not support the Clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = ipAddress;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                Swal.fire({
                    text: 'IP Adresa zkopírována!',
                    icon: 'success',
                    toast: true,
                    position: 'top-end',
                    timer: 3000,
                    timerProgressBar: false,
                    background: '#0D0D13',  // Black background
                    color: '#fff',        // White text color
                    iconColor: '#32de1b', // Custom red icon color
                    customClass: {
                        popup: 'custom-swal-popup',
                        title: 'custom-swal-title',
                    },
                    showConfirmButton: false,
                });
            } catch (err) {
                Swal.fire({
                    text: 'Nepodarilo sa skopírovať IP adresu.',
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
                console.error('Failed to copy IP address:', err);
            }
            document.body.removeChild(textArea);
        }
    };

    return (
        <>
            <motion.div
                className="absolute inset-0 flex items-center justify-center p-8 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between mt-10 w-full max-w-6xl">
                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h2
                            className="text-3xl md:text-5xl font-extrabold mb-3"
                            style={{
                                textShadow: '2px 2px black', // Adjusted text shadow
                            }}
                        >
                            Co jsme?
                        </h2>
                        <hr className="border-0 rounded mb-5 mx-auto md:ml-0 w-12 border-b-[1px] border-t-2 border-[#32de1b]" />
                        <p className="text-lg mb-4">
                            Server BadHub.cz byl založen v roce 2023 třemi přáteli za účelem poskytnutí nezapomenutelného zážitku ze hry, který zatím nikde jinde nenajdete. Rádi bychom vám BadHub k něčemu přirovnali, ale zatím neexistuje žádná alternativní forma, kterou by to bylo možné. Pojď se sám přesvědčit a zažít nový pohled na starou hru na
                            <strong> mc.badhub.cz.</strong>
                        </p>

                        <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 mb-4 mt-5">
                            <motion.button
                                onClick={() => handleCopyIP()}
                                className="inline-flex items-center px-5 py-3 bg-[#32de1b] border border-transparent rounded-md font-bold text-sm text-[#125808] uppercase tracking-widest hover:bg-[#32e81a] transition ease-in-out duration-150"
                                style={{
                                    boxShadow: '0 3px #125808',
                                }}
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <IoGameControllerOutline className="text-lg" />
                                <span className="ml-2">Online hráčů: {players}</span>
                            </motion.button>
                            <a href="https://discord.com/invite/9vhUGpzrwt" target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    className="inline-flex items-center px-5 py-3 bg-[#7289da] border border-transparent rounded-md font-bold text-sm text-[#0d1d55] uppercase tracking-widest hover:bg-[#6880d4] transition ease-in-out duration-150"
                                    style={{
                                        boxShadow: '0 3px #0d1d55',
                                    }}
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaDiscord className="text-lg" />
                                    <span className="ml-2">Online členů: {presenceCount}</span>
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        className="mt-8 md:mt-0 md:w-1/2 md:flex hidden justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <img src={Logo} alt="BadHub Logo" className="max-w-xs md:max-w-[30rem] h-auto" />
                    </motion.div>
                </div>
            </motion.div>

            <motion.section
                id="discord"
                className="w-full bg-[#0d0d13] text-white py-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center w-full gap-4">
                        <motion.h1
                            className="text-2xl font-bold sm:text-3xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            Přidejte se k nám na Discordu!
                        </motion.h1>
                        <motion.p
                            className="text-base md:text-lg leading-relaxed mt-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            Spojte se s komunitou a buďte vždy v obraze ohledně novinek, eventů a dalších
                            zajímavostí!
                        </motion.p>
                        <a href="https://discord.com/invite/9vhUGpzrwt" target="_blank"
                           className="inline-flex items-center px-6 py-3 bg-white text-[#7289da] border border-transparent rounded-md font-semibold text-lg uppercase hover:bg-gray-200 transition ease-in-out duration-200"
                        >
                            <FaDiscord className="mr-2" /> Připojit se
                        </a>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default HeroContent;
