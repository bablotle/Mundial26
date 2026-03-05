'use client';
import Navbar from '@/components/Navbar';
import CardSede from '@/components/CardSede';
import Link from 'next/link';


// Actualizamos los IDs a texto (slugs) para que las URLs sean /sedes/estadio-azteca
const sedes = [
    { id: 'estadio-azteca', nombre: 'Estadio Azteca', ciudad: 'CDMX, México', capacidad: '83,000', temp: '24°C', imagen: '/images/sedes/azteca.jpg' },
    { id: 'estadio-akron', nombre: 'Estadio Akron', ciudad: 'Guadalajara, México', capacidad: '48,000', imagen: '/images/sedes/guadalajara.jpg' },
    { id: 'estadio-bbva', nombre: 'Estadio BBVA', ciudad: 'Monterrey, México', capacidad: '53,500', imagen: '/images/sedes/monterrey.jpg' },
    { id: 'bmo-field', nombre: 'BMO Field', ciudad: 'Toronto, Canadá', capacidad: '45,000', imagen: '/images/sedes/toronto.jpg' },
    { id: 'bc-place', nombre: 'BC Place', ciudad: 'Vancouver, Canadá', capacidad: '54,000', imagen: '/images/sedes/vancouver.jpg' },
    { id: 'sofi-stadium', nombre: 'Sofi Stadium', ciudad: 'Los Angeles, USA', capacidad: '70,000', imagen: '/images/sedes/sofi.jpg' },
    { id: 'att-stadium', nombre: 'AT&T Stadium', ciudad: 'Dallas, USA', capacidad: '94,000', imagen: '/images/sedes/dallas.jpg' },
    { id: 'metlife-stadium', nombre: 'MetLife Stadium', ciudad: 'New York, USA', capacidad: '82,500', imagen: '/images/sedes/metlife.jpg' },
    { id: 'arrowhead-stadium', nombre: 'Arrowhead Stadium', ciudad: 'Kansas City, USA', capacidad: '73,000', imagen: '/images/sedes/kansas.jpg' },
    { id: 'nrg-stadium', nombre: 'NRG Stadium', ciudad: 'Houston, USA', capacidad: '72,000', imagen: '/images/sedes/houston.jpg' },
    { id: 'mercedes-benz-stadium', nombre: 'Mercedes-Benz Stadium', ciudad: 'Atlanta, USA', capacidad: '75,000', imagen: '/images/sedes/atlanta.jpg' },
    { id: 'lumen-field', nombre: 'Lumen Field', ciudad: 'Seattle, USA', capacidad: '69,000', imagen: '/images/sedes/seattle.jpg' },
    { id: 'levis-stadium', nombre: 'Levis Stadium', ciudad: 'San Francisco, USA', capacidad: '71,000', imagen: '/images/sedes/levis.jpg' },
    { id: 'lincoln-financial-field', nombre: 'Lincoln Financial Field', ciudad: 'Filadelfia, USA', capacidad: '65,000', imagen: '/images/sedes/filadelfia.jpg' },
    { id: 'hard-rock-stadium', nombre: 'Hard Rock Stadium', ciudad: 'Miami, USA', capacidad: '65,000', imagen: '/images/sedes/miami.jpg' },
    { id: 'gillette-stadium', nombre: 'Gillette Stadium', ciudad: 'Boston, USA', capacidad: '65,000', imagen: '/images/sedes/boston.jpg' },
];


export default function SedesPage() {
    return (
        <main className="min-h-screen bg-[#f0f2f5] pt-24 pb-12 px-5">
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter text-black">
                        Ciudades <span className="text-blue-600">Sede</span>
                    </h1>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-2">16 Estadios Mundialistas</p>
                </header>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sedes.map((sede) => (
                        <Link
                            key={sede.id}
                            href={`/sedes/${sede.id}`}
                            className="block transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <CardSede {...sede} />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
