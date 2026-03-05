'use client';
import Navbar from '@/components/Navbar';
import { Plane, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const AGENCIAS = [
    {
        id: 1,
        nombre: "Mundial Travels PY",
        slug: "Agencia Destacada",
        imagen: "/images/noticias/agencia1.jpg", // Asegúrate de tener estas imágenes
        descripcion: "Paquetes completos con vuelos, hospedaje y traslados a las sedes de USA y México.",
        beneficios: ["Entradas Garantizadas", "Guía en Español", "Traslados Privados"],
        link: "#"
    },
    // Puedes duplicar este objeto para las 5 o 6 agencias
];

export default function ViajesPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                {/* Header Estilo Revista */}
                <div className="mb-20 text-center md:text-left">
                    <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                        Exclusive Travel Partners
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
                        VIAJA AL <br /> <span className="text-blue-600">MUNDIAL</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl text-sm uppercase font-bold tracking-widest leading-relaxed">
                        Selección exclusiva de agencias con paquetes cerrados para la Copa del Mundo 2026.
                    </p>
                </div>

                {/* Grid de Agencias */}
                <div className="grid grid-cols-1 gap-12">
                    {AGENCIAS.map((agencia) => (
                        <div key={agencia.id} className="group relative bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                            <div className="flex flex-col md:flex-row">

                                {/* Imagen/Banner de la Agencia */}
                                <div className="relative w-full md:w-[450px] h-[300px] overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <Image
                                        src={agencia.imagen}
                                        alt={agencia.nombre}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />
                                </div>

                                {/* Contenido */}
                                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-blue-500 font-black text-[9px] uppercase tracking-widest">{agencia.slug}</span>
                                            <h3 className="text-3xl font-black uppercase italic tracking-tighter mt-1">{agencia.nombre}</h3>
                                        </div>
                                        <Plane className="text-white/20" size={32} />
                                    </div>

                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
                                        {agencia.descripcion}
                                    </p>

                                    {/* Checklist de beneficios */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                                        {agencia.beneficios.map((b, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 size={14} className="text-blue-500" />
                                                <span className="text-[10px] font-bold uppercase tracking-tight text-gray-300">{b}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <a href={agencia.link} className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                                            Ver Paquetes <ExternalLink size={14} />
                                        </a>
                                        <button className="p-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                                            <MapPin size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner para captar nuevas agencias */}
                <div className="mt-32 p-12 bg-blue-600 rounded-[3rem] text-center">
                    <h2 className="text-3xl font-black uppercase italic mb-4">¿Tienes una agencia de viajes?</h2>
                    <p className="text-sm font-bold uppercase tracking-widest mb-8 opacity-80">Únete al directorio exclusivo de World26</p>
                    <a href="/comercial" className="inline-block bg-black text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em]">
                        Publicar mi Agencia
                    </a>
                </div>
            </main>

        </div>
    );
}
