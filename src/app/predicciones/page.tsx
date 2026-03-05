'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Ticket, Trophy, Phone } from 'lucide-react';

export default function PrediccionesPage() {
    const [enviado, setEnviado] = useState(false);

    const handleSorteo = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para guardar en Base de Datos
        setEnviado(true);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                {/* Header de la sección */}
                <div className="text-center mb-16">
                    <Trophy className="text-blue-500 mx-auto mb-4" size={48} />
                    <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-4">
                        El Gran <span className="text-blue-600">Sorteo</span> 2026
                    </h1>
                    <p className="text-gray-400 uppercase text-[10px] tracking-[0.3em] font-bold">
                        Deja tu pronóstico y participa por premios oficiales
                    </p>
                </div>

                {!enviado ? (
                    <form onSubmit={handleSorteo} className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12">

                        {/* Selector de Partido CORREGIDO Y RESPONSIVE */}
                        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 bg-black/40 p-6 md:p-10 rounded-3xl border border-white/5">

                            {/* Equipo Local */}
                            <div className="flex flex-col items-center min-w-[80px] flex-1">
                                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-3 shadow-lg border border-white/10">
                                    <span className="text-2xl">🇵🇾</span>
                                </div>
                                <span className="text-[10px] font-black uppercase italic tracking-widest">Paraguay</span>
                            </div>

                            {/* Inputs de Marcador */}
                            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
                                <input
                                    required
                                    type="number"
                                    placeholder="0"
                                    className="w-14 h-16 md:w-16 md:h-20 text-center text-3xl font-black bg-white/10 border border-white/20 rounded-xl focus:border-blue-500 outline-none transition-all"
                                />
                                <span className="font-black text-xl text-blue-600">VS</span>
                                <input
                                    required
                                    type="number"
                                    placeholder="0"
                                    className="w-14 h-16 md:w-16 md:h-20 text-center text-3xl font-black bg-white/10 border border-white/20 rounded-xl focus:border-blue-500 outline-none transition-all"
                                />
                            </div>

                            {/* Equipo Visitante */}
                            <div className="flex flex-col items-center min-w-[80px] flex-1">
                                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-3 shadow-lg border border-white/10">
                                    <span className="text-2xl">🇦🇷</span>
                                </div>
                                <span className="text-[10px] font-black uppercase italic tracking-widest">Argentina</span>
                            </div>
                        </div>

                        {/* Datos de contacto */}
                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 mb-2 block">Nombre Completo</label>
                                <input required type="text" placeholder="Ej: Juan Pérez" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:bg-white/10 transition-all outline-none text-sm font-medium" />
                            </div>

                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 mb-2 block">Número de Teléfono (WhatsApp)</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    <input required type="tel" placeholder="+595 9xx xxx xxx" className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl focus:bg-white/10 transition-all outline-none text-sm font-medium" />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full mt-12 bg-blue-600 hover:bg-blue-500 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/20">
                            Registrar mi Pronóstico
                        </button>

                        <p className="text-center text-[8px] text-gray-600 mt-6 uppercase tracking-widest leading-relaxed">
                            Al participar, aceptas ser contactado en caso de resultar ganador. <br /> Sorteo válido solo para mayores de 18 años.
                        </p>
                    </form>
                ) : (
                    <div className="text-center py-20 bg-blue-600 rounded-[3rem] animate-in fade-in zoom-in duration-500 shadow-2xl shadow-blue-600/40">
                        <Ticket size={64} className="mx-auto mb-6 text-white" />
                        <h2 className="text-4xl font-black uppercase italic mb-2">¡Registrado!</h2>
                        <p className="font-bold uppercase tracking-widest text-sm px-6">Ya estás participando en el sorteo.</p>
                        <button onClick={() => setEnviado(false)} className="mt-8 text-[10px] font-black uppercase border-b-2 border-white pb-1 hover:opacity-70 transition-opacity">Volver a intentar</button>
                    </div>
                )}
            </main>
        </div>
    );
}
