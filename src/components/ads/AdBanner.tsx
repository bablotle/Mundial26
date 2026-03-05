'use client';
import { useState, useEffect } from 'react';


// 1. Definimos la interfaz para que acepte "tipo" y otras props antiguas
// así no da error si lo usas como <AdBanner tipo="light" />
interface AdProps {
    tipo?: 'light' | 'dark';
    mensaje?: string;
    tamano?: 'sm' | 'md' | 'lg';
}


const CAMPAÑAS = [
    {
        id: 1,
        marca: "Adidas",
        mensaje: "Prepárate para la gloria - Botines F50",
        color: "from-gray-900 to-black",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
    },
    {
        id: 2,
        marca: "Coca-Cola",
        mensaje: "La magia de creer - Sentí el Mundial",
        color: "from-red-600 to-red-800",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
    },
    {
        id: 3,
        marca: "Visa",
        mensaje: "Pagos oficiales del torneo - Sin contacto",
        color: "from-blue-700 to-blue-900",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_2014_logo_detail.svg"
    }
];


// 2. Recibimos las props en la función (aunque el rotador ignora 'tipo' para mantener su diseño propio)
export default function AdBanner({ tipo, mensaje, tamano }: AdProps) {
    const [indice, setIndice] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndice((prev) => (prev + 1) % CAMPAÑAS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    const ad = CAMPAÑAS[indice];


    return (
        <div className={`relative w-full h-24 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 bg-gradient-to-r ${ad.color}`}>


            {/* Etiqueta de Publicidad */}
            <span className="absolute top-2 right-3 text-[7px] font-black uppercase tracking-[0.2em] text-white/40 z-20">
                Official Sponsor
            </span>


            {/* Contenido del Anuncio */}
            <div key={ad.id} className="relative h-full flex items-center justify-between px-8 animate-in fade-in slide-in-from-right-4 duration-500">


                <div className="flex flex-col">
                    <p className="text-[8px] font-black text-white/60 uppercase tracking-widest mb-1">
                        {ad.marca}
                    </p>
                    <h4 className="text-xs md:text-sm font-black text-white uppercase italic tracking-tighter max-w-[180px] leading-tight">
                        {ad.mensaje}
                    </h4>
                </div>


                {/* Logo */}
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl p-2">
                    <img
                        src={ad.logo}
                        alt={ad.marca}
                        className="w-full h-full object-contain brightness-0 invert"
                    />
                </div>
            </div>


            {/* Barra de progreso */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
                <div
                    key={ad.id}
                    className="h-full bg-white/60 transition-all duration-[5000ms] linear"
                    style={{ width: '100%' }}
                />
            </div>


        </div>
    );
}
