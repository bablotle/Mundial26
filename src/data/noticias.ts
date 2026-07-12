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
                id: "jornada-28",
                categoria: "MUNDIAL 2026",
                titulo: "Argentina e Inglaterra pasan de ronda.",
                resumen: "Inglaterra vence a Noruega 2-1 y se mete a las Semifinales.",
                contenidoLargo: `Los cartos de final del 11 de julio de 2026:
                🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra 2 - 1 Noruega 🇳🇴
                Inglaterra clasificó en tiempo extra con un gol clave de Jude Bellingham.
                🇦🇷 Argentina 3 - 1 Suiza 🇨🇭
                Argentina avanzó en tiempo extra con goles de Mac Allister, Álvarez y Martínez.Próximo paso: Inglaterra y Argentina se enfrentarán en las semifinales el miércoles 15 de julio.`,
                imagen: "/images/noticias/noticia-36.jpg",
                fecha: "2026-07-11",               
                autor: "Redacción Mil Goles",
                tags: ["Inglaterra", "Argentina", "Semifinales", "FIFA"]
                },
        {
                id: "jornada-27",
                categoria: "MUNDIAL 2026",
                titulo: "España logra la victoria ante Bélgica 2-1.",
                resumen: "España se mete a las Semifinales.",
                contenidoLargo: `España venció 2-1 a Bélgica gracias a las altas calificaciones de su mediocampo y la efectividad de sus cambios.
                Puntos clave de las notas
                La figura: Mikel Merino (9) fue el mejor tras entrar desde el banco y anotar el gol del triunfo al minuto 88.
                El motor: Rodri (8) y Fabián Ruiz (8) dominaron el mediocampo español con recuperación y el primer gol del partido.
                El muro belga: Thibaut Courtois (8) fue el más destacado de su equipo con paradas clave antes de lesionarse.
                El punto débil: El portero suplente belga Senne Lammens (5) recibió la peor nota tras el error que costó el partido.`,
                imagen: "/images/noticias/noticia-35.jpg",
                fecha: "2026-07-10",               
                autor: "Redacción Mil Goles",
                tags: ["España", "Bélgica", "Yamal", "FIFA"]
                },
        {
                id: "jornada-26",
                categoria: "MUNDIAL 2026",
                titulo: "Francia logra la victoria ante Marruecos 2-0.",
                resumen: "Francia es el primer clasificado a Semifinales.",
                contenidoLargo: `Francia venció 2-0 a Marruecos el 9 de julio de 2026, eliminándola en los cuartos de final de la Copa del Mundo.
                Puntos clave del partido
                Sede: Estadio Boston, Massachusetts.
                Primer tiempo: Kylian Mbappé falló un penal al minuto 27.
                Goles: Mbappé anotó al minuto 60 y Ousmane Dembélé al 66.
                Resultado: Francia avanzó a semifinales y Marruecos quedó fuera.`,
                imagen: "/images/noticias/noticia-34.jpg",
                fecha: "2026-07-9",               
                autor: "Redacción Mil Goles",
                tags: ["Francia", "Marruecos", "Mbappe", "FIFA"]
        },
        {
                id: "jornada-25",
                categoria: "MUNDIAL 2026",
                titulo: "Suiza y Argentina pasan a Cuartos.",
                resumen: "Suiza se lleva la victoria en tanda de penales 0-0 (4-3) ante Colombia.",
                contenidoLargo: `Partidos de octavos de final
                🇦🇷 Argentina 3 - 2 Egipto 🇪🇬
                Argentina avanzó tras una histórica remontada en Atlanta, con goles de Cuti Romero, Leo Messi y Enzo Fernández, superando un 0-2 en contra.
                🇸🇯 Suiza 0 (4) - (3) 0 Colombia 🇨🇴
                Suiza clasificó a cuartos de final al imponerse en la tanda de penales tras empatar sin goles en los 120 minutos en Vancouver.`,
                imagen: "/images/noticias/noticia-33.jpg",
                fecha: "2026-07-8",               
                autor: "Redacción Mil Goles",
                tags: ["Suiza", "Argentina", "Messi", "FIFA"]
        },
        {
                id: "jornada-24",
                categoria: "MUNDIAL 2026",
                titulo: "Bélgica y España pasan a Cuartos.",
                resumen: "España vence a Portugal 1-0 metiendo el gol al minuto 90+1.",
                contenidoLargo: `España y Bélgica clasificaron ayer a cuartos de final del Mundial tras eliminar a Portugal y Estados Unidos respectivamente.
                Claves de la jornada
                🇪🇦 España 1 - 0 Portugal 🇵🇹
                Un gol agónico de Mikel Merino en el minuto 91 selló el pase español y marcó la despedida definitiva de Cristiano Ronaldo de los mundiales.
                🇧🇪 Bélgica 4 - 1 Estados Unidos 🇺🇲
                Los belgas golearon con doblete de De Ketelaere y tantos de Vanaken y Lukaku. Descontó Tillman para el último anfitrión eliminado.El próximo partido de cuartos de final será un choque directo entre España y Bélgica.`, imagen: "/images/noticias/noticia-32.jpg",
                fecha: "2026-07-7",
                autor: "Redacción Mil Goles",
                tags: ["España", "Bélgica", "Cristiano", "FIFA"]
        },
        {
                id: "jornada-24",
                categoria: "MUNDIAL 2026",
                titulo: "Inglaterra y Noruega pasan a Cuartos.",
                resumen: "Bellingham anota 2 de los 3 goles y le da la victoria a Inglaterra 3-2 ante México.",
                contenidoLargo: `Resumen de la Jornada:
                🇳🇴 Noruega 2 - 1 Brasil 🇧🇷
                Un histórico doblete de Erling Haaland le dio el pase a los europeos en Nueva Jersey. Brasil descontó sobre el final con un penal de Neymar, pero sumó una nueva eliminación consecutiva ante rivales del viejo continente.
                🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra 3 - 2 México 🇲🇽
                El conjunto inglés venció al coanfitrión en el Estadio Azteca. Jude Bellingham anotó un doblete y Harry Kane amplió de penal. México reaccionó con goles de Julián Quiñones y Raúl Jiménez, pero no le alcanzó pese a jugar con un hombre más por la expulsión de Jarell Quansah.`,
                imagen: "/images/noticias/noticia-31.jpg",
                fecha: "2026-07-6",
                autor: "Redacción Mil Goles",
                tags: ["Noruega", "Inglatera", "México", "FIFA"]
        },
        {
                id: "jornada-23",
                categoria: "MUNDIAL 2026",
                titulo: "Marruecos pasa a Cuartos venciendo 3-0 a Canada.",
                resumen: "Francia vence 1-0 a Paraguay y pasan a la siguiente ronda de Cuartos de Final.",
                contenidoLargo: `Octavos de Final del sábado 4 de julio:
                🇲🇦 Marruecos 3 - 0 Canadá 🇨🇦
                Los goles africanos fueron anotados por Azzedine Ounahi (doblete) y Soufiane Rahimi.El jugador del Real Madrid, Brahim Díaz, aportó dos asistencias.Con este resultado, el anfitrión Canadá quedó eliminado.
                🇫🇷 Francia 1 - 0 Paraguay 🇵🇾
                El único gol del encuentro lo marcó Kylian Mbappé desde el punto penal en el minuto 70.La falta penal fue recibida por Desiré Doué tras la revisión del VAR.Francia selló su pase a la siguiente fase y eliminar de esta manera a la Albirroja.`,
                imagen: "/images/noticias/noticia-30.jpg",
                fecha: "2026-07-5",
                autor: "Redacción Mil Goles",
                tags: ["Francia", "Marruecos", "Cuartos", "FIFA"]
        },
        {
                id: "jornada-23",
                categoria: "MUNDIAL 2026",
                titulo: "Colombia pasa a Octavos venciendo 1-0 a Ghana.",
                resumen: "Argentina, Egipto y Colombia pasan a la siguiente ronda de Octavos de Final.",
                contenidoLargo: `Detalles destacados de la jornada:
                🇦🇺 Australia 1-1 (P 2-4) Egipto 🇪🇬
                Egipto hizo historia al ganar su primera eliminatoria directa en un Mundial tras superar a Australia desde los once metros, donde convirtieron todos sus cobros (incluido un gol a lo Panenka de Mohamed Salah).
                🇦🇷 Argentina 2-2 (TE 3-2) Cabo Verde 🇨🇼
                Argentina sufrió más de lo esperado en Miami frente al debutante Cabo Verde. Lionel Messi abrió el marcador, pero el conjunto africano forzó la prórroga. Un autogol provocado por Cristian "Cuti" Romero selló el pase de la Albiceleste.
                🇨🇴 Colombia 1-0 Ghana 🇬🇭
                Colombia aseguró el último boleto disponible al derrotar por la mínima a Ghana gracias a un tempranero gol de Jhon Arias en Kansas City.`,
                imagen: "/images/noticias/noticia-29.jpg",
                fecha: "2026-07-4",
                autor: "Redacción Mil Goles",
                tags: ["Argentina", "Colombia", "Egipto", "FIFA"]
        },
        {
                id: "jornada-22",
                categoria: "MUNDIAL 2026",
                titulo: "Suiza vence 2-0 a Argelia y pasa a Octavos.",
                resumen: "Portugal, España y Suiza pasan a la siguiente ronda de Octavos de Final.",
                contenidoLargo: `Partidos de los dieciseisavos de final disputados el 2 de julio:
                🇪🇸 España 3 - 0 Austria 🇦🇹
                España dominó por completo el encuentro en Los Ángeles y firmó su mejor actuación del torneo. Mikel Oyarzabal fue la gran figura al marcar un doblete (36' y 89'), complementado por un gol de cabeza de Pedro Porro (66'). Con este resultado, el portero Unai Simón alcanzó un récord de 519 minutos consecutivos sin encajar goles en mundiales, consolidando la sólida defensa de "La Roja" que aún no recibe anotaciones en esta cita.
                🇵🇹 Portugal 2 - 1 Croacia 🇭🇷
                En un partido repleto de drama y alta tensión en Toronto, Portugal logró remontar tras empezar perdiendo por un gol de Ivan Perišić. Cristiano Ronaldo empató el marcador desde el punto de penal en el minuto 68 y el ingresado Gonçalo Ramos anotó el gol de la victoria en el tiempo de descuento (90+1'). El final estuvo marcado por la polémica cuando el VAR anuló un gol agónico de Croacia por fuera de juego posicional, decretando la eliminación de la selección de Luka Modrić.
                🇨🇭 Suiza 2 - 0 Argelia 🇩🇿
                Suiza rompió una racha histórica de 88 años sin ganar un partido de eliminación directa en un Mundial al imponerse con autoridad a Argelia en Vancouver. Un gol tempranero de Breel Embolo a los 10 minutos y otro golpe de Dan Ndoye a los 46 segundos de iniciado el segundo tiempo definieron el choque. El combinado suizo controló defensivamente el resto del partido, anulando los intentos del conjunto africano comandado por Riyad Mahrez.`,
                imagen: "/images/noticias/noticia-28.jpg",
                fecha: "2026-07-3",
                autor: "Redacción Mil Goles",
                tags: ["Suiza", "Portugal", "España", "FIFA"]
        },
        {
                id: "jornada-21",
                categoria: "MUNDIAL 2026",
                titulo: "Inglaterra le da la vuelta 2-1 a RD Congo y pasa a Octavos.",
                resumen: "Estados Unidos, Bélgica e Inglaterra pasan a la siguiente ronda de Octavos de Final.",
                contenidoLargo: `Partidos del 1 de Julio - Dieciseisavos:
                🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra 2 - 1 RD Congo 🇨🇩
                Inglaterra sufrió en Atlanta tras recibir un gol tempranero de Brian Cipenga a los 6 minutos. La RD del Congo defendió su ventaja con un gran nivel de su arquero, pero la jerarquía británica pesó en el cierre. Un doblete de Harry Kane (goles a los 75' y 86') rescató el triunfo y la clasificación para el equipo de Thomas Tuchel.
                🇧🇪 Bélgica 3 - 2 Senegal 🇸🇳
                Senegal dio la sorpresa en Seattle poniéndose en ventaja por 2-0 con goles de Habib Diarra (24') e Ismaïla Sarr (47'). Cuando parecía sentenciado, Bélgica revivió con un gol de Lukaku al 86' y el empate de Youri Tielemans al 89'. En la prórroga, el propio Tielemans anotó el gol del triunfo de penal al minuto 125 tras una revisión del VAR.
                🇺🇸 Estados Unidos 2 - 0 Bosnia y Herzegovina 🇧🇦
                El anfitrión avanzó a octavos en Santa Clara. Folarin Balogun abrió el marcador al minuto 45, pero en el segundo tiempo pasó de héroe a villano al ser expulsado con roja directa al 64'. A pesar de jugar con diez hombres, el equipo de Mauricio Pochettino resistió los ataques bosnios y liquidó el partido con un golazo de tiro libre de Malik Tillman al 82'.`,
                imagen: "/images/noticias/noticia-27.jpg",
                fecha: "2026-07-2",
                autor: "Redacción Mil Goles",
                tags: ["Inglaterra", "Bélgica", "USA", "FIFA"]
        },
        {
                id: "jornada-20",
                categoria: "MUNDIAL 2026",
                titulo: "México elimina a Ecuador 2-0 .",
                resumen: "Noruega, Francia y México pasan a la siguiente ronda de Octavos de Final.",
                contenidoLargo: `Partidos del 30 de Junio - Dieciseisavos:
                Costa de Marfil 1 - 2 Noruega
                El equipo africano dominó el juego, pero la contundencia de Antonio Nusa y un gol decisivo de Erling Haaland al minuto 86 le dieron la clasificación a los europeos.
                Francia 3 - 0 Suecia
                Superioridad absoluta de los galos con un doblete de Kylian Mbappé y un gol de Bradley Barcola, sellando un cómodo pase a la siguiente ronda.
                México 2 - 0 Ecuador
                En un Estadio Azteca encendido, el Tri resolvió el encuentro en la primera media hora con anotaciones de Julián Quiñones y Raúl Jiménez.`,
                imagen: "/images/noticias/noticia-26.jpg",
                fecha: "2026-07-1",
                autor: "Redacción Mil Goles",
                tags: ["México", "Francia", "Noruega", "FIFA"]
        },
        {
                id: "jornada-19",
                categoria: "MUNDIAL 2026",
                titulo: "Paraguay elimina en tanda de penales a Alemania.",
                resumen: "Brasil, Marruecos y Paraguay pasan a la siguiente ronda de Octavos de Final.",
                contenidoLargo: `El resumen de los partidos del 29 de junio:
                Brasil 2-1 Japón
                Los asiáticos sorprendieron con gol de Kaishu Sano al minuto 29. La Canarinha reaccionó en el segundo tiempo con gol de Casemiro al 56' y selló la remontada con un agónico gol de Gabriel Martinelli al 90+5'.
                Paraguay 1-1 (4-3 pen.) Alemania
                La gran sorpresa del torneo. Julio Enciso adelantó a la Albirroja de cabeza al 42', mientras que Kai Havertz empató para los alemanes al 54'. Tras mantener la igualdad, el arquero y los ejecutores paraguayos sentenciaron la histórica eliminación alemana por la vía penal.
                Marruecos 1-1 (3-2 pen.) Países Bajos
                Cody Gakpo anotó para adelantar a la Oranje al 72'. Sin embargo, Issa Diop empató de cabeza al 91' para mandar el partido al tiempo extra. En la tanda de penales, el arquero Bono volvió a ser figura tapando disparos clave para el pase de los "Leones del Atlas".`,
                imagen: "/images/noticias/noticia-25.jpg",
                fecha: "2026-06-30",
                autor: "Redacción Mil Goles",
                tags: ["Paraguay", "Marruecos", "Brasil", "FIFA"]
        },
        {
                id: "jornada-18",
                categoria: "MUNDIAL 2026",
                titulo: "Canada se lleva la victoria 1-0 ante Sudáfrica.",
                resumen: "La seleccion de Canada hace historia y pasa a 8avos de final por primera vez.",
                contenidoLargo: `Canadá venció 1-0 a Sudáfrica en el partido correspondiente a los dieciseisavos de final de la Copa Mundial de Fútbol de 2026. 
                El encuentro se disputó el domingo 28 de junio de 2026 en Los Ángeles.
                El gol decisivo: El capitán canadiense, Stephen Eustáquio, anotó de manera agónica en el minuto 92 con un potente derechazo desde la frontal del área tras un despeje defensivo defectuoso.
                Histórico: Con este resultado, el conjunto norteamericano se transformó en el primer clasificado a los octavos de final del torneo, logrando superar una fase eliminatoria mundialista por primera vez en su historia.
                Incidencias: El partido marcó el debut en este Mundial de la estrella Alphonso Davies, quien ingresó al minuto 75 recuperado de una lesión. El arquero sudafricano Ronwen Williams fue la gran figura de su equipo, evitando una derrota mayor.`,
                imagen: "/images/noticias/noticia-24.jpg",
                fecha: "2026-06-29",
                autor: "Redacción Mil Goles",
                tags: ["Canada", "Sudáfrica", "16avos", "FIFA"]
        },
        {
                id: "jornada-17",
                categoria: "MUNDIAL 2026",
                titulo: "Bélgica golea 5-1 a Nueva Zelanda.",
                resumen: "Argelia y Austria empatan a 3 goles y ambos pasan a 16avos.",
                contenidoLargo: `Lo más destacado de la jornada
                Grupo L
                Inglaterra venció 2-0 a Panamá con una gran actuación de Jude Bellingham y un gol histórico de Harry Kane, quien se convirtió en el máximo goleador inglés en Mundiales.
                Croacia sufrió pero derrotó 2-1 a Ghana sobre la hora con gol de Nikola Vlašić; ambos avanzaron de ronda junto a los ingleses.
                Grupo K
                Colombia y Portugal empataron 0-0 en un duelo estratégico que le dio el liderato del sector a los sudamericanos.
                República Democrática del Congo remontó de forma dramática y venció 3-1 a Uzbekistán para sellar su pase a dieciseisavos.
                Grupo J
                Argentina venció 3-1 a Jordania, cerrando una fase de grupos perfecta con 9 puntos.
                Lionel Messi ingresó desde el banquillo para anotar otro gol y estirar su racha histórica.
                Argelia y Austria regalaron un electrizante empate 3-3 con gol en el descuento de Saša Kalajdžić, dándole la clasificación a ambas selecciones.`,
                imagen: "/images/noticias/noticia-23.jpg",
                fecha: "2026-06-28",
                autor: "Redacción Mil Goles",
                tags: ["Portugal", "Cristiano", "James", "FIFA"]
        },
        {
                id: "jornada-16",
                categoria: "MUNDIAL 2026",
                titulo: "Dembélé estampa triplete y Francia gana 4-1 a Noruega.",
                resumen: "Uruguay queda eliminado del mundial ante la derrota contra España.",
                contenidoLargo: `Partidos disputados por grupo:
                Grupo H
                España 1 - 0 Uruguay
                España se quedó con el liderato del grupo con gol de Álex Baena, sentenciando la eliminación de la Celeste.
                Cabo Verde 0 - 0 Arabia Saudita
                Un empate sin goles le bastó a Cabo Verde para asegurar el segundo lugar y hacer historia avanzando a la siguiente fase.
                Grupo I
                Francia 4 - 1 Noruega
                Francia se adueñó del liderato del grupo con una contundente victoria sobre los noruegos.
                Senegal 5 - 0 Irak
                Goleada categórica de los Leones de Teranga para cerrar la fase de grupos.
                Grupo G, K y otros
                Bélgica 5 - 1 Nueva Zelanda
                Bélgica consiguió el liderato del grupo tras arrollar a una Nueva Zelanda que quedó eliminada. 
                Egipto 1 - 1 Irán
                Egipto aseguró su pase histórico a los dieciseisavos de final tras un agónico e intenso empate que lo dejó en el segundo puesto por diferencia de goles.`,
                imagen: "/images/noticias/noticia-22.jpg",
                fecha: "2026-06-27",
                autor: "Redacción Mil Goles",
                tags: ["Dembélé.", "Francia", "Noruega", "FIFA"]
        },
        {
                id: "jornada-15",
                categoria: "MUNDIAL 2026",
                titulo: "Ecuador le gana 2-1 a Alemania.",
                resumen: "Paraguay y Australia empatan a 0 y Turquía le gana a Estados Unidos 3-2.",
                contenidoLargo: `Los resultados de los seis partidos disputados el jueves 25 de junio de 2026, de grupos de las zonas D, E y F. 
                Grupo E
                Ecuador 2-1 Alemania
                Histórica victoria de la selección ecuatoriana con goles de Nilson Angulo y Gonzalo Plata, metiéndose a la siguiente ronda como uno de los mejores terceros.
                Curazao 0-2 Costa de Marfil
                Con un doblete de Nicolas Pépé, los africanos sellaron su pase a los dieciseisavos de final. 
                Grupo F
                Túnez 1-3 Países Bajos
                El equipo neerlandés aseguró el liderato de su sector tras vencer cómodamente a los tunecinos.
                Japón 1-1 Suecia
                Un empate que terminó beneficiando y clasificando a ambas escuadras. 
                Grupo D
                Turquía 3-2 Estados Unidos
                Un gol agónico de Kaan Ayhan le dio la victoria a los turcos, cortando el paso perfecto de los norteamericanos. 
                Paraguay 0-0 Australia
                Un duelo cerrado sin anotaciones que confirmó el avance de los australianos directos y dejó a los guaraníes a la espera de los mejores terceros.`,
                imagen: "/images/noticias/noticia-21.jpg",
                fecha: "2026-06-26",
                autor: "Redacción Mil Goles",
                tags: ["Paraguay.", "Ecuador", "Alemania", "FIFA"]
        },
        {
                id: "jornada-14",
                categoria: "MUNDIAL 2026",
                titulo: "México derrota 3-0 a Republica Checa.",
                resumen: "Doblete de Vinicius Jr. le dan a Brasil la victoria y el pase a los dieciseisavos.",
                contenidoLargo: `Los resultados de la última jornada de los grupos A, B y C
                Grupo A
                México 3 - 0 República Checa
                Con goles de Mateo Chávez, Julián Quiñones y Álvaro Fidalgo, le dan la victoria al TRI y avanza con puntaje perfecto con 9 puntos.
                Sudáfrica 1 - 0 Corea del Sur
                Resultado a favor de Sudáfrica con el gol de Thapelo Maseko, un triunfo histórico para la clasificación directa de los africanos.
                Grupo B
                Suiza 2 - 1 Canadá
                Suiza clasificó en el primer lugar de la zona, ganando su tercer partido con goles remontados por la experiencia helvética.
                Bosnia y Herzegovina 3 - 1 Catar
                Alajbegovic, Mahmic y un autogol; descontó Al-Haydos, le dieron la victoria a Bosnia
                Grupo C
                Brasil 3 - 0 Escocia
                Doblete de Vinícius Júnior y gol de Matheus Cunha, la Canarinha avanzó sin contratiempos como puntera.
                Marruecos 4 - 2 Haití
                Goles marroquíes de Achraf Hakimi, Ismael Saibari, Soufiane Rahimi y Gessime Yassine.`,
                imagen: "/images/noticias/noticia-20.jpg",
                fecha: "2026-06-24",
                autor: "Redacción Mil Goles",
                tags: ["Vinicius Jr.", "México", "Sudáfrica", "FIFA"]
        },
        {
                id: "jornada-13",
                categoria: "MUNDIAL 2026",
                titulo: "Cristiano Ronaldo anota doblete para Portugal.",
                resumen: "Colombia se lleva la victoria ante RD Congo en el estadio de Guadalajara.",
                contenidoLargo: `La jornada del 23 de junio dejó los siguientes datos clave:
                Colombia clasificada:
                Venció por la mínima a RD Congo en Guadalajara, aseguró el primer lugar del Grupo K con 6 puntos y avanzó a dieciseisavos de final.
                Goleada y récord luso: Portugal aplastó 5-0 a Uzbekistán. Cristiano Ronaldo marcó un doblete y se convirtió en el único jugador de la historia en anotar en seis Mundiales.
                Freno a Inglaterra: Los dirigidos por Tuchel empataron 0-0 ante la férrea defensa de Ghana en Boston, dejando la cima del Grupo L compartida con 4 puntos cada uno.
                Panamá eliminada: Croacia derrotó 1-0 a la selección canalera, dejándola fuera del torneo sin unidades y manteniendo vivas las esperanzas croatas.`,
                imagen: "/images/noticias/noticia-19.jpg",
                fecha: "2026-06-24",
                autor: "Redacción Mil Goles",
                tags: ["Cristiano", "Portugal", "Inglaterra", "FIFA"]
        },
        {
                id: "jornada-12",
                categoria: "MUNDIAL 2026",
                titulo: "Noruega se impone 3-2 contra Senegal.",
                resumen: "Messi con 2 goles le da la victoria a la Argentina ante Austria.",
                contenidoLargo: `Grupo J
                Argentina 2 - 0 Austria
                Goles de Lionel Messi (38' y 95'), quien se convirtió en el máximo goleador histórico de los mundiales. Argentina selló su clasificación a 16vos de final.
                Jordania 1 - 2 Argelia
                Goles de Nizar Al-Rashdan (36') para Jordania; Nadhir Benbouali (69') y Amine Gouiri (82') para la remontada argelina.
                Grupo I
                Francia 3 - 0 Irak
                Goles de Kylian Mbappé (por duplicado) y Ousmane Dembélé. El partido sufrió un retraso debido a una tormenta eléctrica en Filadelfia. Francia aseguró su pase a la siguiente ronda.
                Noruega 3 - 2 Senegal
                El delantero Erling Haaland marcó un doblete y Marcus Pedersen aportó un tanto para los europeos. Ismaila Sarr descontó con dos goles para el conjunto africano. Noruega también clasificó a 16vos de final.`,
                imagen: "/images/noticias/noticia-18.jpg",
                fecha: "2026-06-23",
                autor: "Redacción Mil Goles",
                tags: ["Haaland", "Mbappe", "Messi", "FIFA"]
        },
        {
                id: "jornada-11",
                categoria: "MUNDIAL 2026",
                titulo: "España 4-0 ante Arabia Saudita.",
                resumen: "2-2 termino el partido entre Uruguay y Cabo Verde.",
                contenidoLargo: ` Dos empates frustrantes para los favoritos, una remontada histórica y una goleada revitalizante.
                España 4 - 0 Arabia Saudita
                Tras un flojo debut, la selección de España despertó con una contundente goleada liderada por un tanto tempranero de Lamine Yamal y un doblete de Mikel Oyarzabal.
                Uruguay 2 - 2 Cabo Verde
                En un partido ríspido jugado en Miami, la selección de Uruguay rescató el empate tras ir perdiendo por dos costosos errores defensivos aprovechados por los africanos.
                Bélgica 0 - 0 Irán
                Los belgas volvieron a decepcionar y sufrieron la expulsión de Amadou Onana, quedando condicionados ante un conjunto iraní al que la tecnología VAR le anuló un gol por fuera de juego.
                Egipto 3 - 1 Nueva Zelanda
                El conjunto oceánico sorprendió abriendo el marcador al minuto 15, pero la escuadra de Egipto, guiada por una gran actuación de Mohamed Salah, reaccionó con fuerza en el complemento para remontar el marcador.`,
                imagen: "/images/noticias/noticia-17.jpg",
                fecha: "2026-06-22",
                autor: "Redacción Mil Goles",
                tags: ["Yamal", "España", "Uruguay", "FIFA"]
        },
        {
                id: "jornada-10",
                categoria: "MUNDIAL 2026",
                titulo: "Alemania paso a los dieciseisavos de final.",
                resumen: "Países Bajos y Japón consiguieron goleadas contundentes.",
                contenidoLargo: `Alemania avanzó: Venció 2-1 a Costa de Marfil con doblete agónico de Deniz Undav.
                Histórico empate: Curazao aguantó el 0-0 ante Ecuador gracias a 15 atajadas del arquero Eloy Room.
                Goleada neerlandesa: Países Bajos aplastó 5-1 a Suecia y extendió su invicto histórico en fases de grupos.
                Fiesta japonesa: Japón goleó 4-0 a Túnez en el partido número 1,000 en la historia de los Mundiales.`,
                imagen: "/images/noticias/noticia-16.jpg",
                fecha: "2026-06-21",
                autor: "Redacción Mil Goles",
                tags: ["Alemania", "Países Bajos", "Japón", "FIFA"]
        },
        {
                id: "jornada-9",
                categoria: "MUNDIAL 2026",
                titulo: "Paraguay vence a Turquía 1-0.",
                resumen: "Estados Unidos vuelve a llevarse la victoria y le gana a Australia 2-0.",
                contenidoLargo: `Los Grupos C y D, finalizaron con los siguientes resultados:
                Grupo C
                Brasil 3-0 Haití
                Goles: Matheus Cunha (23', 36') y Vinícius Jr. (45+3').
                Haití quedó matemáticamente eliminado.
                Marruecos 1-0 Escocia
                Gol: Ismael Saibari (71 segundos).
                Grupo D
                Estados Unidos 2-0 Australia
                Goles: Autogol de Cameron Burgess (11') y Alex Freeman (43').
                Estados Unidos clasificó a los dieciseisavos de final.
                Paraguay 1-0 Turquía
                Gol: Matías Galarza, anota el gol mas rapidi del mundial a los 64 segundos.
                Turquía quedó matemáticamente eliminada. 
                Además, Miguel Almirón (Paraguay) fue el primer expulsado bajo la 'Ley Vínicius-Prestianni'.`,
                imagen: "/images/noticias/noticia-15.jpg",
                fecha: "2026-06-20",
                autor: "Redacción Mil Goles",
                tags: ["Paraguay", "Estados Unidos", "Brasil", "FIFA"]
        }, {
                id: "jornada-8",
                categoria: "MUNDIAL 2026",
                titulo: "México se lleva la victoria 1-0 ante Corea.",
                resumen: "Canada goleó 6-0 a la selección de Qatar en los partidos de la segunda fecha.",
                contenidoLargo: `Resultados en la segunda fecha de la fase de grupos del Mundial 2026:
                Grupo A:
                México 1 - 0 Corea del Sur
                El equipo tricolor se llevo la victoria con el gol de Luis Romo.
                República Checa 1 - 1 Sudáfrica 
                Con goles de Sadílek por Chequia; Mokoena por Sudáfrica.
                Grupo B:
                Canadá 6 - 0 Qatar 
                Aplastante victori del cuadro canadiense con goles de Hat-trick de Jonathan David, Cyle Larin, Nathan Saliba y autogol de Al-Manai.
                Suiza 4 - 1 Bosnia y Herzegovina
                Doblete de Manzambi, Vargas y Xhaka por el esquipo Suizo y Mahmic por Bosni.`,
                imagen: "/images/noticias/noticia-14.jpg",
                fecha: "2026-06-19",
                autor: "Redacción Mil Goles",
                tags: ["México", "Canada", "Suiza", "FIFA"]
        },
        {
                id: "jornada-7",
                categoria: "MUNDIAL 2026",
                titulo: "Portugal empata 1-1 con RD Congo.  ",
                resumen: "Harry Kane con 2 goles le da la victoria a Inglaterra.",
                contenidoLargo: `Jornada del Miércoles 17 de Junio:
                Colombia 3 - 1 Uzbekistán 
                Con goles de Daniel Muñoz, Luis Díaz y Jáminton Campaz para los cafeteros.
                Inglaterra 4 - 2 Croacia
                Destacó un doblete de Harry Kane y un gol de Jude Bellingham.
                Portugal 1 - 1 RD Congo 
                Anotaron João Neves para los lusos y Yoane Wissa para la selección africana.
                Ghana 1 - 0 Panamá 
                Victoria agónica africana con gol de Caleb Yirenkyi en el tiempo de descuento.`,
                imagen: "/images/noticias/noticia-13.jpg",
                fecha: "2026-06-18",
                autor: "Redacción Mil Goles",
                tags: ["Cristiano", "Harry Kane", "Portugal", "FIFA"]
        },
        {
                id: "jornada-6",
                categoria: "MUNDIAL 2026",
                titulo: "Messi anota los 3 goles del partido.  ",
                resumen: "Francia se lleva la victoria ante Senegal 3-1.",
                contenidoLargo: `Triplete Messi. Los partidos disputados el martes 16 de junio en la Fase de Grupos de la Copa Mundial de la FIFA 2026 son los siguientes:
                Grupo I
                Francia 3 - 1 Senegal:
                Kylian Mbappé anotó un doblete histórico y Bradley Barcola selló la victoria para los subcampeones del mundo. Ibrahim Mbaye descontó para el conjunto africano.
                Noruega 4 - 1 Irak:
                Erling Haaland debutó en los mundiales marcando dos goles. Completaron la goleada noruega Leo Østigård y un autogol de Aymen Hussein (quien previamente había anotado el empate transitorio de su país).
                Grupo J
                Argentina 3 - 0 Argelia:
                La vigente campeona del mundo goleó con un espectacular triplete de Lionel Messi. Con este hat-trick, el astro argentino alcanzó al alemán Miroslav Klose como el máximo goleador de la historia de los Mundiales con 16 tantos.
                Austria 3 - 1 Jordania:
                Los goles austriacos llegaron por obra de Romano Schmid, un autogol de Yazan Al-Arab y un penal ejecutado por Marko Arnautović en tiempo de descuento. Ali Olwan hizo historia al anotar el primer gol de Jordania en una Copa del Mundo`,
                imagen: "/images/noticias/noticia-12.jpg",
                fecha: "2026-06-17",
                autor: "Redacción Mil Goles",
                tags: ["España", "Uruguay", "Mundial", "FIFA"]
        },
        {
                id: "jornada-5",
                categoria: "MUNDIAL 2026",
                titulo: "Vozinha el heroe del partido.  ",
                resumen: "Los Grupos G y H quedan completamente empatados con 1 punto.",
                contenidoLargo: `Los 4 partidos del lunes 15 de junio terminaron en empate.
                El arquero de Cabo Verde, Vozinha, fue el héroe absoluto en el histórico empate 0-0 frente a España en su debut mundialista, gracias a una actuación memorable en la que logró 8 atajadas clave para neutralizar el dominio de la ofensiva europea.
                España 0 - 0 Cabo Verde: Histórico empate sin goles en el debut del equipo africano en un mundial.
                Bélgica 1 - 1 Egipto: Empate en el Grupo G con goles de Mohamed Hany (en contra para Bélgica) y Emam Ashour para Egipto.
                Arabia Saudita 1 - 1 Uruguay: Los dirigidos por Marcelo Bielsa rescataron un punto gracias a un gol de Maximiliano Araújo al minuto 80, tras iniciar perdiendo por un tanto de Abdulelah Al-Amri.
                Irán 2 - 2 Nueva Zelanda: El partido con más emociones de la jornada. Marcaron Ramin Rezaeian y Mohammad Mohebi para Irán, mientras que Elijah Just anotó un doblete para Nueva Zelanda.`,
                imagen: "/images/noticias/noticia-11.jpg",
                fecha: "2026-06-16",
                autor: "Redacción Mil Goles",
                tags: ["España", "Uruguay", "Mundial", "FIFA"]
        },
        {
                id: "jornada-4",
                categoria: "MUNDIAL 2026",
                titulo: "Alemania gana ante Curazao 7-1",
                resumen: "Contundente victoria de la selección de Alemania ante Curazao.",
                contenidoLargo: `Los resultados de los partidos disputados el domingo 14 de junio de 2026, correspondientes a la cuarta jornada de la Fase de Grupos de la Copa Mundial de la FIFA 2026, dejaron abultadas goleadas e intensos debuts:
                Grupo E
                Alemania 7-1 Curazao
                El conjunto teutón arrolló a su rival con anotaciones de Felix Nmecha, Nico Schlotterbeck, Jamal Musiala, Nathaniel Brown, Deniz Undav y un doblete de Kai Havertz. Livano Comenencia marcó el histórico primer gol de Curazao en un Mundial.
                Costa de Marfil 1-0 Ecuador
                La escuadra africana se impuso por la mínima diferencia gracias a un solitario gol de Amad Diallo en la recta final del juego.
                Grupo F
                Países Bajos 2-2 Japón
                Un emocionante empate donde Virgil van Dijk y Crysencio Summerville anotaron para la "Naranja Mecánica", mientras que Keito Nakamura y Daichi Kamada rescataron el punto para los nipones.
                Suecia 5-1 Túnez
                El combinado sueco se estrenó con una contundente goleada en el Estadio Monterrey gracias a las anotaciones de Yasin Ayari (quien hizo un doblete), Alexander Isak, Viktor Gyökeres y Mattias Svanberg.`,
                imagen: "/images/noticias/noticia-10.jpg",
                fecha: "2026-06-15",
                autor: "Redacción Mil Goles",
                tags: ["Alemania", "Naranja Mecanica", "Mundial", "FIFA"]
        },
        {
                id: "jornada-3",
                categoria: "MUNDIAL 2026",
                titulo: "Brasil se lleva el empate 1-1 ante Marruecos",
                resumen: "En la tercera jornada Escocia se llevo la victoria a su regreso despues de 28 años.",
                contenidoLargo: `En la tercera fecha del Mundial, se vieron los siguientes resultados:
                Catar 1-1 Suiza: Catar logró un empate histórico en el último minuto del descuento con un gol de Boualem Khoukhi.
                Brasil 1-1 Marruecos: Las potencias igualaron en un duelo intenso, con goles de Ismael Saibari y Vinícius Júnior.
                Escocia 1-0 Haití: Los británicos celebraron su regreso mundialista tras 28 años llevándose los tres puntos.
                Australia 2-0 Turquía: Los australianos dominaron el cierre de la jornada y vencieron con solvencia al conjunto turco.`,
                imagen: "/images/noticias/noticia-9.jpg",
                fecha: "2026-06-14",
                autor: "Redacción Mil Goles",
                tags: ["Brasil", "Escocia", "Mundial", "FIFA"]
        },
        {
                id: "jornada-2",
                categoria: "MUNDIAL 2026",
                titulo: "Estados Unidos se lleva la victoria",
                resumen: "En la segunda jornada Estados Unidos se llevo la victoria 4-1 ante Paraguay.",
                contenidoLargo: `Estados Unidos derrotó 4-1 a Paraguay en el partido disputado el viernes 12 de junio por la primera fecha del Grupo D en el Mundial 2026. El encuentro se llevó a cabo en el Estadio Los Ángeles (SoFi Stadium) ante un marco espectacular de público.
                A su vez Canadá empató 1-1 frente a Bosnia y Herzegovina en el partido inaugural del Grupo B de la Copa Mundial 2026, en el Estadio Toronto (BMO Field). A pesar de no conseguir la victoria en casa, el seleccionado hizo historia al sumar el primer punto de su historia en una Copa del Mundo.`,
                imagen: "/images/noticias/noticia-8.jpg",
                fecha: "2026-06-13",
                autor: "Redacción Mil Goles",
                tags: ["Paraguay", "Albirroja", "Mundial", "FIFA"]
        },
        {
                id: "partido-inaugural",
                categoria: "MUNDIAL 2026",
                titulo: "Inicio del Mundial 2026",
                resumen: "México se llevo la victoria ante Sudáfrica con un marcador 2-0.",
                contenidoLargo: `El evento deportivo más importante del mundo comenzó el 11 de junio en México, Estados Unidos y Canadá (el primero coorganizado por tres países y con 48 selecciones).
                México debutó con la victoria 2-0 ante Sudáfrica en el Estadio Azteca, con goles que generaron gran emoción (incluyendo participación de Raúl Jiménez). El partido inaugural se vivió entre celebraciones masivas.
                Otros resultados iniciales: Corea del Sur venció 2-1 a República Checa.`,
                imagen: "/images/noticias/noticia-7.jpg",
                fecha: "2026-06-12",
                autor: "Redacción Mil Goles",
                tags: ["México", "Sudáfrica", "Mundial", "FIFA"]
        },
        {
                id: "inauguracion-mundial",
                categoria: "MUNDIAL 2026",
                titulo: "Inauguración del Mundial de Futbol",
                resumen: "Inicio el evento mas esperado del mundo con un elenco internacional que sorprendio a los espectadores. Andrea Bocelli, Mana, Shakira, Belinda, Danny Ocean, entre otros.",
                contenidoLargo: `Maná dió inicio al espectaculo de la gala inaugural del Mundial 2026, con su clásico Oye mi amor.
                La Ceremonia Principal en México tuvo como escenario al Estadio Azteca.
                El evento combinó un despliegue tecnológico de drones, danzas tradicionales con trajes indígenas y un tributo a los legados de Pelé y Diego Maradona.
                Andrea Bocelli junto con la estrella de K-Pop EJAE. Interpretaron el tema "DNA" justo durante el acto solembe del despliegue de las 48 banderas de las selecciones.
                Los artistas musicales destacados fueron:Shakira y Burna Boy: Coronaron el evento interpretando en vivo "Dai Dai", el himno oficial del torneo.
                Maná y Danny Ocean: Abrieron la tanda musical con temas clásicos y la canción "Partidazo".
                Los Ángeles Azules y Belinda: Pusieron el ritmo latino interpretando el tema "Por Ella".
                Alejandro Fernández y Tyla: Encargados de entonar con fervor los himnos nacionales de México y Sudáfrica respectivamente.`,
                imagen: "/images/noticias/noticia-6.jpg",
                fecha: "2026-06-12",
                autor: "Redacción Mil Goles",
                tags: ["Shakira", "Inauguración", "FIFA"]
        },
        {
                id: "reglamento-fifa",
                categoria: "MUNDIAL 2026",
                titulo: "Las nuevas Reglas de la FIFA",
                resumen: "Los Cambios en: Sustituciones más rápidas, Gestión del tiempo en saques, Atención médica en campo, Capitán como interlocutor, Ampliación del VAR.",
                contenidoLargo: `Principales Reglas y Cambios para el Mundial 2026:
                Sustituciones más rápidas:** El jugador reemplazado tendrá un máximo de 10 segundos para salir. Si se demora, el jugador que ingresa deberá esperar un minuto de juego activo.
                Gestión del tiempo en saques:** Límite visual de 5 segundos para ejecutar saques de arco y saques de banda. La demora en saques de arco resultará en un tiro de esquina, mientras que en saques de banda significará la pérdida de posesión.
                Atención médica en campo:** Si un jugador requiere atención médica, deberá permanecer 1 minuto fuera del terreno de juego antes de poder regresar.
                Capitán como interlocutor:** Solo el capitán podrá dirigirse al árbitro. Si otros jugadores protestan en grupo, serán sancionados.
                Ampliación del VAR:** El VAR podrá revisar segundas tarjetas amarillas que resulten en una expulsión, además de saques de esquina mal concedidos.
                Regla del fuera de juego:** Se prueba una norma donde el atacante está en posición reglamentaria si cualquier parte del cuerpo con la que pueda marcar gol está alineada con el penúltimo defensor, reduciendo los offsides por milímetro.`,
                imagen: "/images/noticias/noticia-5.jpg",
                fecha: "2026-04-13",
                autor: "Redacción Mil Goles",
                tags: ["Reglamento", "Mundial", "FIFA"]
        },
        {
                id: "ultimas-en-clasificar",
                categoria: "MUNDIAL 2026",
                titulo: "Las seis clasificadas por repechaje",
                resumen: "Estas fueron las últimas seis en asegurar su boleto al torneo de 48 selecciones.",
                contenidoLargo: `Las finales disputadas el 31 de marzo, se definieron los últimos seis boletos para la Copa del Mundo 2026, República Democrática del Congo (CAF) — Venció 1-0 a Jamaica en la final intercontinental (primera vez en su historia moderna).
                Irak (AFC) — Derrotó 2-1 a Bolivia en la otra final intercontinental (regresa después de 40 años, desde México 1986).
                Bosnia y Herzegovina (UEFA) — Eliminó a Italia en penales (1-1, 4-1 en tiros desde el punto penal).
                Suecia (UEFA) — Venció 3-2 a Polonia (con gol agónico de Gyökeres).
                Turquía (UEFA) — Ganó 1-0 a Kosovo. República Checa (UEFA) — Superó a Dinamarca en penales (2-2, 3-1 en la tanda).`,
                imagen: "/images/noticias/repechaje.jpg",
                fecha: "2026-03-1",
                autor: "Redacción Mil Goles",
                tags: ["Repechaje", "Mundial", "FIFA"]
        },
        {
                id: "albirroja-paraguay",
                categoria: "MUNDIAL 2026", // <--- Ves? Aquí ya empezamos a mutar el sitio
                titulo: "La Albirroja regresa despues de 16 años",
                resumen: "La selección Paraguaya ya está clasificada, regresa despues de 16 años de ausencia.",
                contenidoLargo: `La Albirroja de cara al Mundial 2026.
                La selección Paraguaya ya está clasificada, regresa despues de 16 años de ausencia, su última participación fue en Sudáfrica 2010 y el foco ahora está en la preparación final bajo el mando de Gustavo Alfaro, quien ha sido clave para esta clasificación y genera mucha ilusión en el país.
                La Asociación Paraguaya de Fútbol (APF) ha oficializado dos amistosos de alto nivel para la ventana FIFA de marzo, como parte de la preparación rumbo al torneo: 27 de marzo: Paraguay vs. Grecia (en Atenas o sede por definir).
                Es el primero de la preparación. El último antecedente fue victoria guaraní 2-0 antes del Mundial 2010. 31 de marzo: Paraguay vs. Marruecos (en Lens, Francia, a las 15:00 hora paraguaya).
                Otro rival complicado y de jerarquía (Marruecos fue semifinalista en 2022). El último cruce fue empate 0-0 en 2022.`,
                imagen: "/images/noticias/albirroja.jpg",
                fecha: "2026-02-26",
                autor: "Equipo Mil Goles",
                tags: ["Albirroja", "Paraguay", "APF", "Conmebol"]
        },
        {
                id: "argentina-rumbo-al-2026",
                categoria: "MUNDIAL 2026",
                titulo: "Argentina elige Kansas City como base ",
                resumen: "El equipo de Scaloni ya prepara la logística.",
                contenidoLargo: `La selección argentina, campeona defensora y número 1 del ranking FIFA, ha confirmado oficialmente que establecerá su base camp en Kansas City (EE.UU.) durante el torneo.
                Utilizarán las instalaciones de entrenamiento de Sporting Kansas City (Compass Minerals National Performance Center) y se hospedarán en el área local.
                Argentina jugará su partido inaugural del Grupo J contra Argelia el 16 de junio en Arrowhead Stadium de Kansas City.
                Esto genera gran entusiasmo local, con Lionel Messi y el equipo preparándose para defender el título en un lugar que también será base de Inglaterra, lo que promete un ambiente competitivo y festivo.
                Es visto como una ventaja logística y de adaptación al clima/estadios del Medio Oeste.`,
                imagen: "/images/noticias/argentina.jpg",
                fecha: "2026-02-15",
                autor: "Redacción Mil Goles",
                tags: ["Argentina", "Scaloni", "FIFA"]
        },
        {
                id: "lamine-yamal",
                categoria: "SELECCIONES", // <--- Ves? Aquí ya empezamos a mutar el sitio
                titulo: "Lamine Yamal la gran estrella?",
                resumen: "La gran estrella emergente del Mundial 2026 es Lamine Yamal de España.",
                contenidoLargo: `La figura joven más destacada y la que más se menciona como la gran estrella emergente del Mundial 2026 (que arranca en junio de este año) es Lamine Yamal (España, Barcelona).
                Con apenas 18 años al inicio del torneo, ya es considerado por muchos expertos, medios y FIFA como el talento más diferencial y con mayor proyección para brillar y convertirse en la revelación o incluso en uno de los mejores jugadores del campeonato.
                Ha demostrado un nivel de élite en la Eurocopa donde fue clave para España, en la Champions y en LaLiga. Catalogado como el adolescente con más hype: dribbling imparable, visión, goles y asistencias, y una madurez brutal para su edad. España es uno de los favoritos al título, y Yamal será pieza central en el ataque junto a Pedri, Nico Williams y otros.
                Varios análisis lo ven capaz de tomar el torneo por asalto si está en forma.`,
                imagen: "/images/noticias/lamine-yamal.jpg",
                fecha: "2026-02-18",
                autor: "Equipo Mil Goles",
                tags: ["LamineYamal", "España", "FIFA"]
        },


        {
                id: "mbappe-francia",
                categoria: "SELECCIONES",
                titulo: "Mbappé, pieza central para Francia",
                resumen: "Didier Deschamps, DT de Francia, ha defendido públicamente a Kylian Mbappé.",
                contenidoLargo: `Didier Deschamps, DT de Francia, ha defendido públicamente a Kylian Mbappé ante críticas, destacándolo como un verdadero capitán y figura indispensable para el 2026, pese a que no corre 11 km por partido como otros.
                Mbappé sigue siendo el eje del ataque francés, con Ousmane Dembélé y Marcus Thuram formando un trío letal que el propio Mbappé ha teaseado en redes como una roca sólida.
                Reportes indican que Deschamps ya tiene lockeados a Mbappé y Dembélé en sus planes para los delanteros, y hay predicciones fuertes de que podría ganar el Balón de Oro 2026 si Francia triunfa.
                Mbappé busca romper récords históricos en el torneo y liderar a Les Bleus a otro título tras 2018.`,
                imagen: "/images/noticias/mbappe.jpg",
                fecha: "2024-05-18",
                autor: "Equipo Mil Goles",
                tags: ["Mbappe", "FIFA", "Francia"]
        },
        {
                id: "infantino-tarjeta-roja",
                categoria: "MUNDIAL 2026",
                titulo: "Infantino pide tarjeta roja a quienes se tapen la boca",
                resumen: "El presidente de la FIFA busca mayor transparencia en el campo.",
                contenidoLargo: `El presidente de la FIFA, Gianni Infantino, ha generado controversia al sugerir que los jugadores que se cubren la boca para hablar en el campo deberían ser sancionados.
                **EL COMUNICADO:** Queremos transparencia total. No hay lugar para secretos frente a las cámaras, declaró. 
                Esta medida busca fomentar la ética deportiva y permitir que los árbitros y la audiencia entiendan mejor las interacciones en el juego.`,
                imagen: "/images/noticias/noticia-1.jpg",
                fecha: "2026-03-01",
                autor: "Redacción Mil Goles",
                tags: ["FIFA", "Reglamento", "Infantino"]
        },
        {
                id: "incertidumbre-finalissima",
                categoria: "LALIGA",
                titulo: "Incertidumbre por la Finalissima 2026",
                resumen: "FIFA y UEFA evalúan el futuro del enfrentamiento entre campeones.",
                contenidoLargo: `La Finalissima 2026 entre Argentina y España, originalmente programada para el 27 de marzo de 2026 en el Estadio Lusail de Catar, ha sido suspendida debido a la situación de inestabilidad y conflicto bélico en la región de Oriente Medio.
                La Asociación de Fútbol de Catar decidió cancelar temporalmente toda la actividad deportiva en el país ante la escalada del conflicto en la región.`,
                imagen: "/images/noticias/noticia-2.jpg",
                fecha: "2026-03-01",
                autor: "Redacción Mil Goles",
                tags: ["CONMEBOL", "UEFA", "Finalissima"]
        },
        {
                id: "iran-mundial-duda",
                categoria: "MUNDIAL 2026",
                titulo: "En duda la participación de la selección de Irán",
                resumen: "El conflicto bélico podría dejar fuera a la seleccion de Irán.",
                contenidoLargo: `La participación de la selección de Irán en el Mundial 2026 se encuentra actualmente en seria duda debido a la escalada del conflicto bélico en Oriente Medio tras ataques recientes de Estados Unidos e Israel en territorio iraní.
                Mehdi Taj, Presidente de la Federación de Futbol de Irán, declaró el 2 de marzo de 2026 que tras los ataques sufridos no se puede esperar que la selección participe con esperanza en el torneo.`,
                imagen: "/images/noticias/noticia-3.jpg",
                fecha: "2026-03-01",
                autor: "Redacción Mil Goles",
                tags: ["Irán", "FIFA", "Clasificación"]
        }
];