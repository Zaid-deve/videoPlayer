import { useParams, Link } from "react-router-dom";

export default function Error() {
    const { error } = useParams();

    return (
        <div className="h-screen flex items-center justify-center bg-white">
            <div className="text-center p-8 rounded-2xl max-w-md w-full">
                <div className="flex justify-center items-center mb-6">
                    <div className="relative w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-red-500 animate-pulse"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    </div>
                </div>
                <h1 className="text-5xl font-extrabold text-red-500 mb-4">Error</h1>
                <p className="text-gray-400 text-lg font-medium mb-4">
                    {error || "Sorry, the resource you are trying to access is private or not a valid video."}
                </p>
                <Link
                    to="/search"
                    className="block px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
                >
                    Find Another Video
                </Link>
            </div>
        </div>
    );
}
