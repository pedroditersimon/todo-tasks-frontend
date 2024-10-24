import { useState, useCallback, useEffect } from 'react';

function useForceUpdateInterval(shouldUpdate, interval = 500) {
    const [, updateState] = useState(); // Estado vacío para forzar render
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
        let timer;
        if (shouldUpdate) {
            timer = setInterval(forceUpdate, interval);
        }
        // Limpiar el temporizador cuando el componente se desmonte o cuando cambie la dependencia
        return () => clearInterval(timer);
    }, [shouldUpdate, interval, forceUpdate]);
}

export default useForceUpdateInterval;
