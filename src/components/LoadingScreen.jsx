import { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);  // New state to control the visibility of the loading screen

    useEffect(() => {
        let timer = setInterval(() => {
            setProgress(oldProgress => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 500); // Hide loading screen after reaching 100%
                    return 100;
                }
                return Math.min(oldProgress + Math.random() * 10, 100);
            });
        }, 500);

        return () => clearInterval(timer);
    }, []);

    // Condition to stop rendering the loading screen after it is done
    if (!isLoading) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gradient-to-r from-gray-dark via-brand-secondary to-brand-primary z-50 overflow-hidden">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white transition-transform duration-1000" 
                 style={{ transform: `translateX(${progress - 100}%)` }}>
                <div className="flex h-full items-center justify-center">
                    <div className="text-white text-xl">{`${Math.round(progress)}%`}</div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
