
import { createContext } from 'react';


export interface Estudiante {
    id: string;
    nombre: string;
}


export interface ContextoProps {
    estudiantes: Estudiante[];
    agregarEstudiante: (nuevoEstudiante: Estudiante) => void; 
}


const ContextoEstudiantes = createContext<ContextoProps | undefined>(undefined);

export default ContextoEstudiantes;
