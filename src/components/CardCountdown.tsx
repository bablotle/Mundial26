'use client';
import { useState, useEffect } from 'react';
import { Clock, Info } from 'lucide-react';

export default function CardCountdown() {
    const [diasFaltantes, setDiasFaltantes] = useState(0);

    useEffect(() => {
        // Fecha del mundial: 11 de Junio de 2026
        const target = new Date('2026-06-11T00:00:00');

        const calcularDias = () => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            if (difference > 0) {
                // Calculamos solo los días redondeando hacia arriba
                const dias = Math.ceil(difference / (1000 * 60 * 60 * 24));
                setDiasFaltantes(dias);
            }
        };

        calcularDias();
        // Se actualiza cada hora por si acaso, pero no consume recursos como un segundero
        const timer = setInterval(calcularDias, 3600000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mx-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/5">
            {/* Círculo decorativo de fondo para darle profundidad */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="flex justify-between items-start relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        {/* El puntito rojo animado le da sensación de "App en vivo" */}
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                            Camino al Mundial 2026
                        </p>
                    </div>
                    <p className="text-4xl font-black italic uppercase tracking-tighter leading-none">
                        Faltan {diasFaltantes} Días
                    </p>
                </div>
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/10">
                    <Clock size={20} className="text-blue-400" />
                </div>
            </div>

            {/* Info Histórica: Esto le da contenido de valor al usuario */}
            <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10 flex gap-3 items-start">
                <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <p className="text-[11px] font-medium leading-relaxed italic opacity-80">
                    "El 15 de junio de 1958, Paraguay debutó en un mundial goleando a Escocia. Fue el inicio de nuestra leyenda."
                </p>
            </div>
        </div>
    );
}