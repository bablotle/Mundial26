'use client';
import { useState } from 'react';
// 1. IMPORTAMOS LA DATA REAL (La fuente de verdad)
import { todasLasSelecciones } from '@/data/selecciones';


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CardSeleccion from '@/components/CardSeleccion';


export default function SeleccionesPage() {
    const [filtro, setFiltro] = useState('Todas');
    const confs = ['Todas', 'UEFA', 'CONMEBOL', 'CONCACAF', 'CAF', 'AFC'];


    // 2. USAMOS LA DATA IMPORTADA PARA FILTRAR
    const filtradas = filtro === 'Todas'
        ? todasLasSelecciones
        : todasLasSelecciones.filter(s => s.confederacion === filtro);


    return (
        <main className="min-h-screen bg-[#f0f2f5] pt-24 pb-12 px-5">
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-8">
                    Selecciones <span className="text-blue-600">Clasificadas</span>
                </h1>


                {/* Botones de Filtro */}
                <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar">
                    {confs.map(c => (
                        <button
                            key={c}
                            onClick={() => setFiltro(c)}
                            className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ${filtro === c ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-400 hover:text-black'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>


                {/* Grid de Tarjetas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filtradas.map((s) => (
                        // 3. PASAMOS LOS DATOS A LA CARD
                        // Ahora s.id será 'argentina', 'alemania', etc.,
                        // porque vienen de tu archivo central.
                        <CardSeleccion key={s.id} {...s} />
                    ))}
                </div>
            </div>
        </main>
    );
}
