'use client';
import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';


export default function Footer() {
       const links = [
              { name: 'Partidos', href: '/partidos' },
              { name: 'Noticias', href: '/noticias' },
              { name: 'Grupos', href: '/grupos' },
              { name: 'Estadísticas', href: '/estadisticas' },
              { name: 'Sedes', href: '/sedes' },
              { name: 'Selecciones', href: '/selecciones' },
              { name: 'Albirroja', href: '/mi-seleccion' },
       ];


       return (
              <footer className="bg-black text-white pt-16 pb-10 px-8 mt-12">
                     <div className="max-w-4xl mx-auto flex flex-col items-center">


                            {/* 1. LINKS DE PÁGINAS (ARRIBA DE TODO) */}
                            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
                                   {links.map((link) => (
                                          <Link
                                                 key={link.name}
                                                 href={link.href}
                                                 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
                                          >
                                                 {link.name}
                                          </Link>
                                   ))}
                            </nav>


                            {/* 2. LOGO Y REDES SOCIALES */}
                            <div className="flex flex-col items-center mb-12">
                                   <h2 className="text-5xl font-black italic tracking-tighter mb-6">
                                          MIL<span className="text-blue-600">GOLES</span>
                                   </h2>


                                   <div className="flex items-center gap-5">
                                          <a
                                               //  href="https://instagram.com/milgoles_"
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 hover:text-white transition-all duration-300 border border-white/10"
                                          >
                                                 <Instagram size={20} strokeWidth={2.5} />
                                          </a>


                                          <a
                                               //  href="https://x.com/milgoles_"
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 border border-white/10"
                                          >
                                                 <Twitter size={20} strokeWidth={2.5} />
                                          </a>
                                   </div>
                            </div>


                            {/* 3. INFO DEBAJO (TEXTOS Y CRÉDITOS) */}
                             <div className="w-full pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                             <p className="text-[8px] text-gray-700 mt-3 uppercase font-bold">© 2026 WORLD26 APP</p>
                                 
                            </div>


                        { /*   CONTACTO FINAL 
                            <div className="mt-8">
                                   <p className="text-[10px] font-black text-white italic opacity-40 hover:opacity-100 transition-opacity">
                                          contacto@world26app.com
                                   </p>
                            </div> */ }
                     </div>
              </footer>
       );
}
