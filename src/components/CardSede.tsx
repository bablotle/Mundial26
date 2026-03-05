'use client';


interface SedeProps {
    nombre: string;
    ciudad: string;
    capacidad: string;
    imagen: string;
}


export default function CardSede({ nombre, ciudad, capacidad, imagen }: SedeProps) {
    return (
        <div className="island-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-[8px] font-black uppercase px-2 py-1 rounded-full tracking-widest shadow-lg">
                        {ciudad}
                    </span>
                </div>
            </div>
            <div className="p-5">
                <h3 className="font-black uppercase italic text-lg tracking-tighter text-black leading-none">
                    {nombre}
                </h3>
                <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Capacidad</span>
                    <span className="text-[11px] font-black text-black">{capacidad}</span>
                </div>
            </div>
        </div>
    );
}
