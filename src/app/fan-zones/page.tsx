import { FAN_ZONES } from '@/data/fan-zones';
import { MapPin, Beer, MessageCircle, Navigation, ChevronRight } from 'lucide-react';
import Link from 'next/link'; // Importante importar Link

export default function FanZonesPage() {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-black text-white p-8 pt-12 text-center">
                <h1 className="text-4xl font-black italic uppercase">Fan Zones Asunción</h1>
                <p className="text-gray-400 mt-2 tracking-widest uppercase text-xs">Los mejores lugares para vivir el Mundial 2026</p>
            </div>

            {/* Grid de Fan Zones */}
            <div className="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto -mt-6">
                {FAN_ZONES.map((zona) => (
                    <div key={zona.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col active:scale-[0.98] transition-transform">

                        {/* 1. La Imagen es un Link */}
                        <Link href={`/fan-zones/${zona.id}`} className="relative h-48 block overflow-hidden">
                            <img src={zona.imagen} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={zona.nombre} />
                            {zona.destacado && (
                                <span className="absolute top-4 right-4 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg z-10">
                                    Socio Oficial
                                </span>
                            )}
                        </Link>

                        <div className="p-5 flex-1 flex flex-col">
                            {/* 2. El Título y Categoría también son un Link */}
                            <Link href={`/fan-zones/${zona.id}`} className="block group">
                                <div className="flex items-center text-blue-600 text-[10px] font-black uppercase mb-2 tracking-tighter">
                                    <MapPin size={12} className="mr-1" /> {zona.ubicacion}
                                </div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-black text-gray-900 mb-1 uppercase italic group-hover:text-blue-600 transition-colors">
                                        {zona.nombre}
                                    </h3>
                                    <ChevronRight size={18} className="text-gray-300 group-hover:text-blue-600" />
                                </div>
                                <p className="text-gray-500 text-xs mb-4 font-medium">{zona.categoria}</p>
                            </Link>

                            {/* Banner de Promo (No es link para que no confunda) */}
                            <div className="bg-green-50 border border-green-100 p-3 rounded-2xl flex items-center mb-5">
                                <div className="bg-green-500 p-1.5 rounded-lg mr-3">
                                    <Beer className="text-white" size={16} />
                                </div>
                                <p className="text-green-800 text-xs font-bold leading-tight">{zona.promo}</p>
                            </div>

                            {/* Botones de Acción (Se mantienen como links externos) */}
                            <div className="mt-auto grid grid-cols-2 gap-2">
                                <a
                                    href={zona.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-100 text-gray-900 py-3 rounded-xl font-bold text-[10px] flex items-center justify-center gap-1 hover:bg-gray-200 transition-colors border border-gray-200"
                                >
                                    <Navigation size={14} />
                                    Ubicación
                                </a>
                                <a
                                    href={zona.linkReserva}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-900 text-white py-3 rounded-xl font-bold text-[10px] flex items-center justify-center gap-1 hover:bg-blue-600 transition-colors"
                                >
                                    <MessageCircle size={14} />
                                    Reservar
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}