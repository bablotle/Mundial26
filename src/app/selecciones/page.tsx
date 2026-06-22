'use client';
import { useState } from 'react';
// 1. IMPORTAMOS LA DATA REAL
import { todasLasSelecciones } from '@/data/selecciones';
import { todosLosPartidos } from '@/data/partidos'; // Importamos los partidos

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

    // 🌟 REVISADO Y CORREGIDO: Mapeo sin errores de nombres
    const filtradasConStats = filtradas.map(seleccion => {
        let g = 0, e = 0, p = 0;

        // Filtramos y aseguramos que solo cuenten los que YA tienen goles asignados
        const partidosConcluidos = todosLosPartidos.filter(partido => {
            const esSuPartido = partido.local.toLowerCase() === seleccion.nombre.toLowerCase() || 
                                partido.visitante.toLowerCase() === seleccion.nombre.toLowerCase();
            const tieneGoles = partido.golesLocal !== undefined && partido.golesLocal !== null &&
                               partido.golesVisitante !== undefined && partido.golesVisitante !== null;
            return esSuPartido && tieneGoles;
        });

        // Procesamos los resultados de los partidos concluidos
        partidosConcluidos.forEach(partido => {
            const esLocal = partido.local.toLowerCase() === seleccion.nombre.toLowerCase();
            const golesPropios = Number(esLocal ? partido.golesLocal : partido.golesVisitante);
            const golesRivales = Number(esLocal ? partido.golesVisitante : partido.golesLocal);

            if (golesPropios > golesRivales) g++;
            else if (golesPropios < golesRivales) p++;
            else e++;
        });

        const total = g + e + p;

        return {
            ...seleccion,
            stats: {
                g: total > 0 ? g.toString() : "-",
                e: total > 0 ? e.toString() : "-",
                p: total > 0 ? p.toString() : "-",
                total: total > 0 ? total.toString() : "-"
            }
        };
    });
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

                {/* Grid de Tarjeta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* 🌟 CAMBIO AQUÍ: Mapeamos la lista con stats dinámicos */}
                    {filtradasConStats.map((s) => (
                        <CardSeleccion key={s.id} {...s} />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
