'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SponsorBanner from '@/components/SponsorBanner';
import { todosLosPartidos } from '@/data/partidos';

export default function PartidosPage() {
    const [faseActiva, setFaseActiva] = useState('Dieciseisavos');
    const fases = ['Grupos', 'Dieciseisavos', 'Octavos', 'Cuartos', 'Semis', 'Final'];

    // 1. Filtrar partidos por fase
    const partidosFiltrados = todosLosPartidos.filter(partido => partido.fase === faseActiva);

    // 2. Función para obtener el nombre del día
    const getDiaSemana = (fechaStr: string) => {
        if (!fechaStr || fechaStr.trim() === "") return "";
        try {
            const fecha = new Date(fechaStr + "T12:00:00");
            if (isNaN(fecha.getTime())) return "";
            const diaNombre = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(fecha);
            return diaNombre.charAt(0).toUpperCase() + diaNombre.slice(1);
        } catch (error) {
            return "";
        }
    };

    // 3. AGRUPAMIENTO Y ORDENACIÓN
    const grupos = partidosFiltrados.reduce((acc: any, partido) => {
        const fecha = partido.fecha;
        if (!acc[fecha]) acc[fecha] = [];
        acc[fecha].push(partido);
        return acc;
    }, {});

    const fechasOrdenadas = Object.keys(grupos).sort();

    const formatearFechaVista = (fechaStr: string) => {
        const [year, mes, dia] = fechaStr.split('-');
        return `${dia}/${mes}`;
    };

    return (
        <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-12">
                <div className="max-w-4xl mx-auto px-5">

                    <header className="mb-10 text-center">
                        <h1 className="text-5xl font-black uppercase italic tracking-tighter text-black mb-2">
                            Calendario <span className="text-blue-600">2026</span>
                        </h1>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                            Agenda oficial por jornadas
                        </p>
                    </header>

                    {/* FILTROS */}
                    <div className="flex overflow-x-auto gap-2 pb-6 no-scrollbar mb-8 justify-start md:justify-center">
                        {fases.map((fase) => (
                            <button
                                key={fase}
                                onClick={() => setFaseActiva(fase)}
                                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${faseActiva === fase
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-400 hover:text-black shadow-sm'
                                    }`}
                            >
                                {fase}
                            </button>
                        ))}
                    </div>

                    {/* LISTADO CRONOLÓGICO */}
                    <div className="space-y-12">
                        {fechasOrdenadas.length > 0 ? (
                            fechasOrdenadas.map((fecha, index) => (
                                <div key={fecha}>

                                    {index === 1 && <SponsorBanner />}

                                    {/* CABECERA DE DÍA */}
                                    <div className="flex flex-col items-center mb-6">
                                        <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.5em] mb-1">
                                            {getDiaSemana(fecha)}
                                        </span>
                                        <div className="flex items-center gap-4 w-full">
                                            <div className="h-[1px] flex-grow bg-gray-300"></div>
                                            <h3 className="text-xl font-black italic text-black uppercase tracking-tighter px-4">
                                                {formatearFechaVista(fecha)}
                                            </h3>
                                            <div className="h-[1px] flex-grow bg-gray-300"></div>
                                        </div>
                                    </div>

                                    {/* PARTIDOS */}
                                    <div className="space-y-3">
                                        {grupos[fecha].map((p: any) => {
                                            // Evaluamos si el partido ya cuenta con resultado cargado
                                            const tieneResultado = p.golesLocal !== undefined && p.golesVisitante !== undefined;

                                            // Estilos dinámicos para resaltar al equipo ganador
                                            const ganoLocal = tieneResultado && p.golesLocal > p.golesVisitante;
                                            const ganoVisitante = tieneResultado && p.golesVisitante > p.golesLocal;

                                            return (
                                                <div key={p.id} className="p-5 bg-white flex items-center justify-between group hover:border-blue-500 transition-all rounded-2xl shadow-sm border border-transparent">

                                                    {/* Equipo Local */}
                                                    <div className="flex items-center gap-3 flex-1">
                                                        <img src={p.banderaLocal} className="w-9 h-6 object-cover rounded shadow-sm" alt={p.local} />
                                                        <span className={`text-xs md:text-sm uppercase italic tracking-tighter ${tieneResultado ? (ganoLocal ? 'font-black text-black' : 'font-medium text-gray-400') : 'font-black text-gray-900'
                                                            }`}>
                                                            {p.local}
                                                        </span>
                                                    </div>

                                                    {/* Info Central Inteligente (Marcador o Hora) */}
                                                    <div className="px-2 text-center min-w-[110px] border-x border-gray-100 flex flex-col justify-center items-center">
                                                        {tieneResultado ? (
                                                            /* DISEÑO SI YA JUGARON */
                                                            <div className="flex flex-col items-center">
                                                                <div className="flex items-center gap-1">
                                                                    {/* Marcador Principal */}
                                                                    <div className="text-lg font-black bg-slate-100 text-slate-900 px-3 py-0.5 rounded-lg tabular-nums tracking-tight">
                                                                        {p.golesLocal} <span className="text-blue-600 font-bold">-</span> {p.golesVisitante}
                                                                    </div>
                                                                </div>

                                                                {/* 🌟 SI HUBO TANDA DE PENALES, SE MUESTRAN AQUÍ ABAJO */}
                                                                {p.penalesLocal !== undefined && p.penalesVisitante !== undefined ? (
                                                                    <div className="text-[7px] font-black tracking-widest text-emerald-600 uppercase mt-1 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                                                                        Pen: {p.penalesLocal}-{p.penalesVisitante}
                                                                    </div>
                                                                ) : (
                                                                    <span className="text-[7px] font-black tracking-widest text-gray-400 uppercase mt-1">Finalizado</span>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            /* DISEÑO SI NO JUGARON */
                                                            <>
                                                                <p className="text-sm font-black text-black tabular-nums">{p.hora}</p>
                                                                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter mt-0.5 whitespace-nowrap overflow-hidden max-w-[90px]">{p.sede}</p>
                                                            </>
                                                        )}
                                                    </div>



                                                    {/* Equipo Visitante */}
                                                    <div className="flex items-center gap-3 flex-1 justify-end">
                                                        <span className={`text-xs md:text-sm uppercase italic tracking-tighter text-right ${tieneResultado ? (ganoVisitante ? 'font-black text-black' : 'font-medium text-gray-400') : 'font-black text-gray-900'
                                                            }`}>
                                                            {p.visitante}
                                                        </span>
                                                        <img src={p.banderaVisitante} className="w-9 h-6 object-cover rounded shadow-sm" alt={p.visitante} />
                                                    </div>

                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-20 text-center bg-white rounded-[2rem] border border-gray-100 italic font-black uppercase text-gray-400 text-xs">
                                No hay partidos registrados para {faseActiva}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}