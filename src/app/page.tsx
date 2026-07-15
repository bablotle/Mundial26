'use client';
import Navbar from '@/components/Navbar';
import BreakingNews from '@/components/BreakingNews';
import AdBanner from '@/components/ads/AdBanner';
import CardSeleccion from '@/components/CardSeleccion';
import TablaGrupos from '@/components/TablaGrupo';
import Image from 'next/image';
import Link from 'next/link';
import { todosLosPartidos } from '@/data/partidos';
import { todasLasSelecciones } from '@/data/selecciones';
import { todasLasNoticias } from "@/data/todasLasNoticias";
import CardResultadoMini from '@/components/CardResultadoMini';

// Fuerza a la página a revalidar los datos o renderizarse en el servidor en cada petición
export const dynamic = 'force-dynamic';

export default function Home() {
   // 1. Datos de Sedes
   const todasLasSedes = [
      { id: '1', nombre: 'Estadio Azteca', ciudad: 'CDMX', pais: 'MÉXICO', capacidad: '87,523', temp: '24°C', imagen: '/images/sedes/azteca.jpg' },
      { id: '2', nombre: 'MetLife Stadium', ciudad: 'New York', pais: 'USA', capacidad: '82,500', temp: '19°C', imagen: '/images/sedes/metlife.jpg' },
      { id: '3', nombre: 'BC Place', ciudad: 'Vancouver', pais: 'CANADÁ', capacidad: '54,500', temp: '16°C', imagen: '/images/sedes/vancouver.jpg' },
   ];

   // 2. Buscar la Gran Final y el Tercer Puesto
   // Ajusta "F" por el ID exacto que uses para la final en tu data/partidos (ej: "FINAL", "F-01")
   const granFinal = todosLosPartidos.find(p => p.id === "F" || p.fase?.toLowerCase().includes("final")) || todosLosPartidos[0];
   const tercerPuesto = todosLosPartidos.find(p => p.id === "TP");

   const partidosSecundarios = tercerPuesto ? [tercerPuesto] : [];
   const noticiasDestacadas = todasLasNoticias.slice(0, 2);
   const sedesDestacadas = todasLasSedes.slice(0, 3);

   return (
      <main className="min-h-screen bg-[#f0f2f5] pb-20">
         <Navbar />

         {/* --- SECCIÓN HERO: LA GRAN FINAL --- */}
         <section className="relative h-[420px] w-full overflow-hidden">
            <img src="/images/sedes/metlife.jpg" className="w-full h-full object-cover brightness-[0.5]" alt="MetLife Stadium" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-5">
               <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-4 py-1 rounded-full mb-4 tracking-widest uppercase animate-pulse shadow-lg shadow-amber-500/20">
                  🏆 LA GRAN FINAL · DOMINGO 19 DE JULIO 🌟
               </span>
               <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-4">
                  {granFinal.local || "Argentina"} <span className="text-red-500">vs</span> {granFinal.visitante || "España"}
               </h1>
               <p className="text-white/90 font-bold uppercase tracking-widest text-[12px] mb-6">
                  {granFinal.fase || 'Gran Final'} · {granFinal.hora} · {granFinal.sede || 'MetLife Stadium'}
               </p>
               <Link href="/partidos" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-transform hover:scale-105 shadow-lg shadow-amber-500/30">
                  Seguir Transmisión En Vivo
               </Link>
            </div>
         </section>

         <div className="max-w-4xl mx-auto px-5 -mt-12 relative z-10">

            {/* --- BLOQUE PRINCIPAL: DETALLE DE LA FINAL --- */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-[2rem] p-6 text-white shadow-2xl border border-amber-500/20">
               <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-3">
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                     👑 CAMPEONATO DEL MUNDO
                  </h3>
                  <span className="bg-amber-500/10 text-amber-400 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase border border-amber-500/20 tracking-wider">
                     PARTIDO DEFINITORIO
                  </span>
               </div>

               <div className="space-y-4">
                  <div className="bg-slate-800/40 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-700/30 gap-4 relative overflow-hidden">
                     <span className="absolute top-3 right-4 text-[8px] font-black uppercase tracking-widest opacity-30 text-amber-400">
                        MATCH 104
                     </span>

                     <div className="shrink-0">
                        <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-2.5 py-0.5 rounded uppercase block tracking-wider">
                           {granFinal.hora}
                        </span>
                     </div>

                     <div className="flex items-center justify-between w-full px-2 md:px-6">
                        {/* Local */}
                        <div className="flex items-center gap-3 flex-1">
                           <img src={granFinal.banderaLocal || "/images/banderas/argentina.png"} className="w-8 h-5 object-cover rounded shadow-md" alt={granFinal.local} />
                           <span className="font-black text-sm md:text-base uppercase truncate tracking-tight">{granFinal.local || "Argentina"}</span>
                        </div>

                        {/* Marcador / VS */}
                        <div className="flex items-center gap-1.5 px-4">
                           {granFinal.golesLocal !== undefined && granFinal.golesLocal !== null ? (
                              <div className="flex items-center gap-2 text-slate-200">
                                 <span className="text-xl font-black">{granFinal.golesLocal}</span>
                                 {granFinal.penalesLocal !== undefined && (
                                    <span className="text-[11px] text-emerald-400 font-extrabold">({granFinal.penalesLocal})</span>
                                 )}
                                 <span className="text-slate-600 font-bold px-1 text-sm">-</span>
                                 {granFinal.penalesVisitante !== undefined && (
                                    <span className="text-[11px] text-emerald-400 font-extrabold">({granFinal.penalesVisitante})</span>
                                 )}
                                 <span className="text-xl font-black">{granFinal.golesVisitante}</span>
                              </div>
                           ) : (
                              <div className="bg-slate-800 px-3 py-1 rounded-md border border-slate-700">
                                 <span className="text-amber-400 font-black text-xs tracking-widest">VS</span>
                              </div>
                           )}
                        </div>

                        {/* Visitante */}
                        <div className="flex items-center gap-3 flex-1 justify-end">
                           <span className="font-black text-sm md:text-base uppercase truncate text-right tracking-tight">{granFinal.visitante || "España"}</span>
                           <img src={granFinal.banderaVisitante || "/images/banderas/espana.png"} className="w-8 h-5 object-cover rounded shadow-md" alt={granFinal.visitante} />
                        </div>
                     </div>

                     {granFinal.penalesLocal !== undefined && granFinal.penalesVisitante !== undefined && (
                        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mt-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 text-center">
                           🎉 ¡<span className="underline underline-offset-4 decoration-amber-400 text-white">{granFinal.clasificado || granFinal.ganador}</span> CAMPEÓN DEL MUNDO! 🏆
                        </div>
                     )}

                     <div className="text-center mt-1">
                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 block">
                           📍 {granFinal.sede || "MetLife Stadium, New York / New Jersey"}
                        </span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="my-10"><AdBanner /></div>
            <div className="my-10"><BreakingNews /></div>

            {/* --- SECCIÓN INFERIOR: TERCER PUESTO --- */}
            {partidosSecundarios.length > 0 && (
               <section className="mt-12 text-slate-900">
                  <div className="flex justify-between items-end mb-4 px-2">
                     <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Definición Tercer Puesto</h2>
                     <Link href="/partidos" className="text-[9px] font-black uppercase text-blue-600 hover:underline">Calendario Completo →</Link>
                  </div>
                  <div className="space-y-3">
                     {partidosSecundarios.map((p) => (
                        <div key={p.id} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 group hover:border-blue-100 transition-colors">
                           <div className="flex items-center gap-3 flex-1">
                              <img src={p.banderaLocal} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt={p.local} />
                              <span className="font-black text-[11px] uppercase italic text-gray-900">{p.local}</span>
                           </div>

                           <div className="px-4 text-center border-x border-gray-50 min-w-[110px]">
                              {p.golesLocal !== undefined && p.golesLocal !== null ? (
                                 <div className="text-xs font-black bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-center">
                                    {p.golesLocal} - {p.golesVisitante}
                                    {p.penalesLocal !== undefined && (
                                       <span className="block text-[8px] text-emerald-600 font-bold">({p.penalesLocal}-{p.penalesVisitante} P)</span>
                                    )}
                                 </div>
                              ) : (
                                 <>
                                    <p className="text-[8px] font-black text-blue-600 uppercase mb-0.5 tracking-wider">{p.hora || "Podio"}</p>
                                    <p className="text-[7px] font-bold text-gray-400 uppercase whitespace-nowrap truncate max-w-[90px]">{p.sede}</p>
                                 </>
                              )}
                           </div>

                           <div className="flex items-center gap-3 flex-1 justify-end">
                              <span className="font-black text-[11px] uppercase italic text-right text-gray-900">{p.visitante}</span>
                              <img src={p.banderaVisitante} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt={p.visitante} />
                           </div>
                        </div>
                     ))}
                  </div>
               </section>
            )}

            {/* --- ÚLTIMAS NOTICIAS --- */}
            <section className="mt-16">
               <div className="flex items-end justify-between mb-8 px-2">
                  <div>
                     <h2 className="text-4xl font-black uppercase italic text-blue-900 leading-none">Últimas Noticias</h2>
                     <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">Actualidad del fútbol mundial</p>
                  </div>
                  <Link href="/noticias" className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-2">
                     VER TODAS <span>→</span>
                  </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {noticiasDestacadas.map((noticia) => (
                     <Link key={noticia.id} href={`/noticias/${noticia.id}`} className="group bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                        <div className="relative h-64 w-full overflow-hidden">
                           <Image src={noticia.imagen} alt={noticia.titulo} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                           <div className="absolute top-5 left-5 bg-blue-900 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg">
                              {noticia.categoria || "Actualidad"}
                           </div>
                        </div>
                        <div className="p-8">
                           <h3 className="text-2xl font-black text-gray-900 leading-[1.1] group-hover:text-blue-600 transition-colors">{noticia.titulo}</h3>
                           <p className="mt-4 text-gray-500 text-sm leading-relaxed line-clamp-2">{noticia.resumen}</p>
                           <div className="mt-6 flex items-center text-blue-900 font-black text-[10px] uppercase tracking-wider">
                              Leer noticia completa <span className="ml-2 group-hover:translate-x-2 transition-transform inline-block">→</span>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </section>

            {/* --- FASE DE GRUPOS --- */}
            <section className="mt-16">
               <div className="flex justify-between items-end mb-4 px-2">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Fase de Grupos</h2>
                  <Link href="/grupos" className="text-[9px] font-black uppercase text-blue-600">Tablas completas →</Link>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TablaGrupos nombre="Grupo D" equipos={[
                     { id: "estados_unidos", nombre: "Estados Unidos", pj: 3, dg: 7, pts: 6, bandera: "/images/banderas/usa.png" },
                     { id: "australia", nombre: "Australia", pj: 3, dg: 0, pts: 4, bandera: "/images/banderas/australia.png" },
                     { id: "paraguay", nombre: "Paraguay", pj: 3, dg: -2, pts: 4, bandera: "/images/banderas/paraguay.png" },
                     { id: "turquia", nombre: "Turquía", pj: 3, dg: -2, pts: 3, bandera: "/images/banderas/turquia.png" },
                  ]} />
                  <TablaGrupos nombre="Grupo A" equipos={[
                     { id: "mexico", nombre: "México", pj: 3, dg: 6, pts: 9, bandera: "/images/banderas/mexico.png" },
                     { id: "sudafrica", nombre: "Sudáfrica", pj: 3, dg: -1, pts: 4, bandera: "/images/banderas/sudafrica.png" },
                     { id: "corea_sur", nombre: "Corea del Sur", pj: 3, dg: -1, pts: 3, bandera: "/images/banderas/corea-del-sur.png" },
                     { id: "republica-checa", nombre: "República Checa", pj: 3, dg: -4, pts: 1, bandera: "/images/banderas/republica-checa.png" },
                  ]} />
               </div>
            </section>

            {/* --- SELECCIONES CLASIFICADAS --- */}
            <section className="mt-16">
               <div className="flex justify-between items-end mb-6 px-2">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Selecciones</h2>
                  <Link href="/selecciones" className="text-[9px] font-black uppercase text-blue-600">Todas las federaciones →</Link>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {todasLasSelecciones.slice(0, 4).map((s) => (
                     <CardSeleccion key={s.id} {...s} />
                  ))}
               </div>
            </section>

            {/* --- SEDES --- */}
            <section className="mt-16">
               <div className="flex justify-between items-end mb-4 px-2">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Sedes</h2>
                  <Link href="/sedes" className="text-[9px] font-black uppercase text-blue-600">Explorar sedes →</Link>
               </div>
               <div className="grid gap-6">
                  {sedesDestacadas.map((sede) => (
                     <div key={sede.id} className="relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer">
                        <img src={sede.imagen} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={sede.nombre} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-between">
                           <div className="flex justify-between items-start">
                              <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                                 <p className="text-white text-[9px] font-black uppercase tracking-widest">CAP: {sede.capacidad}</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-white text-lg font-black italic leading-none">{sede.temp}</p>
                                 <p className="text-white/60 text-[7px] font-bold uppercase tracking-widest">Despejado</p>
                              </div>
                           </div>
                           <div>
                              <div className="inline-block bg-white px-2 py-0.5 mb-2">
                                 <span className="text-black font-black text-[9px] uppercase tracking-widest">{sede.pais}</span>
                              </div>
                              <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none mb-1">{sede.nombre}</h1>
                              <h2 className="text-blue-400 text-sm font-black uppercase tracking-[0.2em]">{sede.ciudad}</h2>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
            <div className="my-12"><AdBanner /></div>
         </div>
      </main>
   );
}