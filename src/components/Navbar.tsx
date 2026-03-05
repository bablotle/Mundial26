'use client';
import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { name: 'Inicio', href: '/' },
        { name: 'Partidos', href: '/partidos' },
        { name: 'Noticias', href: '/noticias' },
        { name: 'Grupos', href: '/grupos' },
        { name: 'Estadísticas', href: '/estadisticas' },
        { name: 'Sedes', href: '/sedes' },
        { name: 'Selecciones', href: '/selecciones' },
        { name: 'Mi Selección', href: '/mi-seleccion' },
    ];


    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 h-16">
            <div className="w-full h-full px-5 flex items-center justify-between max-w-4xl mx-auto">


                {/* LOGO */}
                <Link href="/" className="font-black text-xl uppercase italic tracking-tighter text-black">
                    MIL <span className="text-blue-600">GOLES</span>
                </Link>


                <div className="flex items-center gap-4">
                    {/* MI SELECCIÓN (Recuperado) */}
                    <Link href="/mi-seleccion" className="flex flex-col items-center justify-center group">
                        <div className="w-6 h-4 relative shadow-sm overflow-hidden rounded-[2px]">
                            {/* Aquí iría la bandera dinámica, ponemos Argentina o la que quieras por defecto */}
                            <img src="/images/banderas/paraguay.png" alt="Mi Selección" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[7px] font-black text-blue-600 uppercase tracking-widest mt-0.5 group-hover:underline">
                            albirroja
                        </span>
                    </Link>


                    {/* MENU HAMBURGUESA */}
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 flex flex-col gap-1.5 items-end justify-center w-8">
                        <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-4 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>
            </div>


            {/* MENÚ DESPLEGABLE */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 h-screen bg-white/95 backdrop-blur-xl p-8 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-300">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-black uppercase italic tracking-tighter text-black hover:text-blue-600 transition-colors border-b border-gray-100 pb-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
