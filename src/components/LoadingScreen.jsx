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

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black to-[#222222]">
            <div className="text-center">
                <div className="flex justify-center">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-2.5 h-2.5 bg-white rounded-full mx-0.5 animate-pulse delay-${index * 100}`}
                        />
                    ))}
                </div>
                <div className="text-white mt-5">{`${Math.round(progress)}%`}</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
