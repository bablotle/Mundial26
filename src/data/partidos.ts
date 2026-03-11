export interface Partido {
       id: string;
       local: string;
       visitante: string;
       banderaLocal: string;
       banderaVisitante: string;
       fecha: string;
       hora: string;
       sede: string;
       grupo: string;



// Asegúrate que estos textos coincidan EXACTO con los botones de tu menú //


fase: 'Grupos' | 'Dieciseisavos' | 'Octavos' | 'Cuartos' | 'Semis' | 'Final' | 'Tercer Puesto';

}

export const todosLosPartidos: Partido[] = [

       // --- Grupo A ---
       {
              id: "A1",
              local: "México",
              visitante: "Sudáfrica",
              banderaLocal: "/images/banderas/mexico.png",
              banderaVisitante: "/images/banderas/sudafrica.png",
              fecha: "2026-06-11",
              hora: "15:00",
              sede: "CDMX",
              grupo: "A",
              fase: "Grupos"
       },
       {
              id: "A2",
              local: "Corea del Sur",
              visitante: "CP UEFA D",
              banderaLocal: "/images/banderas/corea-del-sur.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-11",
              hora: "22:00",
              sede: "Guadalajara",
              grupo: "A",
              fase: "Grupos"
       },
       {
              id: "A3",
              local: "CP UEFA D",
              visitante: "Sudáfrica",
              banderaLocal: "/images/banderas/uefa.png",
              banderaVisitante: "/images/banderas/sudafrica.png",
              fecha: "2026-06-18",
              hora: "12:00",
              sede: "Atlanta",
              grupo: "A",
              fase: "Grupos"
       },
       {
              id: "A4",
              local: "México",
              visitante: "Corea del Sur",
              banderaLocal: "/images/banderas/mexico.png",
              banderaVisitante: "/images/banderas/corea-del-sur.png",
              fecha: "2026-06-18",
              hora: "21:00",
              sede: "Guadalajara",
              grupo: "A",
              fase: "Grupos"
       },
       {
              id: "A5",
              local: "CP UEFA D",
              visitante: "México",
              banderaLocal: "/images/banderas/uefa.png",
              banderaVisitante: "/images/banderas/mexico.png",
              fecha: "2026-06-24",
              hora: "21:00",
              sede: "CDMX",
              grupo: "A",
              fase: "Grupos"
       },
       {
              id: "A6",
              local: "Sudáfrica",
              visitante: "Corea del Sur",
              banderaLocal: "/images/banderas/sudafrica.png",
              banderaVisitante: "/images/banderas/corea-del-sur.png",
              fecha: "2026-06-24",
              hora: "21:00",
              sede: "Monterrey",
              grupo: "A",
              fase: "Grupos"
       },


       // --- Grupo B ---
       {
              id: "B1",
              local: "Canadá",
              visitante: "CP UEFA A",
              banderaLocal: "/images/banderas/canada.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-12",
              hora: "15:00",
              sede: "Toronto",
              grupo: "B",
              fase: "Grupos"
       },
       {
              id: "B2",
              local: "Qatar",
              visitante: "Suiza",
              banderaLocal: "/images/banderas/qatar.png",
              banderaVisitante: "/images/banderas/suiza.png",
              fecha: "2026-06-13",
              hora: "15:00",
              sede: "San Francisco",
              grupo: "B",
              fase: "Grupos"
       },
       {
              id: "B3",
              local: "Suiza",
              visitante: "CP UEFA A",
              banderaLocal: "/images/banderas/suiza.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-18",
              hora: "15:00",
              sede: "Los Angeles",
              grupo: "B",
              fase: "Grupos"
       },
       {
              id: "B4",
              local: "Canadá",
              visitante: "Qatar",
              banderaLocal: "/images/banderas/canada.png",
              banderaVisitante: "/images/banderas/qatar.png",
              fecha: "2026-06-18",
              hora: "18:00",
              sede: "Vancouver",
              grupo: "B",
              fase: "Grupos"
       },
       {
              id: "B5",
              local: "Suiza",
              visitante: "Canadá",
              banderaLocal: "/images/banderas/suiza.png",
              banderaVisitante: "/images/banderas/canada.png",
              fecha: "2026-06-24",
              hora: "15:00",
              sede: "Vancouver",
              grupo: "B",
              fase: "Grupos"
       },
       {
              id: "B6",
              local: "CP UEFA A",
              visitante: "Qatar",
              banderaLocal: "/images/banderas/uefa.png",
              banderaVisitante: "/images/banderas/qatar.png",
              fecha: "2026-06-24",
              hora: "15:00",
              sede: "Seattle",
              grupo: "B",
              fase: "Grupos"
       },


       // --- Grupo C ---
       {
              id: "C1",
              local: "Brasil",
              visitante: "Marruecos",
              banderaLocal: "/images/banderas/brasil.png",
              banderaVisitante: "/images/banderas/marruecos.png",
              fecha: "2026-06-13",
              hora: "18:00",
              sede: "New Jersey",
              grupo: "C",
              fase: "Grupos"
       },
       {
              id: "C2",
              local: "Haití",
              visitante: "Escocia",
              banderaLocal: "/images/banderas/haiti.png",
              banderaVisitante: "/images/banderas/escocia.png",
              fecha: "2026-06-13",
              hora: "21:00",
              sede: "Boston",
              grupo: "C",
              fase: "Grupos"
       },
       {
              id: "C3",
              local: "Escocia",
              visitante: "Marruecos",
              banderaLocal: "/images/banderas/escocia.png",
              banderaVisitante: "/images/banderas/marruecos.png",
              fecha: "2026-06-19",
              hora: "18:00",
              sede: "Boston",
              grupo: "C",
              fase: "Grupos"
       },
       {
              id: "C4",
              local: "Brasil",
              visitante: "Haití",
              banderaLocal: "/images/banderas/brasil.png",
              banderaVisitante: "/images/banderas/haiti.png",
              fecha: "2026-06-19",
              hora: "21:00",
              sede: "Filadelfia",
              grupo: "C",
              fase: "Grupos"
       },
       {
              id: "C5",
              local: "Brasil",
              visitante: "Escocia",
              banderaLocal: "/images/banderas/brasil.png",
              banderaVisitante: "/images/banderas/escocia.png",
              fecha: "2026-06-24",
              hora: "18:00",
              sede: "Miami",
              grupo: "C",
              fase: "Grupos"
       },
       {
              id: "C6",
              local: "Marruecos",
              visitante: "Haití",
              banderaLocal: "/images/banderas/marruecos.png",
              banderaVisitante: "/images/banderas/haiti.png",
              fecha: "2026-06-24",
              hora: "18:00",
              sede: "Atlanta",
              grupo: "C",
              fase: "Grupos"
       },
       // --- Grupo D ---
       {
              id: "D1",
              local: "Estados Unidos",
              visitante: "Paraguay",
              banderaLocal: "/images/banderas/usa.png",
              banderaVisitante: "/images/banderas/paraguay.png",
              fecha: "2026-06-12",
              hora: "21:00",
              sede: "Los Angeles",
              grupo: "D",
              fase: "Grupos"
       },
       {
              id: "D2",
              local: "Australia",
              visitante: "Europa C",
              banderaLocal: "/images/banderas/australia.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-13",
              hora: "00:00",
              sede: "Vancouver",
              grupo: "D",
              fase: "Grupos"
       },


       {
              id: "D3",
              local: "Estados Unidos",
              visitante: "Australia",
              banderaLocal: "/images/banderas/usa.png",
              banderaVisitante: "/images/banderas/australia.png",
              fecha: "2026-06-19",
              hora: "15:00",
              sede: "Seattle",
              grupo: "D",
              fase: "Grupos"
       },
       {
              id: "D4",
              local: "Europa C",
              visitante: "Paraguay",
              banderaLocal: "/images/banderas/uefa.png",
              banderaVisitante: "/images/banderas/paraguay.png",
              fecha: "2026-06-19",
              hora: "00:00",
              sede: "San Francisco",
              grupo: "D",
              fase: "Grupos"
       },
       {
              id: "D5",
              local: "Europa C",
              visitante: "Estados Unidos",
              banderaLocal: "/images/banderas/uefa.png",
              banderaVisitante: "/images/banderas/usa.png",
              fecha: "2026-06-25",
              hora: "22:00",
              sede: "Los Angeles",
              grupo: "D",
              fase: "Grupos"
       },
       {
              id: "D6",
              local: "Paraguay",
              visitante: "Australia",
              banderaLocal: "/images/banderas/paraguay.png",
              banderaVisitante: "/images/banderas/australia.png",
              fecha: "2026-06-25",
              hora: "22:00",
              sede: "San Francisco",
              grupo: "D",
              fase: "Grupos"
       },


       // --- Grupo E ---
       {
              id: "E1",
              local: "Alemania",
              visitante: "Curazao",
              banderaLocal: "/images/banderas/alemania.png",
              banderaVisitante: "/images/banderas/curazao.png",
              fecha: "2026-06-14",
              hora: "13:00",
              sede: "Houston",
              grupo: "E",
              fase: "Grupos"
       },
       {
              id: "E2",
              local: "Costa de Marfil",
              visitante: "Ecuador",
              banderaLocal: "/images/banderas/costa-de-marfil.png",
              banderaVisitante: "/images/banderas/ecuador.png",
              fecha: "2026-06-14",
              hora: "19:00",
              sede: "Filadelfia",
              grupo: "E",
              fase: "Grupos"
       },


       {
              id: "E3",
              local: "Alemania",
              visitante: "Costa de Marfil",
              banderaLocal: "/images/banderas/alemania.png",
              banderaVisitante: "/images/banderas/costa-de-marfil.png",
              fecha: "2026-06-20",
              hora: "16:00",
              sede: "Toronto",
              grupo: "E",
              fase: "Grupos"
       },
       {
              id: "E4",
              local: "Ecuador",
              visitante: "Curazao",
              banderaLocal: "/images/banderas/ecuador.png",
              banderaVisitante: "/images/banderas/curazao.png",
              fecha: "2026-06-20",
              hora: "22:00",
              sede: "Kansas City",
              grupo: "E",
              fase: "Grupos"
       },


       {
              id: "E5",
              local: "Curazao",
              visitante: "Costa de Marfil",
              banderaLocal: "/images/banderas/curazao.png",
              banderaVisitante: "/images/banderas/costa-de-marfil.png",
              fecha: "2026-06-25",
              hora: "16:00",
              sede: "Filadelfia",
              grupo: "E",
              fase: "Grupos"
       },
       {
              id: "E6",
              local: "Ecuador",
              visitante: "Alemania",
              banderaLocal: "/images/banderas/ecuador.png",
              banderaVisitante: "/images/banderas/alemania.png",
              fecha: "2026-06-25",
              hora: "16:00",
              sede: "New Jersey",
              grupo: "E",
              fase: "Grupos"
       },
       // --- Grupo F ---
       {
              id: "F1",
              local: "Países Bajos",
              visitante: "Japón",
              banderaLocal: "/images/banderas/paises-bajos.png",
              banderaVisitante: "/images/banderas/japon.png",
              fecha: "2026-06-14",
              hora: "16:00",
              sede: "Dallas",
              grupo: "F",
              fase: "Grupos"
       },
       {
              id: "F2",
              local: "Europa B",
              visitante: "Túnez",
              banderaLocal: "/images/banderas/uefa.png",
              banderaVisitante: "/images/banderas/tunez.png",
              fecha: "2026-06-14",
              hora: "22:00",
              sede: "Monterrey",
              grupo: "F",
              fase: "Grupos"
       },


       {
              id: "F3",
              local: "Países Bajos",
              visitante: "Europa B",
              banderaLocal: "/images/banderas/paises-bajos.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-20",
              hora: "13:00",
              sede: "Houston",
              grupo: "F",
              fase: "Grupos"
       },
       {
              id: "F4",
              local: "Túnez",
              visitante: "Japón",
              banderaLocal: "/images/banderas/tunez.png",
              banderaVisitante: "/images/banderas/japon.png",
              fecha: "2026-06-20",
              hora: "00:00",
              sede: "Monterrey",
              grupo: "F",
              fase: "Grupos"
       },
       {
              id: "F5",
              local: "Japón",
              visitante: "Europa B",
              banderaLocal: "/images/banderas/japon.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-25",
              hora: "19:00",
              sede: "Dallas",
              grupo: "F",
              fase: "Grupos"
       },
       {
              id: "F6",
              local: "Túnez",
              visitante: "Países Bajos",
              banderaLocal: "/images/banderas/tunez.png",
              banderaVisitante: "/images/banderas/paises-bajos.png",
              fecha: "2026-06-25",
              hora: "19:00",
              sede: "Kansas City",
              grupo: "F",
              fase: "Grupos"
       },


       // --- Grupo G ---
       {
              id: "G1",
              local: "Bélgica",
              visitante: "Egipto",
              banderaLocal: "/images/banderas/belgica.png",
              banderaVisitante: "/images/banderas/egipto.png",
              fecha: "2026-06-15",
              hora: "15:00",
              sede: "Seattle",
              grupo: "G",
              fase: "Grupos"
       },
       {
              id: "G2",
              local: "Irán",
              visitante: "Nueva Zelanda",
              banderaLocal: "/images/banderas/iran.png",
              banderaVisitante: "/images/banderas/nueva-zelanda.png",
              fecha: "2026-06-15",
              hora: "21:00",
              sede: "Los Angeles",
              grupo: "G",
              fase: "Grupos"
       },
       {
              id: "G3",
              local: "Bélgica",
              visitante: "Irán",
              banderaLocal: "/images/banderas/belgica.png",
              banderaVisitante: "/images/banderas/iran.png",
              fecha: "2026-06-21",
              hora: "15:00",
              sede: "Los Angeles",
              grupo: "G",
              fase: "Grupos"
       },
       {
              id: "G4",
              local: "Nueva Zelanda",
              visitante: "Egipto",
              banderaLocal: "/images/banderas/nueva-zelanda.png",
              banderaVisitante: "/images/banderas/egipto.png",
              fecha: "2026-06-21",
              hora: "21:00",
              sede: "Vancouver",
              grupo: "G",
              fase: "Grupos"
       },
       {
              id: "G5",
              local: "Egipto",
              visitante: "Irán",
              banderaLocal: "/images/banderas/egipto.png",
              banderaVisitante: "/images/banderas/iran.png",
              fecha: "2026-06-26",
              hora: "23:00",
              sede: "Seattle",
              grupo: "G",
              fase: "Grupos"
       },
       {
              id: "G6",
              local: "Nueva Zelanda",
              visitante: "Bélgica",
              banderaLocal: "/images/banderas/nueva-zelanda.png",
              banderaVisitante: "/images/banderas/belgica.png",
              fecha: "2026-06-26",
              hora: "23:00",
              sede: "Vancouver",
              grupo: "G",
              fase: "Grupos"
       },


       // --- Grupo H ---
       {
              id: "H1",
              local: "España",
              visitante: "Cabo Verde",
              banderaLocal: "/images/banderas/espana.png",
              banderaVisitante: "/images/banderas/cabo-verde.png",
              fecha: "2026-06-15",
              hora: "12:00",
              sede: "Atlanta",
              grupo: "H",
              fase: "Grupos"
       },
       {
              id: "H2",
              local: "Arabia Saudita",
              visitante: "Uruguay",
              banderaLocal: "/images/banderas/arabia-saudita.png",
              banderaVisitante: "/images/banderas/uruguay.png",
              fecha: "2026-06-15",
              hora: "18:00",
              sede: "Miami",
              grupo: "H",
              fase: "Grupos"
       },
       {
              id: "H3",
              local: "España",
              visitante: "Arabia Saudita",
              banderaLocal: "/images/banderas/espana.png",
              banderaVisitante: "/images/banderas/arabia-saudita.png",
              fecha: "2026-06-21",
              hora: "12:00",
              sede: "Atlanta",
              grupo: "H",
              fase: "Grupos"
       },
       {
              id: "H4",
              local: "Uruguay",
              visitante: "Cabo Verde",
              banderaLocal: "/images/banderas/uruguay.png",
              banderaVisitante: "/images/banderas/cabo-verde.png",
              fecha: "2026-06-21",
              hora: "18:00",
              sede: "Miami",
              grupo: "H",
              fase: "Grupos"
       },
       {
              id: "H5",
              local: "Cabo Verde",
              visitante: "Arabia Saudita",
              banderaLocal: "/images/banderas/cabo-verde.png",
              banderaVisitante: "/images/banderas/arabia-saudita.png",
              fecha: "2026-06-26",
              hora: "20:00",
              sede: "Houston",
              grupo: "H",
              fase: "Grupos"
       },
       {
              id: "H6",
              local: "Uruguay",
              visitante: "España",
              banderaLocal: "/images/banderas/uruguay.png",
              banderaVisitante: "/images/banderas/espana.png",
              fecha: "2026-06-26",
              hora: "20:00",
              sede: " Guadalajara",
              grupo: "H",
              fase: "Grupos"
       },


       // --- Grupo I ---
       {
              id: "I1",
              local: "Francia",
              visitante: "Senegal",
              banderaLocal: "/images/banderas/francia.png",
              banderaVisitante: "/images/banderas/senegal.png",
              fecha: "2026-06-16",
              hora: "15:00",
              sede: "New Jersey",
              grupo: "I",
              fase: "Grupos"
       },
       {
              id: "I2",
              local: "Rep 1",
              visitante: "Noruega",
              banderaLocal: "/images/banderas/uefa.png",
              banderaVisitante: "/images/banderas/noruega.png",
              fecha: "2026-06-16",
              hora: "18:00",
              sede: "Boston",
              grupo: "J",
              fase: "Grupos"
       },
       {
              id: "I3",
              local: "Francia",
              visitante: "Rep 1",
              banderaLocal: "/images/banderas/francia.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-22",
              hora: "17:00",
              sede: "Filadelfia",
              grupo: "I",
              fase: "Grupos"
       },
       {
              id: "I4",
              local: "Noruega",
              visitante: "Senegal",
              banderaLocal: "/images/banderas/noruega.png",
              banderaVisitante: "/images/banderas/senegal.png",
              fecha: "2026-06-22",
              hora: "20:00",
              sede: "New Jersey",
              grupo: "I",
              fase: "Grupos"
       },
       {
              id: "I5",
              local: "Noruega",
              visitante: "Francia",
              banderaLocal: "/images/banderas/noruega.png",
              banderaVisitante: "/images/banderas/francia.png",
              fecha: "2026-06-26",
              hora: "15:00",
              sede: "Boston",
              grupo: "I",
              fase: "Grupos"
       },
       {
              id: "I6",
              local: "Senegal",
              visitante: "Rep 1",
              banderaLocal: "/images/banderas/senegal.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-26",
              hora: "15:00",
              sede: "Toronto",
              grupo: "I",
              fase: "Grupos"
       },


       // --- Grupo J ---
       {
              id: "J1",
              local: "Argentina",
              visitante: "Argelia",
              banderaLocal: "/images/banderas/argentina.png",
              banderaVisitante: "/images/banderas/argelia.png",
              fecha: "2026-06-16",
              hora: "21:00",
              sede: "Kansas City",
              grupo: "J",
              fase: "Grupos"
       },
       {
              id: "J2",
              local: "Austria",
              visitante: "Jordania",
              banderaLocal: "/images/banderas/austria.png",
              banderaVisitante: "/images/banderas/jordania.png",
              fecha: "2026-06-16",
              hora: "00:00",
              sede: "San Francisco",
              grupo: "J",
              fase: "Grupos"
       },
       {
              id: "J3",
              local: "Argentina",
              visitante: "Austria",
              banderaLocal: "/images/banderas/argentina.png",
              banderaVisitante: "/images/banderas/austria.png",
              fecha: "2026-06-22",
              hora: "13:00",
              sede: "Dallas",
              grupo: "J",
              fase: "Grupos"
       },
       {
              id: "J4",
              local: "Jordania",
              visitante: "Argelia",
              banderaLocal: "/images/banderas/jordania.png",
              banderaVisitante: "/images/banderas/argelia.png",
              fecha: "2026-06-22",
              hora: "23:00",
              sede: "San Francisco",
              grupo: "J",
              fase: "Grupos"
       },
       {
              id: "J5",
              local: "Argelia",
              visitante: "Austria",
              banderaLocal: "/images/banderas/argelia.png",
              banderaVisitante: "/images/banderas/austria.png",
              fecha: "2026-06-27",
              hora: "22:00",
              sede: "Kansas City",
              grupo: "J",
              fase: "Grupos"
       },
       {
              id: "J6",
              local: "Jordania",
              visitante: "Argentina",
              banderaLocal: "/images/banderas/jordania.png",
              banderaVisitante: "/images/banderas/argentina.png",
              fecha: "2026-06-27",
              hora: "22:00",
              sede: "Dallas",
              grupo: "J",
              fase: "Grupos"
       },
       // --- Grupo K ---
       {
              id: "K1",
              local: "Portugal",
              visitante: "Rep 1",
              banderaLocal: "/images/banderas/portugal.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-17",
              hora: "13:00",
              sede: "Houston",
              grupo: "K",
              fase: "Grupos"
       },
       {
              id: "K2",
              local: "Uzbekistán",
              visitante: "Colombia",
              banderaLocal: "/images/banderas/uzbekistan.png",
              banderaVisitante: "/images/banderas/colombia.png",
              fecha: "2026-06-17",
              hora: "22:00",
              sede: "CDMX",
              grupo: "K",
              fase: "Grupos"
       },
       {
              id: "K3",
              local: "Portugal",
              visitante: "Uzbekistan",
              banderaLocal: "/images/banderas/portugal.png",
              banderaVisitante: "/images/banderas/uzbekistan.png",
              fecha: "2026-06-23",
              hora: "13:00",
              sede: "Houston",
              grupo: "K",
              fase: "Grupos"
       },
       {
              id: "K4",
              local: "Colombia",
              visitante: "Rep 1",
              banderaLocal: "/images/banderas/colombia.png",
              banderaVisitante: "/images/banderas/uefa.png",
              fecha: "2026-06-23",
              hora: "23:00",
              sede: "Guadalajara",
              grupo: "K",
              fase: "Grupos"
       },
       {
              id: "K5",
              local: "Colombia",
              visitante: "Portugal",
              banderaLocal: "/images/banderas/colombia.png",
              banderaVisitante: "/images/banderas/portugal.png",
              fecha: "2026-06-27",
              hora: "19:30",
              sede: "Miami",
              grupo: "K",
              fase: "Grupos"
       },
       {
              id: "K6",
              local: "Rep 1",
              visitante: "Uzbekistan",
              banderaLocal: "/images/banderas/uefa.png",
              banderaVisitante: "/images/banderas/uzbekistan.png",
              fecha: "2026-06-27",
              hora: "19:30",
              sede: "Atlanta",
              grupo: "K",
              fase: "Grupos"
       },
       // --- Grupo L ---
       {
              id: "L1",
              local: "Inglaterra",
              visitante: "Croacia",
              banderaLocal: "/images/banderas/inglaterra.png",
              banderaVisitante: "/images/banderas/croacia.png",
              fecha: "2026-06-17",
              hora: "16:00",
              sede: "Dallas",
              grupo: "L",
              fase: "Grupos"
       },
       {
              id: "L2",
              local: "Ghana",
              visitante: "Panamá",
              banderaLocal: "/images/banderas/ghana.png",
              banderaVisitante: "/images/banderas/panama.png",
              fecha: "2026-06-17",
              hora: "19:00",
              sede: "Toronto",
              grupo: "L",
              fase: "Grupos"
       },
       {
              id: "L3",
              local: "Inglaterra",
              visitante: "Ghana",
              banderaLocal: "/images/banderas/inglaterra.png",
              banderaVisitante: "/images/banderas/ghana.png",
              fecha: "2026-06-23",
              hora: "14:00",
              sede: "Boston",
              grupo: "L",
              fase: "Grupos"
       },
       {
              id: "L4",
              local: "Panamá",
              visitante: "Croacia",
              banderaLocal: "/images/banderas/panama.png",
              banderaVisitante: "/images/banderas/croacia.png",
              fecha: "2026-06-23",
              hora: "19:00",
              sede: "Toronto",
              grupo: "L",
              fase: "Grupos"
       },
       {
              id: "L5",
              local: "Panamá",
              visitante: "Inglaterra",
              banderaLocal: "/images/banderas/panama.png",
              banderaVisitante: "/images/banderas/inglaterra.png",
              fecha: "2026-06-27",
              hora: "17:00",
              sede: "New Jersey",
              grupo: "L",
              fase: "Grupos"
       },
       {
              id: "L6",
              local: "Croacia",
              visitante: "Ghana",
              banderaLocal: "/images/banderas/croacia.png",
              banderaVisitante: "/images/banderas/ghana.png",
              fecha: "2026-06-28",
              hora: "17:00",
              sede: "Filadelfia",
              grupo: "L",
              fase: "Grupos"
       },


       // --- Grupo Dieciseisavos ---
       {
              id: "R32-01",
              local: "2º Grupo A",
              visitante: "2º Grupo B",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-06-28",
              hora: "18:00",
              sede: "Los Angeles",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-02",
              local: "1º Grupo E",
              visitante: "3º Grupo A/B/C/D/F",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-06-29",
              hora: "18:00",
              sede: "Boston",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-03",
              local: "1º Grupo F",
              visitante: "2º Grupo C",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-06-29",
              hora: "18:00",
              sede: "Monterrey",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-04",
              local: "1º Grupo C",
              visitante: "2º Grupo F",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-06-29",
              hora: "18:00",
              sede: "Houston",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-05",
              local: "1º Grupo I",
              visitante: "3º Grupo C/D/F/G/H",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-06-30",
              hora: "18:00",
              sede: "Nueva Jersey",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-06",
              local: "2º Grupo E",
              visitante: "2º Grupo I",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-06-30",
              hora: "18:00",
              sede: "Dallas",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-07",
              local: "1º Grupo A",
              visitante: "3º Grupo C/E/F/H/I",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-06-30",
              hora: "18:00",
              sede: "Ciudad de México",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-08",
              local: "1º Grupo L",
              visitante: "3º Grupo E/H/I/J/K",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-01",
              hora: "18:00",
              sede: "Atlanta",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-09",
              local: "1º Grupo D",
              visitante: "3º Grupo B/E/F/I/J",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-01",
              hora: "18:00",
              sede: "San Francisco",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-010",
              local: "1º Grupo G",
              visitante: "3º Grupo A/E/H/I/J",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-01",
              hora: "18:00",
              sede: "Seattle",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-011",
              local: "2º Grupo K",
              visitante: "2º Grupo L",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-02",
              hora: "18:00",
              sede: "Toronto",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-012",
              local: "1º Grupo H",
              visitante: "2º Grupo J",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-02",
              hora: "18:00",
              sede: "Los Ángeles",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-013",
              local: "1º Grupo B",
              visitante: "3º Grupo E/F/G/I/J",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-02",
              hora: "18:00",
              sede: "Vancouver",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-014",
              local: "1º Grupo J",
              visitante: "2º Grupo H",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-03",
              hora: "18:00",
              sede: "Miami",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-015",
              local: "1º Grupo K",
              visitante: "3º Grupo D/E/I/J/L",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-03",
              hora: "18:00",
              sede: "Kansas City",
              grupo: "R32",
              fase: "Dieciseisavos"
       },
       {
              id: "R32-016",
              local: "2º Grupo D",
              visitante: "2º Grupo G",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-03",
              hora: "18:00",
              sede: "Dallas",
              grupo: "R32",
              fase: "Dieciseisavos"
       },


       // --- Grupo Octavos ---
       {
              id: "R16-01",
              local: "Ganador Partido 74",
              visitante: "Ganador Partido 77",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-04",
              hora: "17:00",
              sede: "Filadelfia",
              grupo: "R16",
              fase: "Octavos"
       },
       {
              id: "R16-02",
              local: "Ganador Partido 73",
              visitante: "Ganador Partido 75",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-04",
              hora: "13:00",
              sede: "Houston",
              grupo: "R16",
              fase: "Octavos"
       },
       {
              id: "R16-03",
              local: "Ganador Partido 76",
              visitante: "Ganador Partido 78",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-05",
              hora: "16:00",
              sede: "Nueva Jersey",
              grupo: "R16",
              fase: "Octavos"
       },
       {
              id: "R16-04",
              local: "Ganador Partido 79",
              visitante: "Ganador Partido 80",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-05",
              hora: "20:00",
              sede: "Ciudad de México",
              grupo: "R16",
              fase: "Octavos"
       },
       {
              id: "R16-05",
              local: "Ganador Partido 83",
              visitante: "Ganador Partido 84",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-06",
              hora: "15:00",
              sede: "Dallas",
              grupo: "R16",
              fase: "Octavos"
       },
       {
              id: "R16-06",
              local: "Ganador Partido 81",
              visitante: "Ganador Partido 82",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-06",
              hora: "20:00",
              sede: "Seattle",
              grupo: "R16",
              fase: "Octavos"
       },
       {
              id: "R16-07",
              local: "Ganador Partido 86",
              visitante: "Ganador Partido 88",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-07",
              hora: "12:00",
              sede: "Atlanta",
              grupo: "R16",
              fase: "Octavos"
       },
       {
              id: "R16-08",
              local: "Ganador Partido 85",
              visitante: "Ganador Partido 87",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-07",
              hora: "18:00",
              sede: "Vancouver",
              grupo: "R16",
              fase: "Octavos"
       },

       // --- Grupo Cuartos ---


       {
              id: "QF-01",
              local: "Ganador Partido 89",
              visitante: "Ganador Partido 90",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-09",
              hora: "16:00",
              sede: "Boston",
              grupo: "QF",
              fase: "Cuartos"
       },
       {
              id: "QF-02",
              local: "Ganador Partido 93",
              visitante: "Ganador Partido 94",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-10",
              hora: "16:00",
              sede: "Los Ángeles",
              grupo: "QF",
              fase: "Cuartos"
       },
       {
              id: "QF-03",
              local: "Ganador Partido 91",
              visitante: "Ganador Partido 92",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-11",
              hora: "16:00",
              sede: "Miami",
              grupo: "QF",
              fase: "Cuartos"
       },
       {
              id: "QF-04",
              local: "Ganador Partido 95",
              visitante: "Ganador Partido 96",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-11",
              hora: "20:00",
              sede: "Kansas City",
              grupo: "QF",
              fase: "Cuartos"
       },


       // --- Grupo Semifinal ---
       {
              id: "SF-01",
              local: "Ganador Partido 97",
              visitante: "Ganador Partido 98",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-14",
              hora: "15:00",
              sede: "Dallas",
              grupo: "SF",
              fase: "Semis"
       },
       {
              id: "SF-02",
              local: "Ganador Partido 99",
              visitante: "Ganador Partido 100",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-15",
              hora: "15:00 ",
              sede: "Atlanta",
              grupo: "F",
              fase: "Semis"
       },


       // --- Grupo Final ---
       {
              id: "F",
              local: "Ganador Partido 101",
              visitante: "Ganador Partido 102",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-19",
              hora: "17:00",
              sede: "New Jersey",
              grupo: "F",
              fase: "Final"
       },


       // --- Grupo Final ---
       {
              id: "TP",
              local: "Perdedor Partido 101",
              visitante: "Perdedor Partido 102",
              banderaLocal: "/images/banderas/tbd.png",
              banderaVisitante: "/images/banderas/tbd.png",
              fecha: "2026-07-18",
              hora: "17:00",
              sede: "Miami",
              grupo: "TP",
              fase: "Tercer Puesto"
       }
]