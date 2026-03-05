// src/app/selecciones/[id]/page.tsx
import { todasLasSelecciones, type Seleccion } from '@/data/selecciones';
// Suponiendo que tienes un archivo de fixture con los partidos
import { todosLosPartidos } from '@/data/partidos';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function SeleccionPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const seleccion = (todasLasSelecciones as Seleccion[]).find((s) => s.id === id);

    if (!seleccion) return notFound();

    // Filtramos comparando el nombre de la selección con el local o visitante del partido
    const partidosSeleccion = todosLosPartidos.filter(p =>
        p.local.toLowerCase() === seleccion.nombre.toLowerCase() ||
        p.visitante.toLowerCase() === seleccion.nombre.toLowerCase()
    );

    return (
        <main className="min-h-screen bg-[#f8f9fa] pt-20 pb-12 px-4">
            <div className="max-w-4xl mx-auto space-y-10">

                {/* --- FRAME 1: CABECERA TIPO FICHA --- */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="relative w-20 h-14 rounded-xl overflow-hidden shadow-sm border border-gray-50">
                            <Image src={seleccion.bandera} alt={seleccion.nombre} fill className="object-cover" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black uppercase italic text-blue-900 leading-none">{seleccion.nombre}</h1>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Ranking FIFA: #{seleccion.ranking}</p>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {[...Array(seleccion.estrellas)].map((_, i) => (
                            <span key={i} className="text-yellow-500 text-xl">⭐</span>
                        ))}
                    </div>
                </div>

                {/* --- FRAME 2: BANNER HORIZONTAL UNIFICADO --- */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100">
                    <div className="relative w-full h-20 md:h-60 bg-blue-950">
                        <Image
                            src="/images/noticias/fifa.jpg"
                            alt="FIFA World Cup 2026 Banner"
                            fill
                            className="object-cover object-center opacity-90 transition-transform duration-700 hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
                        <div className="absolute top-4 right-6">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-[8px] font-black uppercase tracking-widest text-white">Official Data</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <p className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">Director Técnico</p>
                                <p className="text-xl font-black text-blue-900 italic">{seleccion.dt}</p>
                            </div>

                            <div className="flex-[2] border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8">
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Jugadores</p>
                                <div className="text-sm text-gray-600 leading-relaxed font-medium italic whitespace-pre-line">
                                    {seleccion.plantilla.split(/(\*.*?\*)/g).map((part, i) =>
                                        part.startsWith('*') && part.endsWith('*') ? (
                                            <strong key={i} className="font-black text-blue-900 not-italic block mt-3 first:mt-0">
                                                {part.replaceAll('*', '')}
                                            </strong>
                                        ) : (
                                            <span key={i}>{part}</span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- FRAME 3: DATA (Debut, Títulos y Stats) --- */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl p-4 border border-gray-100">
                            <p className="text-[9px] font-black text-blue-600 uppercase tracking-tighter">Debut Mundialista</p>
                            <p className="text-xl font-black text-gray-800 italic">{seleccion.debut}</p>
                        </div>
                        <div className="bg-white rounded-2xl p-4 border border-gray-100">
                            <p className="text-[9px] font-black text-blue-600 uppercase tracking-tighter">Palmarés</p>
                            <p className="text-xl font-black text-gray-800 italic">{seleccion.titulos}</p>
                        </div>
                    </div>

                    <div className="bg-blue-400 rounded-3xl p-6 text-white shadow-xl">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-80">Performance Histórica</h2>
                        <div className="grid grid-cols-4 gap-3">
                            <div className="text-center bg-green-400 py-3 rounded-xl"><p className="text-xl font-black">{seleccion.stats.total}</p><p className="text-[8px] uppercase opacity-60">PJ</p></div>
                            <div className="text-center bg-green-400 py-3 rounded-xl"><p className="text-xl font-black">{seleccion.stats.g}</p><p className="text-[8px] uppercase text-green-300">G</p></div>
                            <div className="text-center bg-green-400 py-3 rounded-xl"><p className="text-xl font-black">{seleccion.stats.e}</p><p className="text-[8px] uppercase opacity-60">E</p></div>
                            <div className="text-center bg-green-400 py-3 rounded-xl"><p className="text-xl font-black">{seleccion.stats.p}</p><p className="text-[8px] uppercase text-black-300">P</p></div>
                        </div>
                    </div>
                </div>

                {/* --- FRAME: CALENDARIO DE PARTIDOS --- */}
                <div className="space-y-4">
                    <h2 className="text-xl font-black uppercase italic text-gray-800 ml-2 tracking-tighter">Próximos Partidos</h2>
                    <div className="grid grid-cols-1 gap-3">
                        {partidosSeleccion.map((partido, index) => (
                            <div key={index} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between">

                                {/* Fecha y Hora (Usando tus campos: fecha y hora) */}
                                <div className="flex flex-col border-r border-gray-100 pr-4 min-w-[90px]">
                                    <span className="text-[10px] font-black text-blue-600 uppercase">
                                        {new Date(partido.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }).replace('.', '')}
                                    </span>
                                    <span className="text-xs font-bold text-gray-400">{partido.hora} HS</span>
                                </div>

                                {/* Enfrentamiento (Usando tus banderas de imagen) */}
                                <div className="flex-1 flex items-center justify-center gap-4 px-2 text-center">
                                    <div className="flex flex-col items-center flex-1">
                                        <div className="relative w-8 h-5 mb-1 shadow-sm rounded-sm overflow-hidden border border-gray-100">
                                            <Image src={partido.banderaLocal} alt={partido.local} fill className="object-cover" />
                                        </div>
                                        <span className="text-[9px] font-black uppercase italic truncate max-w-[70px] md:max-w-none">{partido.local}</span>
                                    </div>

                                    <span className="text-[10px] font-black text-gray-300 italic">VS</span>

                                    <div className="flex flex-col items-center flex-1">
                                        <div className="relative w-8 h-5 mb-1 shadow-sm rounded-sm overflow-hidden border border-gray-100">
                                            <Image src={partido.banderaVisitante} alt={partido.visitante} fill className="object-cover" />
                                        </div>
                                        <span className="text-[9px] font-black uppercase italic truncate max-w-[70px] md:max-w-none">{partido.visitante}</span>
                                    </div>
                                </div>

                                {/* Sede (Usando tu campo: sede) */}
                                <div className="hidden sm:flex flex-col items-end border-l border-gray-100 pl-4 min-w-[100px]">
                                    <span className="text-[8px] font-black text-gray-400 uppercase">Sede</span>
                                    <span className="text-[10px] font-bold text-gray-800">{partido.sede}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* --- FRAME 4: NOTICIA EDITORIAL --- */}
                <div className="space-y-6">
                    <h2 className="text-xl font-black uppercase italic text-gray-800 ml-2 tracking-tighter">Actualidad de la Selección</h2>
                    {seleccion.noticias.length > 0 ? (
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
                            <h3 className="text-3xl font-black text-blue-900 leading-tight mb-8 uppercase italic">{seleccion.noticias[0].titulo}</h3>
                            <div className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line font-medium">
                                {seleccion.noticias[0].desc.split(/(\*.*?\*)/g).map((part, i) => (
                                    part.startsWith('*') && part.endsWith('*') ? (
                                        <strong key={i} className="font-black text-gray-900 not-italic">{part.replaceAll('*', '')}</strong>
                                    ) : (
                                        <span key={i}>{part}</span>
                                    )
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] text-center">
                            <p className="text-gray-400 italic text-sm font-bold uppercase tracking-widest">No hay comunicados recientes</p>
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}
