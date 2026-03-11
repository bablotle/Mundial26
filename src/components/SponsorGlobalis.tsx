'use client';
import { ChevronRight } from 'lucide-react';

export default function SponsorGlobal() {
    // Imagina que esta es la URL de la imagen rectangular del sponsor
    // Para la demo, usaré un placeholder rectangular (aspecto 3:1)
    const logoRectangular = "https://www.ueno.com.py/wp-content/uploads/2024/08/Banner-ueno-mobile.png?w=640";

    return (
        <div className="mx-4 mt-8 mb-4 animate-in fade-in-50 duration-700">
            {/* 1. EL CONTENEDOR PRINCIPAL (Negro, muy redondeado, con sombra) */}
            <div className="bg-slate-900 rounded-[3rem] p-2 flex items-center overflow-hidden shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] border border-white/5">

                {/* 2. EL FRAME SEMIREDONDO PARA EL LOGO */}
                {/* Usamos fondo blanco y padding (p-3) para que el logo rectangular "respire" */}
                {/* El 'aspect-[3/1]' asegura que el frame mantenga una proporción rectangular */}
                <div className="bg-white rounded-[2.5rem] p-3 flex items-center justify-center min-w-[120px] h-16 shadow-inner relative overflow-hidden">
                    <img
                        src={logoRectangular}
                        alt="Sponsor Oficial"
                        className="max-h-full max-w-full object-contain" // 'object-contain' es clave para no deformar
                    />

                    {/* Un pequeño brillo decorativo sobre el logo */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent"></div>
                </div>

                {/* 3. MENSAJE DE LA MARCA */}
                <div className="flex-1 px-5 py-2">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] leading-none mb-1.5">
                        Sponsor Global
                    </p>
                    <p className="text-sm font-extrabold text-white leading-tight italic tracking-tight">
                        "La pasión nos une, Mil Goles nos conecta"
                    </p>
                </div>

                {/* 4. ACCIÓN CTA (Chevron) */}
                <button className="pr-6 text-white opacity-40 hover:opacity-100 hover:text-blue-400 transition-all hover:translate-x-1 active:scale-95">
                    <ChevronRight size={24} strokeWidth={3} />
                </button>
            </div>
        </div>
    );
}