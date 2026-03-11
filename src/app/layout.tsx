import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Configuración Maestra de Metadata (SEO + PWA)
// 1. Metadata limpia (SEO y PWA)

export const metadata = {
       title: 'Mil Goles',
       description: 'La guia de Mundial 26.',
       manifest: '/manifest.json',
       appleWebApp: {
              capable: true,
              title: 'Mil Goles',
              statusBarStyle: 'black-translucent',
       },
       icons: {
              icon: [
                     { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
                     { url: '/favicon.svg', type: 'image/svg+xml' },
              ],
              shortcut: '/favicon.ico',
              apple: '/apple-touch-icon.png', // Este es el de 180x180 que te dio
       },
};

// 2. Nueva constante Viewport (Esto quita los avisos de la terminal)
export const viewport = {
       themeColor: '#000000',
       width: 'device-width',
       initialScale: 1,
       maximumScale: 1,
};

export default function RootLayout({
       children,
}: {
       children: React.ReactNode;
}) {
       return (
              <html lang="es">
                     <body
                            className={`${inter.className} bg-[#f0f2f5] antialiased min-h-screen flex flex-col`}
                     >
                            {/* Navbar fijo en la parte superior */}
                            <Navbar />

                            {/* Contenido dinámico de las páginas */}
                            <main className="flex-grow pt-4">
                                   {children}
                            </main>

                            {/* Footer al final de la página */}
                            <Footer />
                     </body>
              </html>
       );
}