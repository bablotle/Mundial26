import { Trophy } from 'lucide-react';
import { liveMatch } from '@/data/liveMatch';

export default function CardLiveMatch() {
    if (!liveMatch.activo) return null;

    return (
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-slate-100 mx-1">
            <div className="flex flex-col items-center">
                {/* Indicador Live */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Partido Inaugural</span>
                </div>

                {/* Marcador Principal */}
                <div className="flex items-center justify-between w-full mb-8">
                    <div className="flex flex-col items-center flex-1">
                        <img src={liveMatch.banderaLocal} className="w-12 h-8 object-cover rounded shadow-sm mb-2" alt="L" />
                        <span className="text-[10px] font-black uppercase italic">{liveMatch.local}</span>
                    </div>

                    <div className="flex flex-col items-center px-4">
                        <div className="text-4xl font-black italic tracking-tighter text-slate-900 leading-none">
                            {liveMatch.marcador}
                        </div>
                        <span className="text-[9px] font-black text-red-600 uppercase mt-1">{liveMatch.estado} - {liveMatch.tiempo}</span>
                    </div>

                    <div className="flex flex-col items-center flex-1">
                        <img src={liveMatch.banderaVisitante} className="w-12 h-8 object-cover rounded shadow-sm mb-2" alt="V" />
                        <span className="text-[10px] font-black uppercase italic">{liveMatch.visitante}</span>
                    </div>
                </div>

                {/* Bloque de Alineaciones */}
                <div className="w-full bg-slate-50 rounded-3xl p-5 border border-slate-100 space-y-6">

                    {/* Local */}
                    <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase mb-3 flex items-center gap-1">
                            <Trophy size={10} className="text-blue-500" /> Alineación {liveMatch.local}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {liveMatch.alineacionLocal.map((jugador, i) => (
                                <span key={i} className="text-[9px] font-bold text-slate-700 bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-sm">
                                    {jugador}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-slate-200/60 w-full"></div>

                    {/* Visitante */}
                    <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase mb-3 flex items-center gap-1">
                            <Trophy size={10} /> Alineación {liveMatch.visitante}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {liveMatch.alineacionVisitante.map((jugador, i) => (
                                <span key={i} className="text-[9px] font-bold text-slate-500 bg-white/50 px-2 py-1 rounded-lg border border-slate-200">
                                    {jugador}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}