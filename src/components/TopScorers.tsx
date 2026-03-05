export default function TopScorers() {
    const jugadores = [
        { nombre: 'L. Messi', goles: 5, equipo: 'ARG', foto: '/images/jugadores/messi.jpg' },
        { nombre: 'K. Mbappé', goles: 4, equipo: 'FRA', foto: '/images/jugadores/mbappe.jpg' },
    ];


    return (
        <div className="island-card p-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Máximos Goleadores</h3>
            <div className="space-y-5">
                {jugadores.map((j, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-blue-600 font-black italic text-sm">#{i + 1}</span>
                            <img src={j.foto} className="w-10 h-10 rounded-full object-cover border-2 border-gray-50" />
                            <div>
                                <p className="text-[11px] font-black uppercase italic leading-none">{j.nombre}</p>
                                <p className="text-[8px] font-bold text-gray-400 uppercase">{j.equipo}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-black italic text-black leading-none">{j.goles}</p>
                            <p className="text-[7px] font-bold text-gray-400 uppercase">Goles</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
