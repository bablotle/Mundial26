export interface FanZone {
  id: string;
  nombre: string;
  categoria: string;
  ubicacion: string;
  imagen: string;
  linkReserva: string;
  googleMapsUrl: string;
  destacado: boolean;
  promo: string;
}

export const FAN_ZONES: FanZone[] = [
  {
    id: 'lo-de-osvaldo',
    nombre: 'Lo de Osvaldo',
    categoria: 'Parrillada Futbolera',
    ubicacion: 'Cerro Corá 883, Asunción',
    imagen: 'https://www.lodeosvaldo.com.py/uploads/imagenes/20201012/ldo-historia1.jpg',
    linkReserva: 'https://wa.me/595982128140',
    googleMapsUrl: 'https://share.google/q0Ine8nFPYypFcAwW',
    destacado: true,
    promo: '2x1 en Chopp durante los partidos'
  },
  {
    id: 'biker-brothers',
    nombre: 'Biker Brothers',
    categoria: 'Resto Bar',
    ubicacion: 'Avenida Aviadores 2971, Asunción',
    imagen: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerVv798wL5h9wi6c8R_tWSdm5AVatMm1Q1zGhAWsctD87X24UO92iHiSmGkxza3QGYDIfPb3BJmurOcdVMJk49yqu9Fkm3aydhwt3-7sJEhTkgQdJdntthH1EgpE73wCO9eKFiYIFmsMstt=s1468-w784-h1468-rw',
    linkReserva: 'https://wa.me/595987229534',
    googleMapsUrl: 'https://share.google/2xF7DjcmrVuJcMJgC',
    destacado: false,
    promo: 'Picada Mundialista 15% OFF'
  },
  {
    id: 'sacramento',
    nombre: 'Sacramento Brewing Co.',
    categoria: 'Cervecería Artesanal',
    ubicacion: 'Santisimo Sacramento, Asunción',
    imagen: 'https://www.sacramento.com.py/img/barra.png',
    linkReserva: 'https://wa.me/595971405014',
    googleMapsUrl: 'https://share.google/iP0NF9xrkkwNuLSK9',
    destacado: false,
    promo: 'Promo chop 10% OFF'
  }
];
