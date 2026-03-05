'use client';
import { useState, useEffect } from 'react';


export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });


    useEffect(() => {
        const target = new Date('2026-06-11T00:00:00');
        const timer = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();
            if (difference > 0) {
                setTimeLeft({
                    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    min: Math.floor((difference / 1000 / 60) % 60),
                    seg: Math.floor((difference / 1000) % 60)
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);


    const TimeBlock = ({ valor, etiqueta }: { valor: number, etiqueta: string }) => (
        <div className="flex flex-col items-center min-w-[45px]">
            <span className="text-2xl font-black text-black italic leading-none tracking-tighter">
                {valor.toString().padStart(2, '0')}
            </span>
            <span className="text-[6px] font-black text-gray-400 uppercase tracking-widest">
                {etiqueta}
            </span>
        </div>
    );


    return (
        <div className="w-full my-4">
            <div className="island-card py-3 px-4 flex flex-col items-center bg-white shadow-md border border-gray-100">
                <h4 className="text-[7px] font-black uppercase tracking-[0.3em] text-gray-400 italic mb-2">
                    Cuenta Regresiva
                </h4>


                <div className="flex items-center justify-center gap-3">
                    <TimeBlock valor={timeLeft.dias} etiqueta="Días" />
                    <div className="h-4 w-px bg-gray-200" />
                    <TimeBlock valor={timeLeft.horas} etiqueta="Hrs" />
                    <div className="h-4 w-px bg-gray-200" />
                    <TimeBlock valor={timeLeft.min} etiqueta="Min" />
                    <div className="h-4 w-px bg-gray-200" />
                    <TimeBlock valor={timeLeft.seg} etiqueta="Seg" />
                </div>


                <p className="text-[7px] font-bold text-blue-600 uppercase tracking-widest mt-2">
                    Para el partido inaugural 2026
                </p>
            </div>
        </div>
    );
}
