import Link from 'next/link';

interface Equipo {
    id: string; // Añadimos ID para el link
    nombre: string;
    pj: number;
    dg: number;
    pts: number;
    bandera: string;
}

export default function TablaGrupo({ nombre, equipos }: { nombre: string, equipos: Equipo[] }) {
    return (
        <div className="island-card overflow-hidden transition-all hover:shadow-md border border-gray-100">
            {/* Cabecera del Grupo */}
            <div className="bg-black p-3 flex justify-between items-center">
                <h3 className="text-white font-black uppercase italic text-sm tracking-tighter">{nombre}</h3>
                <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                </div>
            </div>

            <div className="p-4 bg-white">
                <table className="w-full">
                    <thead>
                        <tr className="text-[8px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                            <th className="text-left pb-2 font-black">Equipo</th>
                            <th className="pb-2 text-center">PJ</th>
                            <th className="pb-2 text-center">DG</th>
                            <th className="pb-2 text-right pr-1">PTS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {equipos.map((equipo, i) => {
                            const esPendiente = equipo.id === "tbd";

                            return (
                                <tr key={i} className={`group transition-colors ${!esPendiente ? 'hover:bg-gray-50/50' : ''}`}>
                                    <td className="py-2.5">
                                        {esPendiente ? (
                                            /* Renderizado para equipos NO DEFINIDOS (sin Link) */
                                            <div className="flex items-center gap-2 opacity-60">
                                                <span className="text-[9px] font-black w-3 text-gray-300">
                                                    {i + 1}
                                                </span>
                                                <div className="relative w-5 h-3.5 shrink-0 shadow-sm border border-gray-100 rounded-[2px] overflow-hidden grayscale">
                                                    <img src={equipo.bandera} className="w-full h-full object-cover" alt={equipo.nombre} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase italic text-gray-400 truncate max-w-[90px]">
                                                    {equipo.nombre}
                                                </span>
                                            </div>
                                        ) : (
                                            /* Renderizado para equipos DEFINIDOS (con Link) */
                                            <Link
                                                href={`/selecciones/${equipo.id}`}
                                                className="flex items-center gap-2"
                                            >
                                                <span className={`text-[9px] font-black w-3 ${i < 2 ? 'text-blue-600' : 'text-gray-300'}`}>
                                                    {i + 1}
                                                </span>
                                                <div className="relative w-5 h-3.5 shrink-0 shadow-sm border border-gray-100 rounded-[2px] overflow-hidden">
                                                    <img src={equipo.bandera} className="w-full h-full object-cover" alt={equipo.nombre} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase italic text-gray-700 group-hover:text-blue-600 transition-colors truncate max-w-[90px]">
                                                    {equipo.nombre}
                                                </span>
                                            </Link>
                                        )}
                                    </td>
                                    <td className="text-[9px] font-bold text-gray-500 text-center px-1">{equipo.pj}</td>
                                    <td className="text-[9px] font-bold text-gray-500 text-center px-1">
                                        {equipo.dg > 0 ? `+${equipo.dg}` : equipo.dg}
                                    </td>
                                    <td className="text-[11px] font-black text-black text-right pr-1">{equipo.pts}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                  
                </table>

                {/* Indicador de Leyenda Inferior */}
                <div className="mt-3 pt-3 border-t border-gray-50 flex gap-4">
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-[7px] font-black text-gray-400 uppercase tracking-tighter">Zona de Clasificación</span>
                    </div>
                </div>
            </div>
        </div>
    );
}