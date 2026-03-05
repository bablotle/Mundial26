export default function TablaDetallada() {
    return (
        <div className="island-card overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex justify-between items-center">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-black">Rendimiento Histórico</h3>
                <span className="text-[8px] font-bold text-blue-600 uppercase">Total: 18 Mundiales</span>
            </div>
            <table className="w-full text-left">
                <tbody className="divide-y divide-gray-50">
                    {[
                        { etiqueta: 'Títulos', valor: '3 (1978, 1986, 2022)' },
                        { etiqueta: 'Finales', valor: '6' },
                        { etiqueta: 'Partidos Jugados', valor: '88' },
                        { etiqueta: 'Goles a Favor', valor: '152' }
                    ].map((item, i) => (
                        <tr key={i} className="text-[10px]">
                            <td className="p-4 font-bold text-gray-400 uppercase tracking-tighter">{item.etiqueta}</td>
                            <td className="p-4 font-black text-black text-right italic">{item.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
