
import React, { useContext } from 'react';
import ContextoEstudiantes from './ContextoExtudiantes';

const Estudiantes: React.FC = () => {
    const contexto = useContext(ContextoEstudiantes);

    if (!contexto) {
        return <div>No hay contexto disponible</div>;
    }

    const { estudiantes } = contexto;

    return (
        <div>
            <h1>Lista de Estudiantes</h1>
            <ul>
                {estudiantes.map(estudiante => (
                    <li key={estudiante.id}>{estudiante.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Estudiantes;
