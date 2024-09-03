import Navbar from "@/Components/HomePage/Navbar";
import {Head} from "@inertiajs/react";
import Image from "@/Components/HomePage/Image";
import Hint from "@/Components/VotePage/Hint";
import VoteModal from "@/Components/VotePage/VoteModal";
import {useEffect, useState} from "react";
import Loader from "@/Components/Loader";
import Footer from "@/Components/Footer";



const Vote = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Head title="Hlasovani"/>
            <Navbar/>

            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur">
                    <Loader />
                </div>
            )}

            <div className="relative w-full h-[32vh] overflow-hidden">
                <Image/>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center py-8">
                    <div className="relative mx-auto top-9">
                        <span
                            className="prevent-select absolute inset-0 flex justify-center items-center text-gray-100 text-5xl font-bold uppercase z-[2] fade-in-text">
                            Hlasování
                        </span>
                        <h2 className="prevent-select text-[52px] font-bold text-gray-700 opacity-50 uppercase relative z-[1] -translate-y-4">
                            Hlasování
                        </h2>
                    </div>
                </div>
            </div>

            <section className="flex-1 bg-black text-white py-4 md:py-8 px-4 md:px-8">
                <div className="mb-4 md:mb-5">
                    <Hint />
                </div>
                <VoteModal />
            </section>
            <Footer />
        </div>
    )
}

export default Vote;
