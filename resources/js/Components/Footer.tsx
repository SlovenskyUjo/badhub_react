import {
    FaDiscord,
    FaInstagram,
    FaTiktok
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-3 px-6 flex items-center justify-between w-full">
            <p className="md:text-[17px] text-xs md:ml-[3rem] break-words m-0 text-white">&copy; BadHub.cz &bull; 2024 |
                Vytvoril <a href="https://www.adrianondik.pro/" className="text-[#32de1b] hover:underline"
                            target="_blank">SlovenskyUjo</a> zo ❤️</p>

            <div className="flex space-x-4">
                <a href="https://discord.com/invite/9vhUGpzrwt" target="_blank"
                   className="text-gray-400 hover:text-gray-300">
                    <FaDiscord />
                </a>
                <a href="https://www.instagram.com/badhub.cz" target="_blank"
                   className="text-gray-400 hover:text-gray-300">
                    <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@mc.badhub.cz" target="_blank"
                   className="text-gray-400 hover:text-gray-300">
                    <FaTiktok />
                </a>
            </div>
        </footer>
    )
}
