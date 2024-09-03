import {Head} from "@inertiajs/react";
import Navbar from "@/Components/HomePage/Navbar";
import Image from "@/Components/HomePage/Image";

import { CgMaximizeAlt } from "react-icons/cg";
import {useEffect, useState} from "react";
import Loader from "@/Components/Loader";
import Footer from "@/Components/Footer";

const Map = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Head title="Mapa" />
            <Navbar />

            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur">
                    <Loader/>
                </div>
            )}

            <div className="relative w-full h-[32vh] overflow-hidden">
                <Image/>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center py-8">
                    <div className="relative mx-auto top-9">
                        <span
                            className="prevent-select absolute inset-0 flex justify-center items-center text-gray-100 text-5xl font-bold uppercase z-[2] fade-in-text">
                            Mapa
                        </span>
                        <h2 className="prevent-select text-[52px] font-bold text-gray-700 opacity-50 uppercase relative z-[1] -translate-y-4">
                            Mapa
                        </h2>
                    </div>
                </div>
            </div>

            <section className="flex-1 bg-black text-white py-8">
                <article
                    className="bg-[#08080C] max-w-7xl rounded-lg h-[50rem] mx-auto px-[2rem] py-4 pt-[5rem] w-full relative">
                    <div className="absolute top-4 right-4">
                        <button className="bg-[#32de1b] text-white px-6 py-4 rounded-lg flex items-center">
                            <a href="https://mapa.badhub.cz/" className="flex items-center text-xl" target="_blank">
                                <CgMaximizeAlt/>
                            </a>
                        </button>
                    </div>
                    <iframe src="https://mapa.badhub.cz/" frameBorder={0} className="w-full h-full"></iframe>
                </article>
            </section>
            <Footer />
        </div>
    )
}

export default Map;
