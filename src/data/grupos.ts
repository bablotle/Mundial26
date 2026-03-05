export interface Grupo {
    nombre: string; // Ej: "Grupo A"
    equipos: {
        id: string;
        nombre: string;
        pj: number;
        g: number;
        e: number;
        p: number;
        gf: number;
        gc: number;
        pts: number;
    }[];
}

export const grupos: Grupo[] = [
    {
        nombre: "Grupo A",
        equipos: [
            { id: "mexico", nombre: "México", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 },
            { id: "sudafrica", nombre: "Sudáfrica", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 },
            { id: "grecia", nombre: "Grecia", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 },
            { id: "escocia", nombre: "Escocia", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 },
        ]
    },
    // ... otros grupos
];