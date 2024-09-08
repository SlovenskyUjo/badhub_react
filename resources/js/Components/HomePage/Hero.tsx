import BannerImage from "@/Components/HomePage/BannerImage";
import Navbar from "@/Components/HomePage/Navbar";
import HeroContent from "@/Components/HomePage/HeroContent";
import {useEffect, useState} from "react";
import Loader from "@/Components/Loader";

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur">
                    <Loader />
                </div>
            )}
            <Navbar/>
            <BannerImage/>
            <HeroContent/>
        </div>
    )
}

export default Hero;
