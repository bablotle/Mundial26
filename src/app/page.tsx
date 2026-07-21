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

export default function Home() {
   // 1. Datos de Sedes
   const todasLasSedes = [
      { id: '1', nombre: 'Estadio Azteca', ciudad: 'CDMX', pais: 'MÉXICO', capacidad: '87,523', temp: '24°C', imagen: '/images/sedes/azteca.jpg' },
      { id: '2', nombre: 'MetLife Stadium', ciudad: 'New York', pais: 'USA', capacidad: '82,500', temp: '19°C', imagen: '/images/sedes/metlife.jpg' },
      { id: '3', nombre: 'BC Place', ciudad: 'Vancouver', pais: 'CANADÁ', capacidad: '54,500', temp: '16°C', imagen: '/images/sedes/vancouver.jpg' },
   ];

   const sedesDestacadas = todasLasSedes.slice(0, 3);
   const noticiasDestacadas = todasLasNoticias.slice(0, 2);

   // 2. Buscamos la data base (Paraguay)
   const seleccionBase = todasLasSelecciones.find(s => s.id === 'paraguay');

   // 3. Creamos el objeto final "seleccion"
   const seleccion = {
        ...seleccionBase,
        noticias: [
            {
                id: '1',
                titulo: "El último baile",
                desc: `Las 7 leyendas que jugarán su último Mundial, una generación de futbolistas que le han dado una nueva definición al futbol actual.
• Son Heung-min - Corea del Sur
• Luka Modric - Croacia
• Cristiano Ronaldo - Portugal
• Lionel Messi - Argentina
• Neymar Jr - Brasil
• Mohamed Salah - Egipto
• Kevin de Bruyne - Bélgica`,
                img: "/images/noticias/jugadores.jpg",
            }
        ]
   };

   return (
      <main className="min-h-screen bg-[#f0f2f5] pb-20">
         <Navbar />
         
         {/* --- SECCIÓN HERO FINAL: ¡ESPAÑA CAMPEÓN DEL MUNDO! 🏆 --- */}
         <section className="relative h-[560px] w-full overflow-hidden">
            {/* Imagen de fondo de la selección con el trofeo */}
            <img 
               src="/images/noticias/espana_campeon.jpg" 
               className="w-full h-full object-cover brightness-[0.6] object-center" 
               alt="España Campeón del Mundo 2026" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-5">
               <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-4 py-1 rounded-full tracking-widest uppercase shadow-lg shadow-amber-500/20">
                  🏆 ¡ESPAÑA CAMPEÓN DEL MUNDO! 👑
               </span>
               
               {/* Margen vertical pronunciado (~4cm en pantalla) para apreciar el fondo */}
               <div className="my-16">
                  <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
                     España <span className="text-amber-400">Campeón</span>
                  </h1>
               </div>

               {/* El resultado definitivo justo abajo del título */}
               <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-4 text-white mb-6">
                  <div className="flex items-center gap-2">
                     <img src="/images/banderas/argentina.png" className="w-5 h-3.5 object-cover rounded-sm" alt="Argentina" />
                     <span className="text-xs font-bold uppercase opacity-80">ARG</span>
                  </div>
                  <span className="text-xl font-black tracking-tight">
                     0 <span className="text-[10px] text-emerald-400 font-bold"></span>
                  </span>
                  <span className="text-white/40 font-bold text-xs">-</span>
                  <span className="text-xl font-black tracking-tight">
                     1 <span className="text-[10px] text-emerald-400 font-bold"></span>
                  </span>
                  <div className="flex items-center gap-2">
                     <span className="text-xs font-bold uppercase opacity-80">ESP</span>
                     <img src="/images/banderas/espana.png" className="w-5 h-3.5 object-cover rounded-sm" alt="España" />
                  </div>
               </div>

               <Link href="/estadisticas" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-transform hover:scale-105 shadow-lg shadow-amber-500/30">
                  Revivir Estadísticas del Torneo
               </Link>
            </div>
         </section>

         <div className="max-w-4xl mx-auto px-5 mt-12 relative z-10">
            
            <div className="my-10"><BreakingNews /></div>

            {/* --- SECCIÓN DE NOTICIAS --- */}
            <section className="space-y-8 mb-16">
               <h4 className="text-[9px] font-black text-gray-400 uppercase italic tracking-widest ml-2">
                  MUNDIAL 2026 
               </h4>

               {seleccion.noticias.map((nota) => (
                  <div key={nota.id} className="bg-white rounded-[2rem] overflow-hidden shadow-md border border-gray-100">
                     <div className="p-4 pb-0">
                        <div className="relative w-full h-48 md:h-64 rounded-[1.5rem] overflow-hidden shadow-inner bg-gray-100">
                           <img
                              src={nota.img}
                              className="w-full h-full object-cover"
                              alt={nota.titulo}
                           />
                        </div>
                     </div>

                     <div className="p-8">
                        <div className="inline-block bg-blue-50 text-blue-600 text-[9px] font-black uppercase px-3 py-1 rounded-full mb-4">
                           Las Estrellas que no vuelven 
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