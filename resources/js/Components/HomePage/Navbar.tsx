import React, { useState, useEffect } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Helper function to determine the active class
    const getActiveClass = (path: string) => {
        return currentPath === path
            ? 'text-[#32de1b] bg-[rgba(50,222,27,.2470588235)] px-2 py-2 rounded-lg'
            : 'hover:bg-[rgba(50,222,27,.2470588235)] transition duration-200 ease-in-out px-2 py-2 rounded-lg';
    };

    return (
        <nav className="px-6 py-4 fixed top-0 left-0 w-full z-50 bg-black">
            <div className="flex justify-between items-center">
                <div className="flex items-center z-20">
                    <div className="rounded-full w-12 h-12 text-2xl flex items-center justify-center">
                        <InertiaLink href="/">
                            <img src="/storage/logo.png" alt="Logo" className="w-10 h-10" />
                        </InertiaLink>
                    </div>
                </div>

                <div className="hidden md:flex flex-1 justify-center z-20">
                    <ul className="flex gap-8 text-xl text-white font-semibold transition duration-200 max-w-screen-lg mx-auto">
                        <li>
                            <InertiaLink
                                href="/"
                                className={`${getActiveClass('/')}`}
                            >
                                Domů
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink
                                href="/team"
                                className={`${getActiveClass('/team')}`}
                            >
                                Tým
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink
                                href="/pravidla"
                                className={`${getActiveClass('/pravidla')}`}
                            >
                                Pravidla
                            </InertiaLink>
                        </li>
                        <li>
                            <a
                                href="https://vip.vagonbrei.eu/link/LAkWETe4mc"
                                target="_blank"
                                className="items-center px-2 py-2 text-lg text-white uppercase font-bold leading-6 bg-[#2baf1d] hover:bg-[#32e81a] transition duration-200 ease-in-out rounded-lg"
                                style={{ textShadow: '2px 2px black' }}
                            >
                                Obchod
                            </a>
                        </li>
                        <li>
                            <InertiaLink
                                href="/mapa"
                                className={`${getActiveClass('/mapa')}`}
                            >
                                Mapa
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink
                                href="/hlasovani"
                                className={`${getActiveClass('/hlasovani')}`}
                            >
                                Hlasování
                            </InertiaLink>
                        </li>
                        <li>
                            <a
                                href="https://wiki.badhub.cz/"
                                target="_blank"
                                className="items-center px-2 py-2 text-lg text-white font-bold leading-6 hover:text-white hover:bg-[rgba(50,222,27,.2470588235)] transition duration-200 ease-in-out rounded-lg"
                                style={{ textShadow: '2px 2px black' }}
                            >
                                Wiki
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex md:hidden z-30">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 bg-black z-20 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="text-2xl text-white font-semibold space-y-4 z-30 relative flex flex-col items-center"
                        >
                            {['/', '/team', '/pravidla'].map((path, index) => (
                                <motion.li
                                    key={path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <InertiaLink
                                        href={path}
                                        className={`inline-flex ${getActiveClass(path)}`}
                                        onClick={toggleMenu}
                                    >
                                        {path === '/' ? 'Domů' :
                                            path === '/team' ? 'Tým' :
                                                path === '/pravidla' ? 'Pravidla' : ''}
                                    </InertiaLink>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <a
                                    href="https://vip.vagonbrei.eu/link/LAkWETe4mc"
                                    className="inline-flex items-center px-2 py-2 text-lg text-white uppercase font-bold leading-6 bg-[#2baf1d] hover:bg-[#32e81a] transition duration-200 ease-in-out rounded-lg"
                                    style={{ textShadow: '2px 2px black' }}
                                    onClick={toggleMenu}
                                >
                                    Obchod
                                </a>
                            </motion.li>
                            {['/mapa', '/hlasovani'].map((path, index) => (
                                <motion.li
                                    key={path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: (index + 4) * 0.2 }}
                                >
                                    <InertiaLink
                                        href={path}
                                        className={`inline-flex ${getActiveClass(path)}`}
                                        onClick={toggleMenu}
                                    >
                                        {path === '/mapa' ? 'Mapa' :
                                            path === '/hlasovani' ? 'Hlasování' : ''}
                                    </InertiaLink>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                            >
                                <a
                                    href="https://wiki.badhub.cz/"
                                    target="_blank"
                                    className="inline-flex items-center px-2 py-2 text-[24px] text-white font-semibold leading-6 hover:text-white hover:bg-[rgba(50,222,27,.2470588235)] transition duration-200 ease-in-out rounded-lg"
                                    style={{ textShadow: '2px 2px black' }}
                                    onClick={toggleMenu}
                                >
                                    Wiki
                                </a>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>


        </nav>
    );
};

export default Navbar;
