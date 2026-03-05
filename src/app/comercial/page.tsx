'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Layout, Target, TrendingUp, Zap } from 'lucide-react';

export default function ComercialPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">

                    {/* HERO SECTION COMERCIAL */}
                    <div className="text-center mb-24">
                        <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                            Media Kit Oficial 2026
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">
                            CONECTA CON LA <br />
                            <span className="text-blue-600">PASIÓN</span> DEL HINCHA
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium uppercase tracking-wide">
                            World26 App es la plataforma digital definitiva para el seguimiento del mundial.
                            Ofrecemos una experiencia premium, rápida y personalizada para la audiencia más apasionada del mundo.
                        </p>
                    </div>

                    {/* STATS / POR QUÉ NOSOTROS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {[
                            { icon: <Zap size={32} />, title: "Rendimiento", desc: "Carga ultra rápida en móviles para consulta en estadios y bares." },
                            { icon: <Target size={32} />, title: "Segmentación", desc: "Llega directamente a nichos específicos por selección nacional." },
                            { icon: <TrendingUp size={32} />, title: "Engagement", desc: "Funciones de favoritos que garantizan visitas recurrentes diarias." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                                <div className="text-blue-500 mb-6">{item.icon}</div>
                                <h3 className="font-black uppercase italic text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-xs leading-loose">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* BANNER VISUAL HORIZONTAL */}
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-32 group">
                        {/* Imagen de Fondo Corregida */}
                      <img 
                          src="/images/noticias/banner-comercial.jpg" // Ruta local (asumiendo que la guardas así)
                              alt="Estadio Mundialista"
                                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                      
                        {/* Overlay de Degradado para que el texto se lea perfecto */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                        {/* Contenido del Banner */}
                        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-4">
                                    Tu marca, en el <br />
                                    <span className="text-blue-500">epicentro</span> del mundo
                                </h2>
                                <p className="text-gray-200 text-sm md:text-base font-medium max-w-lg mb-8">
                                    Forma parte del evento deportivo más grande de la historia.
                                    Posiciona tu empresa frente a millones de aficionados que siguen cada segundo del torneo.
                                </p>

                                {/* Badge de disponibilidad */}
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-green-500">
                                        Espacios disponibles para 2026
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OPCIONES DE PATROCINIO */}
                    <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-12 text-center md:text-left">
                        Oportunidades de <span className="text-blue-600">Sponsoring</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
                        {/* CARD DE PRODUCTO COMERCIAL */}
                        <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/30 p-10 rounded-[2.5rem] flex flex-col justify-between">
                            <div>
                                <span className="bg-blue-600 text-[9px] font-black uppercase px-3 py-1 rounded-full">Impacto Total</span>
                                <h4 className="text-4xl font-black uppercase italic mt-6 mb-4 leading-none">Main <br />Partner</h4>
                                <p className="text-gray-400 text-sm mb-8">Presencia exclusiva en el Header global, página de carga y todas las secciones de la App.</p>
                            </div>
                            <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest text-blue-400">
                                <li>• +1M de Impresiones estimadas</li>
                                <li>• Integración de marca nativa</li>
                                <li>• Exclusividad de rubro</li>
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-between">
                            <div>
                                <span className="bg-gray-700 text-[9px] font-black uppercase px-3 py-1 rounded-full">Segmentado</span>
                                <h4 className="text-4xl font-black uppercase italic mt-6 mb-4 leading-none">Match Day <br />Sponsor</h4>
                                <p className="text-gray-400 text-sm mb-8">Tu marca presente en el calendario de partidos y resultados de selecciones específicas.</p>
                            </div>
                            <ul className="space-y-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                <li>• Segmentación por país</li>
                                <li>• Botón de acción (CTA) directo</li>
                                <li>• Notificaciones push brandeadas</li>
                            </ul>
                        </div>
                    </div>

                    {/* CONTACTO FINAL */}
                    <div className="bg-blue-600 rounded-[3rem] p-12 text-center">
                        <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-6">¿Listo para jugar?</h2>
                        <p className="font-bold uppercase tracking-widest text-xs mb-10 opacity-80">Solicita nuestro tarifario completo y métricas de audiencia</p>
                        <a
                            href="mailto:comercial@world26app.com"
                            className="inline-block bg-white text-black px-12 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:scale-105 transition-transform"
                        >
                            Contactar Ventas
                        </a>
                    </div>

                </div>
            </main>

        </div>
    );
}