import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import BreakingNews from '@/components/BreakingNews';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] });


export const metadata = {
       title: 'Arena Pro | Mundial 2026',
       description: 'Guía completa del Mundial 2026 y más allá',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
              <html lang="es">
                     <body className={`${inter.className} bg-[#f0f2f5] antialiased min-h-screen flex flex-col`}>
                            {/* Los componentes globales van fuera de {children} */}
                            <Navbar />


                            {/* El contenido de cada página se renderiza aquí */}
                            <div className="flex-grow pt-4">
                                   {children}
                            </div>


                            <Footer />


                     </body>
              </html>
       );
}

