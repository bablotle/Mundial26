'use client';
import { useState } from 'react';
import { locales, type Local } from '@/data/locales';
import { todosLosPartidos, type Partido } from '@/data/partidos';
import { Beer, MapPin, Calendar, Clock, Bell, Wifi, Trophy } from 'lucide-react';
import CardTrivia from '@/components/CardTrivia';
import CardCountdown from '@/components/CardCountdown';

interface LocalLandingProps {
    id: string;
}

export default function LocalLandingQR({ id }: LocalLandingProps) {
    const [canjeado, setCanjeado] = useState(false); // Estado para el canje
    const local = (locales as Local[]).find((l) => l.slug === id);
    // 1. Agregamos un estado para la hora
    const [horaValidacion, setHoraValidacion] = useState<string | null>(null);

    // 2. Función para validar
    const manejarValidacion = () => {
        if (confirm("¿Estás frente al mozo?")) {
            const ahora = new Date();
            const tiempo = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            setHoraValidacion(tiempo);
            setCanjeado(true);
        }
    };
    // 3. En el JSX (el botón verde):
    {
        canjeado && (
            <div className="space-y-2">
                <div className="w-full bg-green-600 text-white py-4 rounded-2xl font-black uppercase italic text-xs tracking-widest text-center animate-pulse border-b-4 border-green-800">
                    ✅ PROMO VALIDADA - {horaValidacion}
                </div>
                <p className="text-[9px] text-green-600 text-center font-black uppercase">
                    Válido solo por hoy: {new Date().toLocaleDateString()}
                </p>
            </div>
        )
    }

    if (!local) return <div className="p-10 text-center font-bold">Local no encontrado</div>;

    // LÓGICA DE PARTIDOS: Ordenar cronológicamente (Por fecha y hora)
    const partidosOrdenados = [...todosLosPartidos]
        .sort((a, b) => {
            // Combinamos fecha y hora para comparar (Asumiendo formato DD/MM y HH:MM)
            const dateA = a.fecha.split('/').reverse().join('') + a.hora;
            const dateB = b.fecha.split('/').reverse().join('') + b.hora;
            return dateA.localeCompare(dateB);
        })
        .slice(0, 15);

    const agendarEnGoogle = (partido: Partido) => {
        const titulo = `⚽ ${partido.local} vs ${partido.visitante} - ${local.nombre}`;
        const desc = `Vivilo en ${local.nombre}. Promo: ${local.promoHoy}`;
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(desc)}&location=${encodeURIComponent(local.direccion)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-32 font-sans">
            {/* Header con Foto */}
            <div className="relative h-64 w-full overflow-hidden">
                <img src={local.foto} alt={local.nombre} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-blue-600 px-2 py-0.5 rounded mb-2 inline-block shadow-lg">Fan Zone Oficial</span>
                    <h1 className="text-4xl font-black italic uppercase drop-shadow-2xl tracking-tighter">
                        {local.nombre}
                    </h1>
                </div>
            </div>
       
            <div className="px-4 -mt-8 relative z-10 space-y-8">

                {/* 1. CARD DE PROMO + BOTÓN DE VALIDACIÓN */}
                <div className={`p-6 rounded-[2.5rem] shadow-xl border-2 transition-all duration-500 ${canjeado ? 'bg-green-50 border-green-500' : 'bg-white border-amber-400 border-dashed'
                    }`}>
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-2xl shadow-lg transition-colors ${canjeado ? 'bg-green-500 text-white' : 'bg-amber-500 text-slate-900'
                            }`}>
                            <Beer size={24} />
                        </div>
                        <div className="flex-1">
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                {canjeado ? 'Beneficio Activo' : 'Beneficio del Escaneo'}
                            </p>
                            <p className="text-xl font-black text-slate-900 leading-tight">
                                {local?.promoHoy}
                            </p>
                        </div>
                    </div>
                    {!canjeado ? (
                        <button
                            onClick={() => {
                                if (confirm("¿Estás frente al mozo? Esta acción no se puede deshacer.")) {
                                    setCanjeado(true);
                                }
                            }}
                            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase italic text-xs tracking-widest shadow-lg active:scale-95 transition-all"
                        >
                            Validar con el mozo
                        </button>
                    ) : (
                        <div className="space-y-2">
                            <div className="w-full bg-green-600 text-white py-4 rounded-2xl font-black uppercase italic text-xs tracking-widest text-center animate-pulse">
                                ✅ Promo Validada
                            </div>
                            <p className="text-[9px] text-green-600 text-center font-bold uppercase">
                                Mostrá esta pantalla para recibir tu beneficio
                            </p>
                        </div>
                    )}

                    {local?.wifi && (
                        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                            <span className="flex items-center gap-1"><Wifi size={12} /> WiFi: {local.wifi}</span>
                            <span className="text-blue-500 font-black">Conectado ✅</span>
                        </div>
                    )}
                </div>
                <CardTrivia /> 
                         {/* La trivia diaria */}

                {/* TEXTO DE ALIENTO (NUEVO) */}
                <div className="text-center py-2">
                    <p className="text-slate-900 font-black italic uppercase text-2xl tracking-tighter">
                        ¡Alentá a tu <span className="text-blue-600">selección</span>! 📣
                    </p>
                    <div className="w-12 h-1 bg-red-500 mx-auto mt-1 rounded-full"></div>
                </div>

                <CardCountdown /> {/* El countdown con info */}

                {/* 2. FIXTURE HORIZONTAL */}
                <div>
                    <h2 className="flex items-center gap-2 text-slate-900 font-black italic uppercase mb-4 px-2 tracking-tighter">
                        <Calendar size={18} className="text-blue-600" /> Próximos Partidos Mundial 2026
                    </h2>
                    <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar snap-x px-2">
                        {partidosOrdenados.map((partido) => {
                            const esParaguay = partido.local === "Paraguay" || partido.visitante === "Paraguay";
                            return (
                                <div
                                    key={partido.id}
                                    className={`min-w-[300px] snap-center bg-white p-6 rounded-[2.5rem] border transition-all ${esParaguay
                                        ? "border-red-500 shadow-2xl shadow-red-100 ring-2 ring-red-500/20"
                                        : "border-slate-100 shadow-lg"
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-5">
                                        <span className={`text-[10px] font-black px-3 py-1 rounded-full ${esParaguay ? 'bg-red-600 text-white' : 'bg-slate-900 text-white'}`}>
                                            {partido.fecha}
                                        </span>
                                        <div className="flex items-center gap-1 text-blue-600 font-black text-xs">
                                            <Clock size={14} className="animate-pulse" /> {partido.hora}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-around gap-2 mb-6">
                                        <div className="flex flex-col items-center gap-3 flex-1">
                                            <img src={partido.banderaLocal} className="w-14 h-9 object-cover rounded shadow-md border border-slate-100" alt="" />
                                            <span className="text-xs font-black text-slate-800 uppercase italic text-center leading-none tracking-tighter">{partido.local}</span>
                                        </div>
                                        <span className="text-slate-200 font-black italic text-lg">VS</span>
                                        <div className="flex flex-col items-center gap-3 flex-1">
                                            <img src={partido.banderaVisitante} className="w-14 h-9 object-cover rounded shadow-md border border-slate-100" alt="" />
                                            <span className="text-xs font-black text-slate-800 uppercase italic text-center leading-none tracking-tighter">{partido.visitante}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => agendarEnGoogle(partido)}
                                        className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black uppercase italic text-xs transition-all active:scale-95 ${esParaguay
                                            ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                                            }`}
                                    >
                                        <Bell size={16} /> {esParaguay ? '¡VAMOS ALBIRROJA!' : 'Agendar Partido'}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 3. MENÚ DESTACADO */}
                {local.menuDestacado && (
                    <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 text-white shadow-2xl mx-1">
                        <img
                            src={local.menuDestacado.foto}
                            className="w-full h-64 object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110"
                            alt="Menú"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                            <div className="flex-1 pr-4">
                                <span className="bg-amber-500 text-slate-900 text-[9px] font-black px-3 py-1 rounded-full uppercase mb-3 inline-block shadow-lg">
                                    Combo para Hinchas
                                </span>
                                <p className="text-2xl font-black uppercase italic leading-[0.9] drop-shadow-xl">
                                    {local.menuDestacado.nombre}
                                </p>
                            </div>
                            <div className="text-right font-black text-amber-400 text-2xl italic drop-shadow-xl whitespace-nowrap">
                                {local.menuDestacado.precio}
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. AMENITIES */}
                <div className="flex flex-wrap gap-2 justify-center px-4 pt-4">
                    {local.amenities.map(a => (
                        <span key={a} className="bg-white text-slate-500 text-[9px] font-bold px-4 py-2 rounded-full border border-slate-100 uppercase shadow-sm flex items-center gap-1">
                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                            {a}
                        </span>
                    ))}
                </div>
            </div> {/* Cierre del contenedor principal space-y-8 */}

            {/* 5. BOTÓN FLOTANTE */}
            <div className="fixed bottom-6 left-6 right-6 z-50">
                <a
                    href={local.linkReserva}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase italic shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-blue-700 transition-all active:scale-95 border border-white/10"
                >
                    <MapPin size={20} className="text-blue-400" />
                    Cómo llegar / Reservar
                </a>
            </div>
        </div >
    );
}
