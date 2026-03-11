'use client';
import { useState } from 'react';
import { Trophy, CheckCircle2, XCircle } from 'lucide-react';

export default function CardTrivia() {
    const [estado, setEstado] = useState<'pendiente' | 'error' | 'exito'>('pendiente');
    const [mensajeError, setMensajeError] = useState(false);

    const respuestaCorrecta = 'Sudáfrica 2010';
    const opciones = ['Francia 98', 'Sudáfrica 2010', 'Corea-Japón', 'México 86'];

    const manejarRespuesta = (opcion: string) => {
        if (opcion === respuestaCorrecta) {
            setEstado('exito');
            setMensajeError(false);
        } else {
            setMensajeError(true);
            // Quitamos el mensaje de error después de 2 segundos para que intente de nuevo
            setTimeout(() => setMensajeError(false), 2000);
        }
    };

    return (
        <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-4 mx-2">
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl transition-colors ${estado === 'exito' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                    <Trophy size={24} />
                </div>
                <div className="flex-1">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest text-left">Desafío Diario</p>
                    <p className="text-lg font-black text-slate-900 leading-tight tracking-tighter text-left">Trivia Albirroja 🇵🇾</p>
                </div>
            </div>

            {estado === 'pendiente' ? (
                <>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-xs font-bold text-slate-800 text-left">¿En qué mundial Paraguay llegó a Cuartos de Final?</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        {opciones.map((opcion) => (
                            <button
                                key={opcion}
                                onClick={() => manejarRespuesta(opcion)}
                                className="bg-slate-50 hover:bg-slate-100 text-slate-600 py-3 rounded-xl font-black text-[10px] uppercase transition-all active:scale-95 border border-transparent active:border-slate-200"
                            >
                                {opcion}
                            </button>
                        ))}
                    </div>

                    {mensajeError && (
                        <p className="text-[10px] text-red-500 font-black uppercase text-center animate-bounce">
                            ❌ ¡Casi! Intenta de nuevo...
                        </p>
                    )}
                </>
            ) : (
                <div className="py-6 text-center space-y-3 animate-in fade-in zoom-in duration-500">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <div>
                        <p className="font-black text-slate-900 uppercase italic text-xl">¡A lo Luque!</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Correcto: Sudáfrica 2010</p>
                    </div>
                    <div className="bg-green-600 text-white p-3 rounded-2xl">
                        <p className="text-[10px] font-black uppercase tracking-tighter">🎁 Premio Desbloqueado</p>
                        <p className="text-xs font-bold uppercase">Muestra esto al mozo para tu beneficio</p>
                    </div>
                </div>
            )}
        </div>
    );
}