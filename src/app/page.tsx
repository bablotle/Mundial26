'use client';
import Navbar from '@/components/Navbar';
import BreakingNews from '@/components/BreakingNews';
import Countdown from '@/components/Countdown';
import AdBanner from '@/components/ads/AdBanner';
import CardSeleccion from '@/components/CardSeleccion';
import TablaGrupos from '@/components/TablaGrupo';
import Image from 'next/image'; // Importante para las noticias
import Link from 'next/link';
import MarketingCards from '@/components/MarketingCards';
import { todosLosPartidos } from '@/data/partidos';
import { todasLasSelecciones } from '@/data/selecciones';
import { todasLasNoticias } from '@/data/noticias';
import SponsorGlobal from '@/components/SponsorGlobal';
import SponsorGlobalis from '@/components/SponsorGlobalis';

export default function Home() {
   // 1. Datos de Sedes
   const todasLasSedes = [
      { id: '1', nombre: 'Estadio Azteca', ciudad: 'CDMX', pais: 'MÉXICO', capacidad: '87,523', temp: '24°C', imagen: '/images/sedes/azteca.jpg' },
      { id: '2', nombre: 'MetLife Stadium', ciudad: 'New York', pais: 'USA', capacidad: '82,500', temp: '19°C', imagen: '/images/sedes/metlife.jpg' },
      { id: '3', nombre: 'BC Place', ciudad: 'Vancouver', pais: 'CANADÁ', capacidad: '54,500', temp: '16°C', imagen: '/images/sedes/vancouver.jpg' },
   ];


   // 2. Lógica de filtrado (Todo dentro de Home)
   const noticiasDestacadas = todasLasNoticias.slice(0, 2);


   const proximosPartidos = [...todosLosPartidos]
      .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
      .slice(0, 3);


   const sedesDestacadas = todasLasSedes.slice(0, 3);


   return (
      <main className="min-h-screen bg-[#f0f2f5] pb-20">
         <Navbar />
         
         {/* --- SECCIÓN HERO --- */}
         <section className="relative h-[420px] w-full overflow-hidden">
            <img src="/images/hero.jpg" className="w-full h-full object-cover" alt="Mundial 2026" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center text-center px-5">
               <span className="bg-red-600 text-white text-[8px] font-black px-2 py-0.5 rounded-sm mb-4 animate-pulse tracking-widest">EN DIRECTO</span>
               <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-6">


                  RUMBO A LA <br /> GRAN CITA
               </h1>
               <Link href="/partidos" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-transform hover:scale-105">
                  Ver Calendario Oficial
               </Link>
            </div>
         </section>


         <div className="max-w-4xl mx-auto px-5 -mt-10 relative z-10">
            <Countdown />


            <div className="my-10"><AdBanner /></div>
            <div className="my-10"><BreakingNews /></div>


            {/* --- PRÓXIMOS PARTIDOS --- */}
            <section className="mt-12">
               <div className="flex justify-between items-end mb-4 px-2">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Próximos Partidos</h2>
                  <Link href="/partidos" className="text-[9px] font-black uppercase text-blue-600 hover:underline">Ver más →</Link>
               </div>
               <div className="space-y-3">
                  {proximosPartidos.map((p) => (
                     <div key={p.id} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 flex-1">
                           <img src={p.banderaLocal} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt={p.local} />
                           <span className="font-black text-[11px] uppercase italic">{p.local}</span>
                        </div>
                        <div className="px-4 text-center border-x border-gray-50 min-w-[80px]">
                           <p className="text-[8px] font-black text-blue-600 uppercase mb-0.5">{p.hora}</p>
                           <p className="text-[7px] font-bold text-gray-400 uppercase">{p.fecha}</p>
                        </div>
                        <div className="flex items-center gap-3 flex-1 justify-end">
                           <span className="font-black text-[11px] uppercase italic text-right">{p.visitante}</span>
                           <img src={p.banderaVisitante} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt={p.visitante} />
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            {/* --- ÚLTIMAS NOTICIAS (DISEÑO PREMIUM) --- */}
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
                     { id: "estados_unidos", nombre: "Estados Unidos", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/usa.png" },
                     { id: "paraguay", nombre: "Paraguay", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/paraguay.png" },
                     { id: "australia", nombre: "Australia", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/australia.png" },
                     { id: "tbd", nombre: "Playoff UEFA C", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uefa.png" },
                  ]} />
                   <TablaGrupos nombre="Grupo A" equipos={[
                     { id: "mexico", nombre: "México", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/mexico.png" },
                     { id: "sudafrica", nombre: "Sudáfrica", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/sudafrica.png" },
                     { id: "corea_sur", nombre: "Corea del Sur", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/corea-del-sur.png" },
                     { id: "tbd", nombre: "Playoff UEFA D", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uefa.png" },
                  ]} />
               </div>
            </section>


            {/* --- SEDES (DISEÑO PREMIUM) --- */}
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


            <div className="my-12"><AdBanner /></div>
         </div>
      </main>
   );
}
