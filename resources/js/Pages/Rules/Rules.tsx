import {Head} from "@inertiajs/react";
import Navbar from "@/Components/HomePage/Navbar";
import '../../../css/app.css';
import Image from "@/Components/HomePage/Image";
import {useEffect, useState} from "react";
import Loader from "@/Components/Loader";
import Footer from "@/Components/Footer";

const Rules = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Head title="Pravidla" />
            <Navbar />

            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur">
                    <Loader />
                </div>
            )}

            <div className="relative w-full h-[32vh] overflow-hidden">
                <Image/>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center py-8">
                    <div className="relative mx-auto top-9">
                        <span className="prevent-select absolute inset-0 flex justify-center items-center text-gray-100 text-5xl font-bold uppercase z-[2]">
                            Pravidla
                        </span>
                        <h2 className="prevent-select text-[52px] font-bold text-gray-700 opacity-50 uppercase relative z-[1] -translate-y-4">
                            Pravidla
                        </h2>
                    </div>
                </div>
            </div>

            <section className="flex-1 bg-black text-white py-8 px-4 sm:px-6 md:px-8">
                <article
                    className="bg-[#0D0D13] h-full max-w-7xl mx-auto py-4 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col rounded-lg">
                    <div
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
                        <img src="/storage/MC.png" alt="Minecraft Rules" className="w-16 sm:w-20 md:w-24"
                             draggable={false}/>
                        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center sm:text-left">
                            Pravidla pro Minecraft server
                        </h1>
                    </div>
                    <main className="px-4 sm:px-6 md:px-8">
                        <ol className="list-decimal list-inside space-y-3 sm:space-y-1 ml-4 sm:ml-6 md:ml-8 mt-4 sm:mt-6">
                            <li>Respektuj ostatní hráče. Něco jako spamování, vulgarismy, vyhrožování, reklamy,
                                nacismus/rasismus, apod. nikam na server netahej.
                            </li>
                            <li>Nevhodné stavby, skiny, nicky nebo pláště k nám na server také nepatří.</li>
                            <li>Nepoužívej modifikované clienty, či módy zvýhodňující tě před ostatními hráči. (Auto
                                Clicker nebo zatížení myši sem také patří!)
                            </li>
                            <li>Negriefuj ostatní, také by ti to nebylo příjemné.</li>
                            <li>Zveřejňování osobních údajů ostatních hráčů je přísně zakázáno.</li>
                            <li>Zneužívání bugů je občas zábava, ale také je to zakázané. Nejlepší bude když nám to
                                nahlásíš, a my se to pokusíme napravit.
                            </li>
                            <li>Obchodování s reálnou měnou není dobrý nápad, tento přestupek bude trestán permanentním
                                banem.
                            </li>
                            <li>Podvody s herní měnou či itemy zvládneme hravě dohledat, tento bod taktéž nedoporučuji
                                praktikovat.
                            </li>
                            <li>Respektovat jak Helper-Team, tak i vedení...to je snad jasné. Vedení má navíc právo
                                udělit trest bez udání důvodu, či kdykoliv pravidla pozměnit k jejich lepšímu pochopení.
                            </li>
                            <li>Zažít na serveru nezapomenutelný zážitek ze hry je povinností!</li>
                        </ol>
                    </main>

                    <div
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mt-12 px-4 sm:px-6 md:px-8">
                        <img src="/storage/DC.png" alt="Minecraft Rules" className="w-16 sm:w-20 md:w-24"
                             draggable={false}/>
                        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center sm:text-left">
                            Pravidla pro Discord server
                        </h1>
                    </div>
                    <main className="px-4 sm:px-6 md:px-8">
                        <ol className="list-decimal list-inside space-y-3 sm:space-y-1 ml-4 sm:ml-6 md:ml-8 mt-4 mb-2">
                            <li>Respektuj všechny členy na serveru!</li>
                            <li>V hlasových i textových kanálech se vyjadřuj slušně!</li>
                            <li>Žádné nenávistné projevy, diskriminace nebo šikana jakéhokoliv druhu.</li>
                            <li>Zákaz spamování, včetně vícenásobného vystavování stejné zprávy.</li>
                            <li>Zákaz posílání odkazů na nelegální/nebezpečné webové stránky nebo služby.</li>
                            <li>Zákaz reklam jakéhokoliv druhu na serveru nebo ve voice chatu s členy.</li>
                            <li>Zákaz vydávání se za člena Admin-Teamu.</li>
                            <li>Zákaz zasílání jakéhokoliv NSFW kontentu či odkazu na obsah NSFW.</li>
                            <li>Zákaz rozesílání interních informací ohledně členů nebo serveru.</li>
                            <li>Zákaz označování členů Admin-Teamu.</li>
                        </ol>
                    </main>
                </article>
            </section>
            <Footer />
        </div>
    )
}

export default Rules;
