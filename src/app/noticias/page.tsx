'use client';
import Navbar from '@/components/Navbar';
import {todasLasNoticias} from '@/data/noticias';
import Link from 'next/link';


const noticias = [
    { id: '1', titulo: "El presidente de la FIFA, Gianni Infantino, pide tarjeta roja a los jugadores que se tapen la boca para hablar", fecha: "1 Marzo 2026", cat: "Sedes", img: "/images/noticias/noticia-1.jpg" },
    { id: '2', titulo: "Incertidumbre por la Finalissima: La FIFA y la UEFA evalúan el futuro del partido", fecha: "1 Marzo 2026", cat: "Logística", img: "/images/noticias/noticia-2.jpg" },
    { id: '3', titulo: "En duda la participacion de la selección de Irán", fecha: "1 Marzo 2026", cat: "Selecciones", img: "/images/noticias/noticia-3.jpg" },
];


export default function NoticiasPage() {
    return (
        <main className="min-h-screen bg-[#f0f2f5] pt-24 pb-12 px-5">
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <header className="mb-10 ml-2">
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter">Últimas <span className="text-blue-600">Noticias</span></h1>
                </header>


                <div className="grid gap-4">
                    {todasLasNoticias.map((nota) => (
                        <Link href={`/noticias/${nota.id}`} key={nota.id} className="island-card p-4 flex gap-4 group hover:border-blue-300 transition-all">
                            <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                <img src={nota.imagen} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-[8px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">{nota.categoria}</span>
                                <h2 className="text-sm md:text-lg font-black uppercase italic leading-tight text-black">{nota.titulo}</h2>
                                <p className="text-[9px] font-bold text-gray-400 mt-2 uppercase">{nota.fecha}</p>
                            </div>l
                        </Link>
                    ))}
                </div>
            </div>

        </main>
    );
} 
