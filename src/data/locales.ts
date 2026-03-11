export interface Local {
    id: string;
    nombre: string;
    slug: string;
    promoHoy: string;
    foto: string;
    descripcion: string;
    amenities: string[]; // ['Pantalla Gigante', 'Cerveza Artesanal', 'Pet Friendly']
    direccion: string;
    linkReserva: string;
    menuDestacado: {
        nombre: string;
        precio: string;
        foto: string;
    };
    wifi?: string; // ¡Dato vital en un bar!
}
export const locales: Local[] = [
    {
        id: '1',
        nombre: 'Lo de Osvaldo',
        slug: 'lo-de-osvaldo',
        promoHoy: '2x1 en Chopp durante el partido de Paraguay',
        foto: 'https://www.lodeosvaldo.com.py/uploads/imagenes/20201012/ldo-historia1.jpg',
        descripcion: 'El templo del fútbol en Asunción. Ambiente de estadio garantizado.',
        amenities: ['Pantalla Gigante', 'Aire Acondicionado', 'Promos de Cerveza'],
        direccion: 'Cerro Corá 892',
        linkReserva: 'https://wa.me/595982128140',
        menuDestacado: {
            nombre: 'Picada "La Albirroja" (Para 4)',
            precio: '180.000 Gs',
            foto: 'https://www.lodeosvaldo.com.py/uploads/imagenes/20240822/bifedechorizolodeosvaldo.jpg' // O una URL
        },
        wifi: 'osvaldo2026'
    },
    {
        id: '2',
        nombre: 'Biker Brothers',
        slug: 'biker-brothers',
        promoHoy: '2x1 en Chopp durante el partido de Paraguay',
        foto: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerVv798wL5h9wi6c8R_tWSdm5AVatMm1Q1zGhAWsctD87X24UO92iHiSmGkxza3QGYDIfPb3BJmurOcdVMJk49yqu9Fkm3aydhwt3-7sJEhTkgQdJdntthH1EgpE73wCO9eKFiYIFmsMstt=s1468-w784-h1468-rw',
        descripcion: 'El templo del fútbol en Asunción. Ambiente de estadio garantizado.',
        amenities: ['Pantalla Gigante', 'Banda en Vivo', 'Promos de Cerveza', 'Mesa de Pool'],
        direccion: 'Avenida Aviadored 2971',
        linkReserva: 'https://wa.me/595987229534',
        menuDestacado: {
            nombre: 'Pizza "La Albirroja" (Para 4)',
            precio: '110.000 Gs',
            foto: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoA0ReGOqkCMbPZ5oukFkiPh5wiCvD6wk3-BVfFhhgQJm639UVXdTun2qnSTR55WvPS_JT-YCfcu41U7jblpDA3_9dhsS9AadVBHmYxFmuomReaGz3Vguv-73XxUZcpZZdh9G43=s1468-w784-h1468-rw' // O una URL
        },
        wifi: 'biker2026'
    }

    // Agrega más locales aquí...
];
