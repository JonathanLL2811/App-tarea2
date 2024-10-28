import React, { useState, useEffect, ReactNode } from 'react';
import ContextoEstudiantes, { Estudiante } from './ContextoExtudiantes';


const ProveedorEstudiantes: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
    const [agregados, setAgregados] = useState<boolean>(false);


    const estudiantesIniciales: Estudiante[] = [
        { id: '1', nombre: 'Juan' },
        { id: '2', nombre: 'María' },
        { id: '3', nombre: 'Carlos' },
        { id: '4', nombre: 'Ana' },
        { id: '5', nombre: 'Luis' },
        { id: '6', nombre: 'Sofía' },
        { id: '7', nombre: 'Pedro' },
        { id: '8', nombre: 'Laura' },
        { id: '9', nombre: 'Andrés' },
        { id: '10', nombre: 'Clara' }
    ];


    useEffect(() => {
        setEstudiantes(estudiantesIniciales);
    }, []);

   
    useEffect(() => {
        if (!agregados) {
            const intervalo = setTimeout(() => {
                const nuevosEstudiantes = Array.from({ length: 5 }, (_, index) => ({
                    id: (estudiantes.length + index + 1).toString(),
                    nombre: `Estudiante ${estudiantes.length + index + 1}`,
                }));

                setEstudiantes(prevEstudiantes => [...prevEstudiantes, ...nuevosEstudiantes]);
                setAgregados(true);
            }, 5000);

            return () => clearTimeout(intervalo);
        }
    }, [agregados, estudiantes]);

    
    const agregarEstudiante = (nuevoEstudiante: Estudiante) => {
        setEstudiantes(prev => [...prev, nuevoEstudiante]);
    };

    return (
        <ContextoEstudiantes.Provider value={{ estudiantes, agregarEstudiante }}>
            {children}
        </ContextoEstudiantes.Provider>
    );
};

export default ProveedorEstudiantes;
