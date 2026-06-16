import React from 'react';

interface CardResultadoMiniProps {
   local: string;
   banderaLocal: string;
   golesLocal: number;
   golesVisitante: number;
   visitante: string;
   banderaVisitante: string;
}

export default function CardResultadoMini({
   local,
   banderaLocal,
   golesLocal,
   golesVisitante,
   visitante,
   banderaVisitante
}: CardResultadoMiniProps) {

   return (
      <div className="bg-slate-950/30 rounded-xl p-3 grid grid-cols-[1fr_auto_1fr] items-center border border-slate-800/40 hover:border-slate-800 transition-colors gap-3">

         {/* Izquierda: Local + Bandera (Alineado estricto a la izquierda) */}
         <div className="flex items-center gap-2 min-w-0">
            <img src={banderaLocal} className="w-4 h-3 object-cover rounded-sm shadow-sm shrink-0" alt="" />
            <span className="font-medium text-slate-300 text-[11px] uppercase tracking-tight truncate">
               {local}
            </span>
         </div>

         {/* Centro: Marcador (Eje central matemático inamovible) */}
         <div className="flex items-center gap-0.5 font-black tabular-nums text-[10px] shrink-0 px-1">
            <span className="text-white bg-slate-800 px-1.5 py-0.5 rounded shadow-sm">{golesLocal}</span>
            <span className="text-slate-600 font-bold px-1">:</span>
            <span className="text-slate-400 bg-slate-900/50 px-1.5 py-0.5 rounded shadow-sm">{golesVisitante}</span>
         </div>

         {/* Derecha: Visitante + Bandera (Alineado estricto a la derecha) */}
         <div className="flex items-center gap-2 min-w-0 justify-end">
            <span className="font-medium text-slate-500 text-[11px] uppercase tracking-tight text-right truncate">
               {visitante}
            </span>
            <img src={banderaVisitante} className="w-4 h-3 object-cover rounded-sm shadow-sm shrink-0" alt="" />
         </div>

      </div>
   );
}