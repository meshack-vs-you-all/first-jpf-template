import { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setProgress(oldProgress => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    return 100; // Stop at 100%
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="loading-text">{`${Math.round(progress)}%`}</div>
        </div>
    );
};

export default LoadingScreen;
