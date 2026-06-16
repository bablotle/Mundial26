'use client';
import { todosLosPartidos } from '@/data/partidos';
import TablaGrupo from '@/components/TablaGrupo';

// 1. Mantenemos la estructura base limpia (con valores iniciales en 0)
const estructuraGruposBase = [
    {
        nombre: "Grupo A",
        equipos: [
            { id:"mexico", nombre: "México", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/mexico.png" },
            { id:"sudafrica", nombre: "Sudáfrica", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/sudafrica.png" },
            { id:"corea_sur", nombre: "Corea del Sur", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/corea-del-sur.png" },
            { id:"republica_checa", nombre: "República Checa", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/republica-checa.png" },
        ]
    },
    {
        nombre: "Grupo B",
        equipos: [
            { id:"canada", nombre: "Canadá", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/canada.png" },
            { id:"qatar", nombre: "Qatar", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/qatar.png" },
            { id:"suiza", nombre: "Suiza", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/suiza.png" },
            { id:"bosnia", nombre: "Bosnia", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/bosnia.png" },
        ]
    },
    {
        nombre: "Grupo C",
        equipos: [
            { id:"brasil", nombre: "Brasil", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/brasil.png" },
            { id:"marruecos", nombre: "Marruecos", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/marruecos.png" },
            { id:"haiti", nombre: "Haití", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/haiti.png" },
            { id:"escocia", nombre: "Escocia", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/escocia.png" },
        ]
    },
    {
        nombre: "Grupo D",
        equipos: [
            { id:"estados_unidos", nombre: "Estados Unidos", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/usa.png" },
            { id:"paraguay", nombre: "Paraguay", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/paraguay.png" },
            { id:"australia", nombre: "Australia", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/australia.png" },
            { id:"turquia", nombre: "Turquía", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/turquia.png" },
        ]
    },
    {
        nombre: "Grupo E",
        equipos: [
            { id:"alemania", nombre: "Alemania", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/alemania.png" },
            { id:"costa_de_marfil", nombre: "Costa de Marfil", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/costa-de-marfil.png" },
            { id:"ecuador", nombre: "Ecuador", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/ecuador.png" },
            { id:"curazao", nombre: "Curazao", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/curazao.png" },
        ]
    },
    {
        nombre: "Grupo F",
        equipos: [
            { id:"paises_bajos", nombre: "Países Bajos", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/paises-bajos.png" },
            { id:"japon", nombre: "Japón", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/japon.png" },
            { id:"tunez", nombre: "Túnez", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/tunez.png" },
            { id:"suecia", nombre: "Suecia", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/suecia.png" },
        ]
    },
    {
        nombre: "Grupo G",
        equipos: [
            { id:"belgica", nombre: "Bélgica", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/belgica.png" },
            { id:"egipto", nombre: "Egipto", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/egipto.png" },
            { id:"iran", nombre: "Irán", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/iran.png" },
            { id:"nueva_zelanda", nombre: "Nueva Zelanda", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/nueva-zelanda.png" },
        ]
    },
    {
        nombre: "Grupo H",
        equipos: [
            { id:"espana", nombre: "España", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/espana.png" },
            { id:"cabo_verde", nombre: "Cabo Verde", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/cabo-verde.png" },
            { id:"arabia_saudita", nombre: "Arabia Saudita", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/arabia-saudita.png" },
            { id:"uruguay", nombre: "Uruguay", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uruguay.png" },
        ]
    },
    {
        nombre: "Grupo I",
        equipos: [
            { id:"francia", nombre: "Francia", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/francia.png" },
            { id:"senegal", nombre: "Senegal", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/senegal.png" },
            { id:"noruega", nombre: "Noruega", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/noruega.png" },
            { id:"irak", nombre: "Irak", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/irak.png" },
        ]
    },
    {
        nombre: "Grupo J",
        equipos: [
            { id:"argentina", nombre: "Argentina", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/argentina.png" },
            { id:"argelia", nombre: "Argelia", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/argelia.png" },
            { id:"austria", nombre: "Austria", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/austria.png" },
            { id:"jordania", nombre: "Jordania", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/jordania.png" },
        ]
    },
    {
        nombre: "Grupo K",
        equipos: [
            { id:"portugal", nombre: "Portugal", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/portugal.png" },
            { id:"uzbekistan", nombre: "Uzbekistán", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uzbekistan.png" },
            { id:"colombia", nombre: "Colombia", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/colombia.png" },
            { id:"congo", nombre: "Congo", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/congo.png" },
        ]
    },
    {
        nombre: "Grupo L",
        equipos: [
            { id:"inglaterra", nombre: "Inglaterra", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/inglaterra.png" },
            { id:"croacia", nombre: "Croacia", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/croacia.png" },
            { id:"ghana", nombre: "Ghana", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/ghana.png" },
            { id:"panama", nombre: "Panamá", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/panama.png" },
        ]
    }
];

export default function GruposPage() {
    
    // 2. PROCESAMIENTO AUTOMÁTICO DE ESTADÍSTICAS
    const gruposCalculados = estructuraGruposBase.map((grupo) => {
        // Clonamos los equipos del grupo para evitar mutaciones extrañas
        const equiposActualizados = grupo.equipos.map(equipo => ({ ...equipo }));

        // Recorremos todos los partidos registrados en data/partidos.ts
        todosLosPartidos.forEach((partido) => {
            // Solo procesamos partidos de la fase de grupos que ya tengan un resultado cargado
            if (partido.fase === 'Grupos' && partido.golesLocal !== undefined && partido.golesVisitante !== undefined) {
                
                // Buscamos si el equipo local pertenece a este grupo
                const local = equiposActualizados.find(e => e.nombre.toLowerCase() === partido.local.toLowerCase() || e.id === partido.id);
                // Buscamos si el equipo visitante pertenece a este grupo
                const visitante = equiposActualizados.find(e => e.nombre.toLowerCase() === partido.visitante.toLowerCase() || e.id === partido.id);

                if (local && visitante) {
                    // Sumamos partido jugado a ambos
                    local.pj += 1;
                    visitante.pj += 1;

                    // Calculamos diferencia de goles
                    local.dg += (partido.golesLocal - partido.golesVisitante);
                    visitante.dg += (partido.golesVisitante - partido.golesLocal);

                    // Repartimos los puntos según el resultado
                    if (partido.golesLocal > partido.golesVisitante) {
                        local.pts += 3; // Ganó Local
                    } else if (partido.golesLocal < partido.golesVisitante) {
                        visitante.pts += 3; // Ganó Visitante
                    } else {
                        local.pts += 1; // Empate
                        visitante.pts += 1;
                    }
                }
            }
        });

        // 3. ORDENACIÓN AUTOMÁTICA DE LA TABLA (Clasificación de Posiciones)
        // Se ordena primero por Puntos, si empatan, define la Diferencia de Goles (DG)
        equiposActualizados.sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            return b.dg - a.dg;
        });

        return {
            ...grupo,
            equipos: equiposActualizados
        };
    });

    return (
        <main className="min-h-screen bg-[#f8f9fa] pt-24 pb-12 px-5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gruposCalculados.map((grupo, index) => (
                    <TablaGrupo
                        key={index}
                        nombre={grupo.nombre}
                        equipos={grupo.equipos}
                    />
                ))}
            </div>
        </main>
    );
}