'use client';
import { useState } from 'react';
import { todasLasSelecciones } from '@/data/selecciones';
import Navbar from '@/components/Navbar';


export default function MiSeleccion() {
   // 1. Estados
   const [likes, setLikes] = useState(14063);
   const [isAnimate, setIsAnimate] = useState(false);


   // 2. Buscamos la data base (Paraguay)
   const seleccionBase = todasLasSelecciones.find(s => s.id === 'paraguay');


   // 3. Creamos el objeto final "seleccion"
   const seleccion = {
      ...seleccionBase,
      noticias: [
         {
            id: '1',
            titulo: "Paraguay mantiene la esperanza",
            desc: "La Selección de Paraguay ha registrado una derrota, una victoria y un empate en sus tres partidos disputados hasta el día de hoy dentro del Grupo D.\n\n\ Resultados en el Mundial 2026\n\n\ Estados Unidos 4 - 1 Paraguay\n\ (12 de junio de 2026) | Primera jornada.\n\n\ Paraguay cayó en su debut en el Estadio de Los Ángeles. El único tanto paraguayo lo convirtió el ingresado Mario tras una asistencia de Miguel Almirón.\n\n\ Turquía 0 - 1 Paraguay\n\ (19 de junio de 2026) | Segunda jornada.\n\n\ La Albirroja logró un triunfo heroico en el Estadio de la Bahía de San Francisco. Matías Galarza marcó el gol de la victoria a los 64 segundos de juego, registrando el gol más rápido del torneo hasta el momento. \n\n\ El equipo sostuvo el resultado con 10 jugadores durante todo el segundo tiempo por la expulsión de Miguel Almirón.\n\n\ Australia 0 - 0 Paraguay\n\ (25 de junio de 2026) | Tercera jornada.\n\n\ Paraguay termino en empate ante el equipo de Australia.\n\n\ Paraguay aún no está clasificado matemáticamente a los dieciseisavos de final del Mundial 2026. Tras empatar sin goles contra Australia, la Albirroja cerró la fase de grupos en la tercera posición del Grupo D con 4 puntos y una diferencia de gol de -2.\n\n\ Aunque el panorama es altamente favorable y el técnico Gustavo Alfaro se muestra optimista, la confirmación oficial está en pausa porque debe esperar los resultados de los grupos restantes para asegurarse un lugar entre los ocho mejores terceros.",
            img: "/images/noticias/paraguay-australia.jpg",
         }
      ]
   };

   // 4. Lógica del botón de aliento (AQUÍ ESTABA EL ERROR)
   const handleAliento = () => {
      setLikes(prev => prev + 1);
      setIsAnimate(true);
      setTimeout(() => setIsAnimate(false), 300);
   };


   // Verificación de seguridad
   if (!seleccionBase) return <div className="pt-24 text-center">Cargando...</div>;


   // 5. El RETURN ahora sí está dentro de la función
   return (
      <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
         <Navbar />


         <main className="flex-grow pt-12">
            {/* HEADER TIPO BANNER */}
            <section className="relative w-full bg-red-700 overflow-hidden shadow-lg">
               <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center relative z-10">
                  <div className="flex gap-1 mb-2">
                     {[...Array(seleccion.estrellas || 0)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                     ))}
                  </div>
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-1 italic">S e l e c c i ó n</p>
                  <h1 className="text-7xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-none mb-2">
                     {seleccion.nombre}
                  </h1>
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Confederación: CONMEBOL</p>
               </div>
               <div className="absolute right-[-20px] bottom-[-20px] opacity-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
            </section>


            <div className="max-w-4xl mx-auto px-5">


               {/* WIDGET DE ALIENTO */}
               <section className="relative z-20 -mt-10 flex justify-center mb-12">
                  <div className="bg-white rounded-[2rem] p-6 border-b-4 border-blue-400 flex flex-col items-center shadow-2xl max-w-xs w-full">
                     <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 italic">Suma tu aliento</p>
                     <div className="relative">
                        <div className={`absolute inset-0 bg-blue-400 rounded-full blur-xl transition-opacity duration-300 ${isAnimate ? 'opacity-100 scale-150' : 'opacity-0 scale-100'}`}></div>
                        <button
                           onClick={handleAliento}
                           className={`relative bg-blue-600 hover:bg-blue-500 active:scale-90 transition-all w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-blue-50 z-10 ${isAnimate ? 'scale-110 rotate-12' : 'scale-100'}`}
                        >
                           🇵🇾
                        </button>
                        {isAnimate && (
                           <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-blue-600 font-black animate-bounce">+1</span>
                        )}
                     </div>
                     <div className="mt-4 text-center">
                        <span className="text-3xl font-black italic block text-black tabular-nums">{likes.toLocaleString()}</span>
                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">Hinchas alentando ahora</span>
                     </div>
                  </div>
               </section>


               {/* FIGURAS A SEGUIR */}
               <section className="mb-12">
                  <h2 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 italic text-center md:text-left">Figuras a Seguir</h2>
                  <div className="flex justify-around items-start gap-4">
                     {[
                        { nombre: "Miguel Almiron", pos: "Mediocampista", num: "10", img: "/images/jugadores/miguel-almiron.jpg" },
                        { nombre: "Julio Enciso", pos: "Delantero", num: "19", img: "/images/jugadores/julio-enciso.jpg" },
                        { nombre: "Diego Gomez", pos: "Mediocampista", num: "8", img: "/images/jugadores/diego-gomez.jpg" }
                     ].map((jugador, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                           <div className="relative mb-4 group">
                              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                                 <img src={jugador.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={jugador.nombre} />
                              </div>
                              <span className="absolute bottom-1 right-1 bg-black text-white text-[10px] font-black w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">{jugador.num}</span>
                           </div>
                           <h3 className="text-[10px] md:text-xs font-black uppercase italic leading-none text-black">{jugador.nombre}</h3>
                           <p className="text-[8px] font-bold text-gray-400 uppercase mt-1 italic">{jugador.pos}</p>
                        </div>
                     ))}
                  </div>
               </section>


               {/* ESTADÍSTICAS */}
               <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="bg-white rounded-3xl p-5 text-center shadow-sm">
                     <p className="text-[8px] font-black text-gray-400 uppercase mb-1 italic">Jugados</p>
                     <p className="text-3xl font-black italic">{seleccion.stats?.total || 0}</p>
                  </div>
                  <div className="bg-white rounded-3xl p-5 text-center shadow-sm">
                     <p className="text-[8px] font-black text-gray-400 uppercase mb-1 italic">Ganados</p>
                     <p className="text-3xl font-black italic text-green-600">{seleccion.stats?.g || 0}</p>
                  </div>
                  <div className="bg-white rounded-3xl p-5 text-center shadow-sm">
                     <p className="text-[8px] font-black text-gray-400 uppercase mb-1 italic">Perdidos</p>
                     <p className="text-3xl font-black italic text-red-600">{seleccion.stats?.p || 0}</p>
                  </div>
               </div>
               {/* --- CUERPO TÉCNICO Y PLANTEL CON LOGO FLOTANTE --- */}
               <section className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 mb-10">
                  <div className="relative w-full h-56 md:h-72 bg-gray-200">
                     <img
                        src="/images/noticias/paraguay-seleccion.jpg"
                        alt="Plantel Albirroja"
                        className="w-full h-full object-cover"
                     />
                     {/* LOGO FLOTANTE TIPO SELLO OFICIAL */}
                     <div className="absolute bottom-4 right-4 w-14 h-14 md:w-20 md:h-20 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-white/50 flex items-center justify-center group hover:scale-110 transition-transform duration-500">
                        <img
                           src="/images/noticias/apf.png"
                           alt="Escudo APF"
                           className="w-full h-full object-contain"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>


                  <div className="p-8 border-l-8 border-blue-600">
                     <h4 className="text-[10px] font-black text-gray-400 uppercase mb-6 italic tracking-[0.3em]">
                        Cuerpo Técnico y Plantel Oficial
                     </h4>


                     <div className="mb-6">
                        <p className="text-[10px] font-black text-blue-600 uppercase mb-1">Director Técnico</p>
                        <p className="text-2xl font-black italic uppercase text-black">Gustavo Alfaro</p>
                     </div>


                     <div className="space-y-4">
                        <p className="text-sm text-gray-600 italic">
                           <strong className="text-black not-italic font-black uppercase text-[11px] mr-2">Porteros:</strong>
                           Gatito Fernández (Cerro Porteño), Orlando Gill (San Lorenzo), Aldo Pérez (Guarani), Carlos Coronel (New York Red Bulls).
                        </p>
                        <p className="text-sm text-gray-600 italic border-t border-gray-50 pt-4">
                           <strong className="text-black not-italic font-black uppercase text-[11px] mr-2">Defensas:</strong>
                           Gustavo Gómez (Palmeiras), Omar Alderete (Sunderland), Junior Alonso (Atlético Mineiro), Juan José Cáceres (Dynamo Moscú),Alexis Duarte (Santos), Alan Benítez (Internacional), Agustín Sández: (Rosario Central), Blas Riveros (Cerro Porteño), Gustavo Velázquez (Cerro Porteño).
                        </p>
                        <p className="text-sm text-gray-600 italic border-t border-gray-50 pt-4">
                           <strong className="text-black not-italic font-black uppercase text-[11px] mr-2">Mediocampistas:</strong>
                           Diego Gómez (Brighton & Hove Albion), Miguel Almirón (Atlanta), Ramón Sosa (Palmeiras), Damián Bobadilla Sao Paulo), Julio Enciso (Racing de Estrasburgo), Alejandro Romero Gamarra (Al Ain), Braian Ojeda (Real Salt Lake), Matías Galarza (River Plate), Andrés Cubas (Vancouver Whitecaps), Diego León (Manchester United), Hugo Cuenca (Genoa).
                        </p>
                        <p className="text-sm text-gray-600 italic border-t border-gray-50 pt-4">
                           <strong className="text-black not-italic font-black uppercase text-[11px] mr-2">Delanteros:</strong>
                           Antonio Sanabria (Torino), Álex Arce (Liga de Quito), Ronaldo Martínez (Platense), Gabriel Ávalos (Independiente), Diego González (Atlas).
                        </p>
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
                           <div className="relative w-full h-52 md:h-64 rounded-[1.5rem] overflow-hidden shadow-inner bg-gray-100">
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
         </main>
      </div>
   );
}
