'use client';
import Link from 'next/link';
import { Plane, Beer, ArrowRight } from 'lucide-react';

export default function MarketingCards() {
    return (
        <section className="px-4 py-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* CARD AGENCIAS (TRAVEL HUB) */}
                <Link href="/agencias" className="group relative overflow-hidden rounded-3xl bg-slate-900 p-8 transition-all hover:shadow-2xl hover:-translate-y-1 border border-slate-800">
                    {/* Fondo Decorativo */}
                    <div className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-blue-500/10 transition-colors">
                        <Plane size={240} className="-rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </div>

                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
                            Mundial 2026 Experience
                        </span>
                        <h3 className="text-3xl font-black text-white italic uppercase leading-none mb-2">
                            ¿Vuelas al <br /> <span className="text-blue-500 text-4xl leading-tight">Mundial?</span>
                        </h3>
                        <p className="text-slate-400 text-sm max-w-[240px] mb-6 font-medium">
                            Asegura tu lugar con las 30 mejores agencias certificadas. Vuelos, hoteles y traslados.
                        </p>
                        <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                            Explorar Paquetes <ArrowRight size={18} className="text-blue-500" />
                        </div>
                    </div>
                </Link>

                {/* CARD FAN ZONES (BARS & EVENTS) */}
                <Link href="/fan-zones" className="group relative overflow-hidden rounded-3xl bg-white p-8 transition-all hover:shadow-2xl hover:-translate-y-1 border border-slate-100">
                    {/* Fondo Decorativo */}
                    <div className="absolute -right-8 -bottom-8 text-slate-100 group-hover:text-amber-500/10 transition-colors">
                        <Beer size={240} className="rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </div>

                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-[10px] font-black uppercase tracking-widest mb-4">
                            Local Fan Zones
                        </span>
                        <h3 className="text-3xl font-black text-slate-900 italic uppercase leading-none mb-2">
                            ¿Dónde ver <br /> <span className="text-amber-500 text-4xl leading-tight">El Partido?</span>
                        </h3>
                        <p className="text-slate-500 text-sm max-w-[240px] mb-6 font-medium">
                            Reserva mesa en los mejores bares con pantalla gigante y ambiente de estadio.
                        </p>
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm group-hover:gap-4 transition-all">
                            Ver lugares hoy <ArrowRight size={18} className="text-amber-500" />
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    );
} 