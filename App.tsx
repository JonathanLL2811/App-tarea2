// App.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import ProveedorEstudiantes from './componentes/ProveedorEstudiantes';
import Estudiantes from './componentes/estudiantes';

const App: React.FC = () => {
    return (
        <ProveedorEstudiantes>
            <SafeAreaView>
                <Estudiantes />
            </SafeAreaView>
        </ProveedorEstudiantes>
    );
};

export default App;
