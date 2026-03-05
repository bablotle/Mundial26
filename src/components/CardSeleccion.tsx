'use client';


import Link from 'next/link'; // Importante para la navegación


interface SeleccionProps {
    id: string; // Agregamos el id
    nombre: string;
    bandera: string;
    ranking: string;
    confederacion: string;
    estrellas?: number;
}


export default function CardSeleccion({
    id, // Lo recibimos aquí
    nombre,
    bandera,
    ranking,
    confederacion,
    estrellas = 0
}: SeleccionProps) {
    return (
        /* Envolvemos todo el contenido en el Link dinámico */
        <Link href={`/selecciones/${id}`} className="block">
            <div className="island-card p-4 flex flex-col items-center group hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer text-center">


                {/* Estrellas */}
                <div className="flex gap-0.5 mb-2 h-2">
                    {estrellas > 0 && [...Array(estrellas)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-[8px]">★</span>
                    ))}
                </div>


                {/* Bandera */}
                <div className="w-14 h-9 overflow-hidden rounded-sm shadow-sm border border-gray-100">
                    <img
                        src={bandera}
                        alt={nombre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                </div>


                {/* Nombre */}
                <h3 className="mt-3 font-black uppercase italic text-[11px] tracking-tighter text-black leading-none group-hover:text-blue-600 transition-colors">
                    {nombre}
                </h3>


                {/* Confederación */}
                <span className="text-[7px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mt-2 uppercase">
                    {confederacion}
                </span>


                {/* Ranking */}
                <p className="mt-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                    FIFA #{ranking}
                </p>
            </div>
        </Link>
    );
}
