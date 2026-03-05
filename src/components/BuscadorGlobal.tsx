'use client';
import { useState } from 'react';
import Link from 'next/link';


// Datos para la búsqueda (puedes expandir esto)
const datosBusqueda = [
    { id: '1', nombre: 'Argentina', tipo: 'Selección', link: '/mi-seleccion', bandera: '/images/banderas/argentina.png' },
    { id: '2', nombre: 'Lionel Messi', tipo: 'Jugador', link: '/mi-seleccion', bandera: '/images/jugadores/messi.jpg' },
    { id: '3', nombre: 'México', tipo: 'Selección', link: '/selecciones', bandera: '/images/banderas/mexico.png' },
    { id: '4', nombre: 'Estadio Azteca', tipo: 'Sede', link: '/sedes', bandera: '/images/sedes/azteca.jpg' },
];


export default function BuscadorGlobal() {
    const [query, setQuery] = useState('');
    const [resultados, setResultados] = useState<any[]>([]);


    const handleSearch = (e: string) => {
        setQuery(e);
        if (e.length > 1) {
            const filtrados = datosBusqueda.filter(item =>
                item.nombre.toLowerCase().includes(e.toLowerCase())
            );
            setResultados(filtrados);
        } else {
            setResultados([]);
        }
    };


    return (
        <div className="relative w-full max-w-4xl mx-auto mt-8 z-40">
            {/* Input de Búsqueda */}
            <div className="island-card flex items-center px-4 py-3 border-2 border-transparent focus-within:border-blue-500 transition-all shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="BUSCAR SELECCIONES, JUGADORES O SEDES..."
                    className="ml-3 w-full bg-transparent outline-none text-[10px] font-black uppercase tracking-widest text-black placeholder:text-gray-300"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>


            {/* Resultados Desplegables */}
            {resultados.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2">
                    {resultados.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            onClick={() => setQuery('')}
                            className="flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-5 rounded overflow-hidden bg-gray-100">
                                    <img src={item.bandera} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black uppercase italic text-black">{item.nombre}</p>
                                    <p className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{item.tipo}</p>
                                </div>
                            </div>
                            <span className="text-blue-600 text-[10px] font-black uppercase italic">Ver →</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
