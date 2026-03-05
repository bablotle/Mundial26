'use client';
import { todasLasNoticias } from '@/data/noticias';

export default function BreakingNews() {
    // 1. Filtramos para tomar solo las 3 más recientes
    const noticiasDestacadas = todasLasNoticias && todasLasNoticias.length > 0
        ? todasLasNoticias.slice(0, 4) // <--- ESTO ES LA CLAVE
        : null;

    const titulares = noticiasDestacadas
        ? noticiasDestacadas.map(n => n.titulo)
        : ["Cargando últimas noticias...", "Arena Pro: El mejor fútbol"];

    return (
        <div className="w-full bg-black text-white h-10 flex items-center overflow-hidden border-b border-white/10 relative z-[99]">
            <div className="bg-red-600 h-full px-4 flex items-center z-20 shrink-0 shadow-[10px_0_15px_rgba(0,0,0,0.5)]">
                <span className="text-[10px] font-black uppercase italic tracking-tighter animate-pulse">
                    Último Momento
                </span>
            </div>

            <div className="flex-grow overflow-hidden relative">
                {/* Añadimos 'hover:[animation-play-state:paused]' 
                                                                                                                                                                                  para que el usuario pueda leer con calma al pasar el mouse 
                                                                                                                                                                                                  */}
                <div className="ticker-container flex hover:[animation-play-state:paused] cursor-default">
                    {/* Duplicamos los 3 titulares para el efecto de bucle infinito */}
                    {[...titulares, ...titulares].map((texto, i) => (
                        <span key={i} className="text-[11px] font-bold uppercase italic flex items-center px-10 whitespace-nowrap">
                            <span className="text-red-500 mr-2 text-lg">•</span> {texto}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                                                                                                                                                                                                                                                                                                                                                                                                                  .ticker-container {
                                                                                                                                                                                                                                                                                                                                                                                                                                      display: flex;
                                                                                                                                                                                                                                                                                                                                                                                                                                                          width: max-content;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              animation: ticker 25s linear infinite; /* Ajusta los segundos aquí para la velocidad global */
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              @keyframes ticker {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  0% { transform: translateX(0); }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      100% { transform: translateX(-50%); }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  `}</style>
        </div>
    );
}