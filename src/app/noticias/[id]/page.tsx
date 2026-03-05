'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { todasLasNoticias } from '@/data/noticias';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function DetalleNoticia() {
    const { id } = useParams();


    // 1. Buscamos la noticia actual
    const noticiaActual = todasLasNoticias.find(n => n.id === id);


    // 2. Filtramos para obtener "Otras noticias" (excluyendo la actual)
    const noticiasRelacionadas = todasLasNoticias
        .filter(n => n.id !== id)
        .slice(0, 3); // Solo mostramos las primeras 3


    if (!noticiaActual) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="font-black italic">NOTICIA NO ENCONTRADA</h1>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />


            <main className="flex-grow pt-24 pb-20">
                <article className="max-w-3xl mx-auto px-5">
                    {/* Header de la noticia */}
                    <header className="mb-8">
                        <span className="bg-blue-600 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-[0.2em]">
                            {noticiaActual.categoria || 'Mundial 2026'}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mt-4 mb-6">
                            {noticiaActual.titulo}
                        </h1>
                        <p className="text-lg md:text-xl font-bold text-gray-500 italic leading-tight">
                            {noticiaActual.resumen}
                        </p>
                    </header>


                    {/* Imagen Principal */}
                    <div className="island-card h-64 md:h-[450px] overflow-hidden mb-10 shadow-2xl">
                        <img
                            src={noticiaActual.imagen}
                            className="w-full h-full object-cover"
                            alt={noticiaActual.titulo}
                        />
                    </div>


                    {/* Cuerpo de la noticia */}
                    <div className="text-gray-700 text-lg leading-relaxed space-y-6 font-medium">
                        {/* Aquí podrías mapear párrafos si los tienes en un array o usar un string largo */}
                        <p>{noticiaActual.contenidoLargo || "El camino al Mundial 2026 continúa con preparativos intensos en todas las sedes..."}</p>
                    </div>


                    <hr className="my-16 border-gray-100" />


                    {/* SECCIÓN: OTRAS NOTICIAS (Sigue Leyendo) */}
                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8 italic text-center">
                            Sigue Leyendo
                        </h3>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {noticiasRelacionadas.map((item) => (
                                <Link key={item.id} href={`/noticias/${item.id}`} className="group">
                                    <div className="island-card overflow-hidden bg-white hover:border-blue-200 transition-colors h-full flex flex-col">
                                        <div className="h-32 overflow-hidden">
                                            <img
                                                src={item.imagen}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                alt={item.titulo}
                                            />
                                        </div>
                                        <div className="p-4 flex-grow">
                                            <h4 className="text-xs font-black uppercase italic leading-tight group-hover:text-blue-600 transition-colors">
                                                {item.titulo}
                                            </h4>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </article>
            </main>


        </div>
    );
}
