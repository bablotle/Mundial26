'use client';
import Navbar from '@/components/Navbar';
import { todasLasSelecciones } from '@/data/selecciones';
import { ChartNoAxesColumnIncreasing, MessageCircleIcon } from 'lucide-react';


export default function EstadisticasPage() {
    // Datos simulados para la estructura
    const goleadores = [
        { nombre: "Kylian Mbappé", goles: 8, equipo: "Francia", foto: "/images/jugadores/mbappe.jpg" },
        { nombre: "Lionel Messi", goles: 7, equipo: "Argentina", foto: "/images/jugadores/messi.jpg" },
        { nombre: "Julian Alvarez", goles: 4, equipo: "Argentina", foto: "/images/jugadores/julian-alvarez.jpg" },
        { nombre: "Olivier Giroud", goles: 4, equipo: "Francia", foto: "/images/jugadores/olivier-giroud.jpg" },
    ];


    // 2. Buscamos la data base (Paraguay)
    const seleccionBase = todasLasSelecciones.find(s => s.id === 'paraguay');


    // 3. Creamos el objeto final "seleccion"
    const seleccion = {
        ...seleccionBase,
        noticias: [
            {
                id: '1',
                titulo: "El último baile",
                desc: `7 leyendas que jugarán su último Mundial, una generación de futbolistas que le han dado una nueva definición al futbol actual.
                                                                                                                                      • Son Heung-min de Corea del Sur
                                                                                                                                                     • Luka Modric - Croacia
                                                                                                                                                                    • Cristiano Ronaldo - Portugal
                                                                                                                                                                                   • Lionel Messi - Argentina
                                                                                                                                                                                                  • Neymar Jr - Brasil
                                                                                                                                                                                                                 • Mohamed Salah - Egipto
                                                                                                                                                                                                                                • Kevin de Bruyne - Bélgica`,
                img: "/images/noticias/jugadores.jpg",
            }
        ]
    }


    return (
        <main className="min-h-screen bg-[#f0f2f5] pt-24 pb-12 px-5">
            <Navbar />


            <div className="max-w-4xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none">
                        Estadísticas <br /> <span className="text-blue-600">En Tiempo Real</span>
                    </h1>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-4">
                        Datos oficiales Qatar 2022
                    </p>
                </header>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    {/* TABLA DE GOLEADORES */}
                    <section className="island-card p-6">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            Bota de Oro
                        </h2>
                        <div className="space-y-4">
                            {goleadores.map((jugador, index) => (
                                <div key={jugador.nombre} className="flex items-center justify-between border-b border-gray-50 pb-3 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-black italic text-blue-600">#{index + 1}</span>
                                        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-100">
                                            <img src={jugador.foto} alt={jugador.nombre} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase italic">{jugador.nombre}</p>
                                            <p className="text-[8px] font-bold text-gray-400 uppercase">{jugador.equipo}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-black text-black leading-none">{jugador.goles}</p>
                                        <p className="text-[8px] font-black text-gray-400 uppercase">Goles</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* ESTADÍSTICAS GENERALES DEL TORNEO */}
                    <section className="grid grid-cols-2 gap-4">
                        <div className="island-card p-5 flex flex-col items-center justify-center text-center">
                            <p className="text-3xl font-black text-blue-600 italic">64</p>
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Partidos Jugados</p>
                        </div>
                        <div className="island-card p-5 flex flex-col items-center justify-center text-center">
                            <p className="text-3xl font-black text-black italic">172</p>
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Goles Totales</p>
                        </div>
                        <div className="island-card p-5 flex flex-col items-center justify-center text-center">
                            <p className="text-3xl font-black text-black italic">3.23</p>
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Amarillas p/p</p>
                        </div>
                        <div className="island-card p-5 flex flex-col items-center justify-center text-center bg-blue-600">
                            <p className="text-3xl font-black text-red italic">1</p>
                            <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mt-1">Rojas Directas</p>
                        </div>
                    </section>


                    {/* POSESIÓN MEDIA (PREVIEW) */}
                    <section className="island-card p-6 md:col-span-2">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Posesión por Confederación</h2>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-[10px] font-black uppercase">UEFA</span>
                                    <span className="text-[10px] font-black">54%</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-600 h-full w-[54%] transition-all"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-[10px] font-black uppercase">CONMEBOL</span>
                                    <span className="text-[10px] font-black">51%</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-black h-full w-[51%] transition-all"></div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* --- SECCIÓN DE NOTICIAS (NUEVO DISEÑO HORIZONTAL) --- */}
                    <section className="space-y-8 mb-16">
                        <h4 className="text-[9px] font-black text-gray-400 uppercase italic tracking-widest ml-2">
                            Última Actualidad
                        </h4>


                        {seleccion.noticias.map((nota) => (
                            <div key={nota.id} className="bg-white rounded-[2rem] overflow-hidden shadow-md border border-gray-100">
                                {/* Imagen Superior Horizontal con Margen (0.5cm aprox = p-4) */}
                                <div className="p-4 pb-0">
                                    <div className="relative w-full h-26 md:h-64 rounded-[1.5rem] overflow-hidden shadow-inner bg-gray-100">
                                        <img
                                            src={nota.img}
                                            className="w-full h-full object-cover"
                                            alt={nota.titulo}
                                        />
                                    </div>
                                </div>


                                {/* Contenido de la Noticia abajo */}
                                <div className="p-8">
                                    <div className="inline-block bg-blue-50 text-blue-600 text-[9px] font-black uppercase px-3 py-1 rounded-full mb-4 tracking-tighter">
                                        Novedades Albirroja
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-tight mb-4 text-black tracking-tighter">
                                        {nota.titulo}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed italic whitespace-pre-line">
                                        {nota.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </section>




                </div>
            </div>

        </main>
    );
}