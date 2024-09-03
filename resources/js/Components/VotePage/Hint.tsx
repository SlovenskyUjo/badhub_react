export default function Hint() {
    return (
        <main>
            <div className="bg-[#0d0d13] flex flex-col md:flex-row items-center max-w-full md:max-w-6xl mx-auto rounded-lg py-4 px-4 md:px-6">
                <img src="/storage/votekey.png" alt="" className="w-20 md:w-16 lg:w-20 xl:w-[55px] rotate-[25deg] mb-4 md:mb-0 md:mr-4" />
            <span className="text-xs md:text-base lg:text-lg xl:text-xl text-center md:text-left">
                Hlasováním pro náš server získáš
                <strong className="ml-1">Hlasovací Klíč</strong>, díky kterému můžeš získat spoustu zajímavých věcí!
            </span>
            </div>
        </main>
    )
}
