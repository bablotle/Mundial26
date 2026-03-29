import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
              apple: '/apple-touch-icon.png',
       },
};

// 2. Nueva constante Viewport
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
                     {/* AGREGADO: Aquí es donde Next.js inyecta el script de Google */}
                     <GoogleTagManager gtmId="GTM-K94W2G24" />

                     <body
                            className={`${inter.className} bg-[#f0f2f5] antialiased min-h-screen flex flex-col`}
                     >
                            <Navbar />

                            <main className="flex-grow pt-4">
                                   {children}
                            </main>

                            <Footer />
                     </body>
              </html>
       );
}