// src/data/noticias.ts


export interface Noticia {
        id: string;
        categoria: "MUNDIAL 2026" | "LIBERTADORES" | "MUNDIAL DE CLUBES" | "LALIGA" | "SELECCIONES"; // Esto ayuda a que el sitio "mute"
        titulo: string;
        resumen: string;
        contenidoLargo: string;
        imagen: string;
        fecha: string;
        autor: string;
        tags: string[];
}


export const todasLasNoticias: Noticia[] = [
        {
                id: "argentina-rumbo-al-2026",
                categoria: "MUNDIAL 2026",
                titulo: "Argentina elige Kansas City como base ",
                resumen: "El equipo de Scaloni ya prepara la logística.",
                contenidoLargo: "La selección argentina, campeona defensora y número 1 del ranking FIFA, ha confirmado oficialmente que establecerá su base camp en Kansas City (EE.UU.) durante el torneo. Utilizarán las instalaciones de entrenamiento de Sporting Kansas City (Compass Minerals National Performance Center) y se hospedarán en el área local. Argentina jugará su partido inaugural del Grupo J contra Argelia el 16 de junio en Arrowhead Stadium de Kansas City. Esto genera gran entusiasmo local, con Lionel Messi y el equipo preparándose para defender el título en un lugar que también será base de Inglaterra, lo que promete un ambiente competitivo y festivo. Es visto como una ventaja logística y de adaptación al clima/estadios del Medio Oeste.",
                imagen: "/images/noticias/argentina.jpg",
                fecha: "2026-02-15",
                autor: "Redacción Arena Pro",
                tags: ["Argentina", "Scaloni", "FIFA"]
        },
        {
                id: "albirroja-paraguay",
                categoria: "SELECCIONES", // <--- Ves? Aquí ya empezamos a mutar el sitio
                titulo: "La Albirroja regresa despues de 16 años",
                resumen: "La selección Paraguaya ya está clasificada, regresa despues de 16 años de ausencia.",
                contenidoLargo: "La Albirroja de cara al Mundial 2026. La selección Paraguaya ya está clasificada, regresa despues de 16 años de ausencia, su última participación fue en  Sudáfrica 2010 y el foco ahora está en la preparación final bajo el mando de Gustavo Alfaro, quien ha sido clave para esta clasificación y genera mucha ilusión en el país. La Asociación Paraguaya de Fútbol (APF) ha oficializado dos amistosos de alto nivel para la ventana FIFA de marzo, como parte de la preparación rumbo al torneo: 27 de marzo: Paraguay vs. Grecia (en Atenas o sede por definir). Es el primero de la preparación. El último antecedente fue victoria guaraní 2-0 antes del Mundial 2010. 31 de marzo: Paraguay vs. Marruecos (en Lens, Francia, a las 15:00 hora paraguaya). Otro rival complicado y de jerarquía (Marruecos fue semifinalista en 2022). El último cruce fue empate 0-0 en 2022.",
                imagen: "/images/noticias/albirroja.jpg",
                fecha: "2026-02-15",
                autor: "Equipo Arena Pro",
                tags: ["Albirroja", "Paraguay", "APF", "Conmebol"]
        },


        {
                id: "lamine-yamal",
                categoria: "LALIGA", // <--- Ves? Aquí ya empezamos a mutar el sitio
                titulo: "Lamine Yamal la gran estrella?",
                resumen: "La gran estrella emergente del Mundial 2026 es Lamine Yamal de España.",
                contenidoLargo: "La figura joven más destacada y la que más se menciona como la gran estrella emergente del Mundial 2026 (que arranca en junio de este año) es Lamine Yamal (España, Barcelona). Con apenas 18 años al inicio del torneo, ya es considerado por muchos expertos, medios y FIFA como el talento más diferencial y con mayor proyección para brillar y convertirse en la revelación o incluso en uno de los mejores jugadores del campeonato. Ha demostrado un nivel de élite en la Eurocopa donde fue clave para España, en la Champions y en LaLiga. Catalogado como el adolescente con más hype: dribbling imparable, visión, goles y asistencias, y una madurez brutal para su edad. España es uno de los favoritos al título, y Yamal será pieza central en el ataque junto a Pedri, Nico Williams y otros. Varios análisis lo ven capaz de tomar el torneo por asalto si está en forma.",
                imagen: "/images/noticias/lamine-yamal.jpg",
                fecha: "2026-02-18",
                autor: "Equipo Arena Pro",
                tags: ["LamineYamal", "España", "FIFA"]
        },


        {
                id: "mbappe-francia",
                categoria: "SELECCIONES",
                titulo: "Mbappé, pieza central para Francia",
                resumen: "Didier Deschamps, DT de Francia, ha defendido públicamente a Kylian Mbappé.",
                contenidoLargo: "Didier Deschamps, DT de Francia, ha defendido públicamente a Kylian Mbappé ante críticas, destacándolo como un verdadero capitán y figura indispensable para el 2026, pese a que no corre 11 km por partido como otros. Mbappé sigue siendo el eje del ataque francés, con Ousmane Dembélé y Marcus Thuram formando un trío letal que el propio Mbappé ha teaseado en redes como una roca sólida. Reportes indican que Deschamps ya tiene lockeados a Mbappé y Dembélé en sus planes para los delanteros, y hay predicciones fuertes de que podría ganar el Balón de Oro 2026 si Francia triunfa. Mbappé busca romper récords históricos en el torneo y liderar a Les Bleus a otro título tras 2018.",
                imagen: "/images/noticias/mbappe.jpg",
                fecha: "2024-05-18",
                autor: "Equipo Arena Pro",
                tags: ["Mbappe", "FIFA", "Francia"]
        },
        {
                id: "infantino-tarjeta-roja",
                categoria: "MUNDIAL 2026",
                titulo: "Infantino pide tarjeta roja a quienes se tapen la boca",
                resumen: "El presidente de la FIFA busca mayor transparencia en el campo.",
                contenidoLargo: "El presidente de la FIFA, Gianni Infantino, ha generado controversia al sugerir que los jugadores que se cubren la boca para hablar en el campo deberían ser sancionados.\n\n*EL COMUNICADO:*\n'Queremos transparencia total. No hay lugar para secretos frente a las cámaras', declaró. Esta medida busca fomentar la ética deportiva y permitir que los árbitros y la audiencia entiendan mejor las interacciones en el juego.",
                imagen: "/images/noticias/noticia-1.jpg",
                fecha: "2026-03-01",
                autor: "Redacción Arena Pro",
                tags: ["FIFA", "Reglamento", "Infantino"]
        },
        {
                id: "incertidumbre-finalissima",
                categoria: "MUNDIAL 2026",
                titulo: "Incertidumbre por la Finalissima 2026",
                resumen: "FIFA y UEFA evalúan el futuro del enfrentamiento entre campeones.",
                contenidoLargo: "la Finalissima 2026 entre Argentina y España, originalmente programada para el 27 de marzo de 2026 en el Estadio Lusail de Catar, ha sido suspendida debido a la situación de inestabilidad y conflicto bélico en la región de Oriente Medio.\n\nLa Asociación de Fútbol de Catar decidió cancelar temporalmente toda la actividad deportiva en el país ante la escalada del conflicto en la región.",
                imagen: "/images/noticias/noticia-2.jpg",
                fecha: "2026-03-01",
                autor: "Redacción Arena Pro",
                tags: ["CONMEBOL", "UEFA", "Finalissima"]
        },
        {
                id: "iran-mundial-duda",
                categoria: "SELECCIONES",
                titulo: "En duda la participación de la selección de Irán",
                resumen: "El conflicto bélico podría dejar fuera a la seleccion de Irán.",
                contenidoLargo: "La participación de la selección de Irán en el Mundial 2026 se encuentra actualmente en seria duda debido a la escalada del conflicto bélico en Oriente Medio tras ataques recientes de Estados Unidos e Israel en territorio iraní.\n\nMehdi Taj, Presidente de la Federación de Futbol de Irán, declaró el 2 de marzo de 2026 que tras los ataques sufridos no se puede esperar que la selección participe con esperanza en el torneo.",
                imagen: "/images/noticias/noticia-3.jpg",
                fecha: "2026-03-01",
                autor: "Redacción Arena Pro",
                tags: ["Irán", "FIFA", "Clasificación"]
        }
];
