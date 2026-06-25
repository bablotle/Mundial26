'use client';
import Image from 'next/image';

export default function SponsorBanner() {
    return (
        <div className="my-12 group cursor-pointer">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-900 to-blue-700 p-[1px]">
                <div className="bg-black rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-black/80 transition-colors">

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white mb-2">
                            Somos Mil Goles
                        </span>
                        <h4 className="text-[24px]
                        xl font-black uppercase italic tracking-tighter text-red-700 leading-none">
                            Albirroja <br /> <span className="text-white">Paraguay</span>
                        </h4>
                    </div>

                    {/* --- Espacio para el Logo del Cliente --- */}
                    <div className="w-32 h-16 flex items-center justify-center transition-colors">
                        <div className="relative w-24 h-35"> {/* Controla el tamaño real del logo aquí */}
                            <Image
                                src="/images/noticias/garra-albirroja.jpg" // Ruta de tu imagen en la carpeta public
                                alt="Albirroja"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-[10px] text-gray-400 font-medium max-w-[150px] text-center md:text-right mb-4">
                            Llega a millones de hinchas durante el Mundial.
                        </p>
                        <button className="bg-red-700 text-white text-[9px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
                            Alentá
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
