import { useState, useEffect } from 'react';

export const useScanSimulation = (initialValue: number = 0, speed: number = 50) => {
    const [progress, setProgress] = useState(initialValue);
    const [isScanning, setIsScanning] = useState(true);

    useEffect(() => {
        if (!isScanning) return;

        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                const next = oldProgress + 1;
                if (next >= 100) {
                    setIsScanning(false);
                    return 100;
                }
                return next;
            });
        }, speed);

        return () => clearInterval(timer);
    }, [isScanning, speed]);

    return { progress, isScanning };
};
