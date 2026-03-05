'use client';
import { useParams } from 'next/navigation';
import { todasLasSedes } from '@/data/sedes';
import Navbar from '@/components/Navbar';
import Link from 'next/link';


export default function DetalleSede() {
    const { id } = useParams();
    const sede = todasLasSedes.find(s => s.id === id);


    if (!sede) return (
        <div className="min-h-screen flex items-center justify-center font-black italic text-blue-900">
            SEDE NO ENCONTRADA
        </div>
    );


    return (
        <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
            <Navbar />
            <Link href="/sedes" className="text-blue-600 font-bold flex items-center gap-2 mb-6">
                ← Volver a todas las sedes
            </Link>


            <main className="flex-grow">
                {/* HERO IMAGE CON OVERLAY */}
                <div className="relative h-[60vh] w-full overflow-hidden">
                    <img src={sede.imagen} className="w-full h-full object-cover" alt={sede.nombre} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                        <div className="max-w-4xl mx-auto w-full">
                            <Link href="/sedes" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase px-4 py-2 rounded-full mb-6 hover:bg-white/40 transition-all">
                                ← Volver a Sedes
                            </Link>
                            <span className="block text-blue-500 font-black uppercase text-[12px] tracking-[0.4em] mb-2 drop-shadow-md">Sede Oficial 2026</span>
                            <h1 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none drop-shadow-2xl">
                                {sede.nombre}
                            </h1>
                        </div>
                    </div>
                </div>


                <div className="max-w-4xl mx-auto px-5 pb-20 relative z-10 -mt-12">


                    {/* FICHA TÉCNICA (Frames Estilo Coleccionista) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {[
                            { label: 'Capacidad', val: sede.capacidad },
                            { label: 'Ciudad', val: sede.ciudad },
                            { label: 'País', val: sede.pais },
                            { label: 'Apertura', val: sede.inauguracion }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl p-6 shadow-xl shadow-blue-900/5 border border-white flex flex-col items-center text-center">
                                <p className="text-[9px] font-black text-blue-600/50 uppercase mb-2 tracking-widest">{item.label}</p>
                                <p className="text-md font-black italic text-gray-800 uppercase leading-none">{item.val}</p>
                            </div>
                        ))}
                    </div>


                    {/* ROL EN EL MUNDIAL (Banner Destacado) */}
                    <div className="bg-blue-900 rounded-[2.5rem] p-8 md:p-12 text-white mb-10 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-blue-300">Rol en el Mundial</h3>
                            <p className="text-3xl md:text-4xl font-black italic uppercase leading-[0.9] tracking-tighter">
                                {sede.importancia}
                            </p>
                        </div>
                        {/* Decoración sutil de fondo */}
                        <div className="absolute -right-10 -bottom-10 text-[150px] font-black italic opacity-10 pointer-events-none">2026</div>
                    </div>


                    {/* CONTENIDO DETALLADO */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">


                            {/* Reseña Histórica */}
                            <div className="md:col-span-2">
                                <h4 className="text-[11px] font-black uppercase text-blue-600 mb-6 tracking-[0.2em] italic">Reseña Histórica</h4>
                                <p className="text-gray-600 font-medium leading-relaxed text-lg italic whitespace-pre-line">
                                    {sede.historia}
                                </p>
                            </div>


                            {/* Partidos */}
                            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                                <h4 className="text-[11px] font-black uppercase text-gray-400 mb-6 tracking-[0.2em] italic text-center">Calendario Sede</h4>
                                <ul className="space-y-4">
                                    {sede.partidos.map((p, i) => (
                                        <li key={i} className="flex flex-col border-b border-gray-200 pb-3 last:border-0">
                                            <span className="text-[10px] font-black text-blue-600 uppercase">Partido {i + 1}</span>
                                            <span className="text-xs font-black text-gray-800 uppercase italic leading-tight">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
