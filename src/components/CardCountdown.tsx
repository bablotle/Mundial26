import { Clock, Info } from 'lucide-react';

export default function CardCountdown() {
    // Aquí podrías calcular los días reales con JS, pero para el ejemplo:
    const diasFaltantes = 96;

    return (
        <div className="mx-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            {/* Círculos decorativos de fondo */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="flex justify-between items-start relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Camino al Mundial</p>
                    </div>
                    <p className="text-3xl font-black italic uppercase tracking-tighter leading-none">
                        Faltan {diasFaltantes} Días
                    </p>
                </div>
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
                    <Clock size={20} />
                </div>
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10 flex gap-3 items-start">
                <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <p className="text-[11px] font-medium leading-relaxed italic opacity-80">
                    "El 15 de junio de 1958, Paraguay debutó en un mundial goleando a Escocia. Fue el inicio de nuestra leyenda."
                </p>
            </div>
        </div>
    );
}