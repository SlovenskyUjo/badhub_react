import React, { useEffect, useState } from 'react';
import Navbar from '@/Components/HomePage/Navbar';
import {Head} from "@inertiajs/react";
import Loader from "@/Components/Loader";
import Footer from "@/Components/Footer";

interface TeamProps {
    uuid: string;
    skinUrl: string;
    realname: string;
    isLogged: number;
    description: string;
    primary_group: string;
}

interface Roles {
    owners: TeamProps[];
    developers: TeamProps[];
    helpers: TeamProps[];
    builders: TeamProps[];
    youtubers: TeamProps[];
}

const Team: React.FC<Roles> = ({
   owners = [],
   developers = [],
   helpers = [],
   builders = [],
   youtubers = [],
}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const capitalize = (str: string) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const gradientStyle = {
        background: '-webkit-linear-gradient(0, rgba(50,222,27,.6588235294), rgba(117,255,83,.6666666667))',
        textShadow: '3px 3px rgba(0,0,0,.3137254902)',
    };

    const boxStyle = {
        boxShadow: '0 0 25px #000000b4',
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Head title="Tým" />
            <Navbar />

            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur">
                    <Loader />
                </div>
            )}

            <div className="relative w-full h-[32vh] overflow-hidden">
                {/* Background Image */}
                <img src="/storage/background.png" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center py-8">
                    <div className="relative mx-auto top-9">
                        <span className="prevent-select absolute inset-0 flex justify-center items-center text-gray-100 text-5xl font-bold uppercase z-[2] fade-in-text">
                            Tým
                        </span>
                        <h2 className="prevent-select text-[52px] font-bold text-gray-700 opacity-50 uppercase relative z-[1] -translate-y-4">
                            Tým
                        </h2>
                    </div>
                </div>
            </div>

            {/* Project Leadership */}
            <section className="flex-1 bg-black text-white py-8">
                <div className="max-w-5xl mx-auto px-4 mb-[4rem]">
                    <h1 className="text-[25px] font-[700] mb-6 text-center rounded-xl py-1 uppercase"
                        style={gradientStyle}>
                        Vedení Projektu
                    </h1>
                    <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
                        {owners.map((owner) => (
                            <div key={owner.uuid}
                                 className="flex flex-col md:flex-row items-center bg-[#0d0d13] rounded-lg p-4 max-w-xs w-full"
                                 style={boxStyle}>
                                <img src={owner.skinUrl} alt="" className="w-[80px] mb-4 md:mb-0"/>
                                <div className="flex flex-col items-center text-center md:items-center mx-auto">
                                    <p className="font-semibold text-white text-[18px] mb-[7px] flex items-center justify-center">
                                        {owner.realname}
                                        <span
                                            className={`w-3 relative top-[0.5px] h-3 rounded-full ml-2 ${owner.isLogged === 1 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    </p>
                                    <p className="text-base font-[600] mx-auto text-white text-center rounded-[5px] shadow-[2px_2px_rgba(0,0,0,.3137254902)]"
                                       style={{
                                           background: '-webkit-linear-gradient(0deg, rgb(255, 0, 0) 0%, rgb(255, 80, 80) 100%)',
                                           textShadow: '2px 2px rgba(0,0,0,.3137254902)',
                                           padding: '2px 20px 2.5px',
                                       }}>
                                        Majitel
                                    </p>
                                    <p className="text-gray-400 tracking-wider text-xs italic mt-2 text-center">
                                        „{owner.description}“
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Developer Team */}
                <div className="max-w-5xl mx-auto px-4 mb-[4rem]">
                    <h1 className="text-[25px] font-[700] mb-6 text-center rounded-xl py-1 uppercase fade-in"
                        style={gradientStyle}>
                        Developer Team
                    </h1>
                    <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
                        {developers.map((developer) => (
                            <div key={developer.uuid}
                                 className="flex flex-col md:flex-row items-center bg-[#0d0d13] rounded-lg p-4 max-w-xs w-full"
                                 style={boxStyle}>
                                <img src={developer.skinUrl} alt="" className="w-[80px] mb-4 md:mb-0"/>
                                <div className="flex flex-col items-center text-center md:items-center mx-auto">
                                    <p className="font-semibold text-white text-[18px] mb-[7px] flex items-center justify-center">
                                        {developer.realname}
                                        <span
                                            className={`w-3 relative top-[0.5px] h-3 rounded-full ml-2 ${developer.isLogged === 1 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    </p>
                                    <p className="text-base font-[600] mx-auto text-white text-center rounded-[5px] shadow-[2px_2px_rgba(0,0,0,.3137254902)]"
                                       style={{
                                           background: '-webkit-linear-gradient(0deg, rgb(251, 128, 0) 0%, rgb(255, 77, 29) 100%)',
                                           textShadow: 'rgba(0, 0, 0, 0.314) 2px 2px',
                                           padding: '2px 20px 2.5px'
                                       }}>
                                        {capitalize(developer.primary_group)}
                                    </p>
                                    <p className="text-gray-400 tracking-wider text-xs italic mt-2 text-center">
                                        „{developer.description}“
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="max-w-5xl mx-auto px-4 mb-[4rem]">
                    <h1 className="text-[25px] font-[700] mb-6 text-center rounded-xl py-1 uppercase fade-in"
                        style={gradientStyle}>
                        Helper Team
                    </h1>
                    <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
                        {helpers.map((helper) => (
                            <div key={helper.uuid}
                                 className="flex flex-col md:flex-row items-center bg-[#0d0d13] rounded-lg p-4 max-w-xs w-full"
                                 style={boxStyle}>
                                <img src={helper.skinUrl} alt="" className="w-[80px] mb-4 md:mb-0"/>
                                <div className="flex flex-col items-center text-center md:items-center mx-auto">
                                    <p className="font-semibold text-white text-[18px] mb-[7px] flex items-center justify-center">
                                        {helper.realname}
                                        <span
                                            className={`w-3 relative top-[0.5px] h-3 rounded-full ml-2 ${helper.isLogged === 1 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    </p>
                                    <p className="text-base font-[600] mx-auto text-white text-center rounded-[5px] shadow-[2px_2px_rgba(0,0,0,.3137254902)]"
                                       style={{
                                           background: '-webkit-linear-gradient(0deg, rgb(0, 110, 255) 0%, rgb(3, 192, 211) 100%)',
                                           textShadow: 'rgba(0, 0, 0, 0.314) 2px 2px',
                                           padding: '2px 20px 2.5px'
                                       }}>
                                        {capitalize(helper.primary_group)}
                                    </p>
                                    <p className="text-gray-400 tracking-wider text-xs italic mt-2 text-center">
                                        {helper.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 mb-[4rem]">
                    <h1 className="text-[25px] font-[700] mb-6 text-center rounded-xl py-1 uppercase fade-in"
                        style={gradientStyle}>
                        Builder Team
                    </h1>
                    <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
                        {builders.map((builder) => (
                            <div key={builder.uuid}
                                 className="flex flex-col md:flex-row items-center bg-[#0d0d13] rounded-lg p-4 max-w-xs w-full"
                                 style={boxStyle}>
                                <img src={builder.skinUrl} alt="" className="w-[80px] mb-4 md:mb-0"/>
                                <div className="flex flex-col items-center text-center md:items-center mx-auto">
                                    <p className="font-semibold text-white text-[18px] mb-[7px] flex items-center justify-center">
                                        {builder.realname}
                                        <span
                                            className={`w-3 relative top-[0.5px] h-3 rounded-full ml-2 ${builder.isLogged === 1 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    </p>
                                    <p className="text-base font-[600] mx-auto text-white text-center rounded-[5px] shadow-[2px_2px_rgba(0,0,0,.3137254902)]"
                                       style={{
                                           background: '-webkit-linear-gradient(0deg, rgb(0, 109, 21) 0%, rgb(0, 190, 48) 100%)',
                                           textShadow: '2px 2px rgba(0,0,0,.3137254902)',
                                           padding: '2px 20px 2.5px'
                                       }}>
                                        {capitalize(builder.primary_group)}
                                    </p>
                                    <p className="text-gray-400 tracking-wider text-xs italic mt-2 text-center">
                                        {builder.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 mb-[4rem]">
                    <h1 className="text-[25px] font-[700] mb-6 text-center rounded-xl py-1 uppercase fade-in"
                        style={gradientStyle}>
                        Youtuber Team
                    </h1>
                    <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
                        {youtubers.map((youtuber) => (
                            <div key={youtuber.uuid}
                                 className="flex flex-col md:flex-row items-center bg-[#0d0d13] rounded-lg p-4 max-w-xs w-full"
                                 style={boxStyle}>
                                <img src={youtuber.skinUrl} alt="" className="w-[80px] mb-4 md:mb-0"/>
                                <div className="flex flex-col items-center text-center md:items-center mx-auto">
                                    <p className="font-semibold text-white text-[18px] mb-[7px] flex items-center justify-center">
                                        {youtuber.realname}
                                        <span
                                            className={`w-3 relative top-[0.5px] h-3 rounded-full ml-2 ${youtuber.isLogged === 1 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    </p>
                                    <p className="text-base font-[600] mx-auto text-white text-center rounded-[5px] shadow-[2px_2px_rgba(0,0,0,.3137254902)]"
                                       style={{
                                           background: '-webkit-linear-gradient(0deg, rgb(218, 0, 0) 0%, rgb(253, 253, 253) 100%)',
                                           textShadow: '2px 2px rgba(0,0,0,.3137254902)',
                                           padding: '2px 20px 2.5px'
                                       }}>
                                        YouTuber
                                    </p>
                                    <p className="text-gray-400 tracking-wider text-xs italic mt-2 text-center">
                                        {youtuber.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Team;
