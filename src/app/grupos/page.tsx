import { grupos } from '@/data/grupos';
import TablaGrupo from '@/components/TablaGrupo';

const gruposData = [
    {
        nombre: "Grupo A",
        equipos: [
            { id:"mexico", nombre: "México", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/mexico.png" },
            { id:"sudafrica", nombre: "Sudáfrica", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/sudafrica.png" },
            { id:"corea_sur", nombre: "Corea del Sur", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/corea-del-sur.png" },
            { id:"tbd", nombre: "Playoff UEFA D", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uefa.png" },
        ]
    },
    {
        nombre: "Grupo B",
        equipos: [
            { id:"canada", nombre: "Canadá", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/canada.png" },
            { id:"qatar", nombre: "Qatar", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/qatar.png" },
            { id:"suiza", nombre: "Suiza", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/suiza.png" },
            { id:"tbd", nombre: "Playoff UEFA A", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uefa.png" },
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
            { id:"tbd", nombre: "Playoff UEFA C", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uefa.png" },
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
            { id:"tbd", nombre: "Playoff UEFA B", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uefa.png" },
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
            { id:"tbd", nombre: "Playoff 2", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uefa.png" },
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
            { id:"tbd", nombre: "Playoff 1", pj: 0, dg: 0, pts: 0, bandera: "/images/banderas/uefa.png" },
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
    return (
        <main className="min-h-screen bg-[#f8f9fa] pt-24 pb-12 px-5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gruposData.map((grupo, index) => (
                    /* IMPORTANTE: El nombre de la prop debe ser 'equipos' */
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
