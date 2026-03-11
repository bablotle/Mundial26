import { ChevronRight, Ticket, Share2, Trophy } from 'lucide-react';

export default function SponsorGlobal() {
    return (
        <div className="mx-4 mt-6">
            <div className="bg-green-500 rounded-[2rem] p-1 flex items-center overflow-hidden shadow-2xl border border-white/10">
                {/* Logo Marca */}
                <div className="bg-white rounded-[2.3rem] p-4 flex items-center justify-center min-w-[100px] h-16">
                    <img src="https://www.ueno.com.py/wp-content/uploads/2024/08/Banner-ueno-mobile.png?w=640" alt="Sponsor" className="h-14 object-contain" />
                </div>

                {/* Mensaje de la Marca */}
                <div className="flex-1 px-4 py-2">
                    <p className="text-[9px] font-black text-green-800 uppercase tracking-widest leading-none mb-1">
                        Sponsor Oficial del Hincha
                    </p>
                    <p className="texto-xs font-bold text-white leading-tight italic">
                        "Cargá tu pasión, nosotros ponemos la previa"
                    </p>
                </div>

                {/* Acción CTA */}
                <button className="pr-6 text-white opacity-50 hover:opacity-100 transition-opacity">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}