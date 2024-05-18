// src/components/Shared/Loading.jsx

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-2xl text-blue-600">Building your profile...</p>
        </div>
    );
};

export default Loading;
