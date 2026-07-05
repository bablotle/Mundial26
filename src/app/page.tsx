import Navbar from '@/components/Navbar';
import BreakingNews from '@/components/BreakingNews';
import AdBanner from '@/components/ads/AdBanner';
import CardSeleccion from '@/components/CardSeleccion';
import TablaGrupos from '@/components/TablaGrupo';
import Image from 'next/image';
import Link from 'next/link';
import { todosLosPartidos } from '@/data/partidos';
import { todasLasSelecciones } from '@/data/selecciones';
import { todasLasNoticias } from '@/data/noticias';
import CardResultadoMini from '@/components/CardResultadoMini';

export default function Home() {
   // 1. Datos de Sedes
   const todasLasSedes = [
      { id: '1', nombre: 'Estadio Azteca', ciudad: 'CDMX', pais: 'MÉXICO', capacidad: '87,523', temp: '24°C', imagen: '/images/sedes/azteca.jpg' },
      { id: '2', nombre: 'MetLife Stadium', ciudad: 'New York', pais: 'USA', capacidad: '82,500', temp: '19°C', imagen: '/images/sedes/metlife.jpg' },
      { id: '3', nombre: 'BC Place', ciudad: 'Vancouver', pais: 'CANADÁ', capacidad: '54,500', temp: '16°C', imagen: '/images/sedes/vancouver.jpg' },
   ];

   // 2. Lógica de filtrado de Fechas
   const hoyObj = new Date();
   const anoHoy = hoyObj.getFullYear();
   const mesHoy = hoyObj.getMonth() + 1;
   const diaHoy = hoyObj.getDate();

   // Formateamos la fecha de hoy para machear con el string de la data (ej: "2026-06-16")
   const mesFormateado = mesHoy < 10 ? `0${mesHoy}` : mesHoy;
   const diaFormateado = diaHoy < 10 ? `0${diaHoy}` : diaHoy;
   const fechaHoyString = `${anoHoy}-${mesFormateado}-${diaFormateado}`;

   // A. PARTIDOS PARA EL MAP DE HOY
   const partidosDeHoy = todosLosPartidos.filter(p => p.fecha === fechaHoyString);

   // B. EL PARTIDO DESTACADO (El primero de la lista de hoy, o uno por defecto si no hay partidos hoy)
   // const partidoDestacado = partidosDeHoy[0] || todosLosPartidos[0];

   // B. EL PARTIDO DESTACADO (Fijado por ID, y si no existe, usa el de hoy o el primero)
   const partidoDestacado = todosLosPartidos.find(p => p.id === "R16-04") // <-- Aquí pones el ID del partido que quieras
      || partidosDeHoy[0]
      || todosLosPartidos[0];

   // C. PRÓXIMOS PARTIDOS (Días siguientes)
   const proximosPartidos = [...todosLosPartidos]
      .filter((p) => {
         const [anoP, mesP, diaP] = p.fecha.split('-').map(Number);
         if (anoP > anoHoy) return true;
         if (anoP < anoHoy) return false;
         if (mesP > mesHoy) return true;
         if (mesP < mesHoy) return false;
         return diaP > diaHoy;
      })
      .sort((a, b) => new Date(a.fecha + 'T12:00:00').getTime() - new Date(b.fecha + 'T12:00:00').getTime())
      .slice(0, 3);

   // D. HISTORIAL DE CONCLUIDOS (CORREGIDO: Muestra siempre los más recientes del torneo)
   const resultadosConcluidos = todosLosPartidos
      .filter(p => p.golesLocal !== undefined && p.golesLocal !== null && p.golesVisitante !== undefined && p.golesVisitante !== null)
      .sort((a, b) => {
         // 1. Comparamos las fechas (Ej: "2026-06-16") de forma descendente
         const fechaA = new Date(a.fecha).getTime();
         const fechaB = new Date(b.fecha).getTime();
         if (fechaB !== fechaA) return fechaB - fechaA;

         // 2. Si son del mismo día, comparamos las horas (Ej: "14:00" vs "19:00")
         return b.hora.localeCompare(a.hora);
      })
      .slice(0, 6); // Te agarra estrictamente los últimos 6 del torneo cronológicamente

   const noticiasDestacadas = todasLasNoticias.slice(0, 2);
   const sedesDestacadas = todasLasSedes.slice(0, 3);

   return (
      <main className="min-h-screen bg-[#f0f2f5] pb-20">
         <Navbar />

         {/* --- SECCIÓN HERO (DINÁMICA BASADA EN EL PARTIDO DESTACADO) --- */}
         <section className="relative h-[420px] w-full overflow-hidden">
            <img src="/images/sedes/azteca.jpg" className="w-full h-full object-cover brightness-[0.6]" alt="Stadium" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-5">
               <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
                  EL PARTIDO DESTACADO DE HOY 🌟
               </span>
               <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-4">
                  {partidoDestacado.local} <span className="text-red-500">vs</span> {partidoDestacado.visitante}
               </h1>
               <p className="text-white/80 font-bold uppercase tracking-widest text-[11px] mb-6">
                  {partidoDestacado.fase || 'Dieciseisavos'} · {partidoDestacado.hora} · {partidoDestacado.sede || 'Sede del Torneo'}
               </p>
               <Link href="/partidos" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-transform hover:scale-105 shadow-lg shadow-red-600/30">
                  Seguir Transmisión del Día
               </Link>
            </div>
         </section>

         <div className="max-w-4xl mx-auto px-5 -mt-12 relative z-10">

            {/* --- BLOQUE: PARTIDOS DE HOY AUTOMATIZADO --- */}
            <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-xl border border-slate-800">
               <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-3">
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-400">
                     📅 Partidos de Hoy — {diaHoy} de {hoyObj.toLocaleString('es-ES', { month: 'long' })}
                  </h3>
                  <span className="bg-emerald-500/10 text-emerald-400 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase border border-emerald-500/20">16avos</span>
               </div>

            <div className="space-y-4">
                  {partidosDeHoy.length > 0 ? (
                     partidosDeHoy.map((partido) => (
                        <div key={partido.id} className="bg-slate-800/50 rounded-2xl p-4 flex flex-col items-center justify-center border border-slate-700/30 gap-3 relative overflow-hidden">
                           
                           {/* Etiqueta superior de la Fase */}
                           <span className="absolute top-2 right-4 text-[7px] font-black uppercase tracking-wider opacity-40">
                              {partido.fase || "Mundial 2026"}
                           </span>

                           {/* Renglón 1: Hora */}
                           <div className="shrink-0 mt-1">
                              <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase block tracking-wider">
                                 {partido.hora}
                              </span>
                           </div>


{/* Renglón 2: Versus con Banderas y Marcador/Penales ⚽ */}
                           <div className="flex items-center justify-between w-full px-4">
                              
                              {/* Local */}
                              <div className="flex items-center gap-2 flex-1">
                                 <img src={partido.banderaLocal} className="w-6 h-4 object-cover rounded-sm" alt={partido.local} />
                                 <span className="font-bold text-xs uppercase truncate">{partido.local}</span>
                              </div>
                              
                              {/* 🌟 AQUÍ VA EL MARCADOR CON PENALES (Reemplaza al VS estático) */}
                              <div className="flex items-center gap-1.5 px-3">
                                 {partido.golesLocal !== undefined && partido.golesLocal !== null ? (
                                    <div className="flex items-center gap-1 text-slate-200">
                                       
                                       {/* Goles Local */}
                                       <span className="text-sm font-black">{partido.golesLocal}</span>
                                       
                                       {/* Penales Local (si existen) */}
                                       {partido.penalesLocal !== undefined && (
                                          <span className="text-[10px] text-emerald-400 font-extrabold">({partido.penalesLocal})</span>
                                       )}
                                       
                                       <span className="text-gray-600 font-bold px-1 text-xs">-</span>
                                       
                                       {/* Penales Visitante (si existen) */}
                                       {partido.penalesVisitante !== undefined && (
                                          <span className="text-[10px] text-emerald-400 font-extrabold">({partido.penalesVisitante})</span>
                                       )}
                                       
                                       {/* Goles Visitante */}
                                       <span className="text-sm font-black">{partido.golesVisitante}</span>
                                       
                                    </div>
                                 ) : (
                                    /* Si el partido no ha empezado, sigue mostrando el VS clásico */
                                    <span className="text-gray-500 font-bold text-xs">VS</span>
                                 )}
                              </div>

                              {/* Visitante */}
                              <div className="flex items-center gap-2 flex-1 justify-end">
                                 <span className="font-bold text-xs uppercase truncate text-right">{partido.visitante}</span>
                                 <img src={partido.banderaVisitante} className="w-6 h-4 object-cover rounded-sm" alt={partido.visitante} />
                              </div>

                           </div>

                           {/* 🌟 AQUÍ VA LA OPCIÓN A (Justo debajo del versus, antes del cierre de la tarjeta) */}
{partido.penalesLocal !== undefined && partido.penalesVisitante !== undefined && (
   <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mt-1 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 text-center animate-pulse">
      🏆 {partido.clasificado || "Ganador"} avanza en penales ({partido.penalesLocal}-{partido.penalesVisitante})
   </div>
)}

                           {/* Renglón 3: Sede / Estadio del partido 🏟️ */}
                           <div className="text-center">
                              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
                                 📍 {partido.sede || "Sede por definir"}
                              </span>
                           </div>

                        </div>
                     ))
                  ) : (
                     <div className="text-center py-6">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-wider">No hay partidos programados para hoy</p>
                     </div>
                  )}
               </div>
            </div> {/* Cierre del bloque azul oscuro */}

            <div className="my-10"><AdBanner /></div>
            <div className="my-10"><BreakingNews /></div>

            {/* --- PRÓXIMOS PARTIDOS (RESTAURADO EXACTAMENTE COMO ESTABA EN PRODUCCIÓN) --- */}
            <section className="mt-12 text-slate-900">
               <div className="flex justify-between items-end mb-4 px-2">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Próximos Días</h2>
                  <Link href="/partidos" className="text-[9px] font-black uppercase text-blue-600 hover:underline">Ver Calendario Completo →</Link>
               </div>
               <div className="space-y-3">
                  {proximosPartidos.map((p) => {
                     const [anoStr, mesStr, diaStr] = p.fecha.split('-');
                     const meses = [
                        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                     ];
                     const fechaFormateada = `${parseInt(diaStr)} de ${meses[parseInt(mesStr) - 1]}`;

                     return (
                        <div key={p.id} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 group hover:border-blue-100 transition-colors">

                           {/* Local */}
                           <div className="flex items-center gap-3 flex-1">
                              <img src={p.banderaLocal} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt={p.local} />
                              <span className="font-black text-[11px] uppercase italic text-gray-900">{p.local}</span>
                           </div>

                           {/* Bloque Central de Hora y Fecha */}
                           <div className="px-4 text-center border-x border-gray-50 min-w-[95px]">
                              <p className="text-[8px] font-black text-blue-600 uppercase mb-0.5 tracking-wider">{p.hora}</p>
                              <p className="text-[7px] font-bold text-gray-400 uppercase whitespace-nowrap">{fechaFormateada}</p>
                           </div>

                           {/* Visitante */}
                           <div className="flex items-center gap-3 flex-1 justify-end">
                              <span className="font-black text-[11px] uppercase italic text-right text-gray-900">{p.visitante}</span>
                              <img src={p.banderaVisitante} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt={p.visitante} />
                           </div>

                        </div>
                     );
                  })}

                  {proximosPartidos.length === 0 && (
                     <div className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">
                           No hay más partidos programados para los próximos días
                        </p>
                     </div>
                  )}
               </div>
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
                     { id: "estados_unidos", nombre: "Estados Unidos", pj: 3, dg: +7, pts: 6, bandera: "/images/banderas/usa.png" },
                     { id: "australia", nombre: "Australia", pj: 3, dg: 0, pts: 4, bandera: "/images/banderas/australia.png" },
                     { id: "paraguay", nombre: "Paraguay", pj: 3, dg: -2, pts: 4, bandera: "/images/banderas/paraguay.png" },
                     { id: "turquia", nombre: "Turquía", pj: 3, dg: -2, pts: 3, bandera: "/images/banderas/turquia.png" },
                  ]} />
                  <TablaGrupos nombre="Grupo A" equipos={[
                     { id: "mexico", nombre: "México", pj: 3, dg: +6, pts: 9, bandera: "/images/banderas/mexico.png" },
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