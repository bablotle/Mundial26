'use client';

export default function SponsorBanner() {
    return (
        <div className="my-12 group cursor-pointer">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-900 to-blue-700 p-[1px]">
                <div className="bg-black rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-black/80 transition-colors">

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2">
                            Official Partner
                        </span>
                        <h4 className="text-2xl font-black uppercase italic tracking-tighter text-white leading-none">
                            Tu Marca <br /> <span className="text-blue-600">Aquí</span>
                        </h4>
                    </div>

                    {/* Espacio para el Logo del Cliente */}
                    <div className="w-32 h-16 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                        <p className="text-[8px] font-black uppercase text-gray-600 tracking-widest">Logo Sponsor</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-[10px] text-gray-400 font-medium max-w-[150px] text-center md:text-right mb-4">
                            Llega a millones de hinchas durante el Mundial.
                        </p>
                        <button className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
                            Saber más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
