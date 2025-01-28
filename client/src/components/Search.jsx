import { useState } from 'react';
import { isValidUrl } from '../utils/functions';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [videoUrl, setVideoUrl] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!isValidUrl(videoUrl)) {
            setError('Please enter a valid video URL.');
        } else {
            setError('');
            navigate(`/video/${encodeURIComponent(videoUrl)}`);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-white">
            <div className="container mx-auto px-6" style={{ maxWidth: '600px' }}>
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
                        Search for a Video
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Enter the URL of the video you want to play. Ensure it is publicly accessible and in a valid format.
                    </p>
                </div>
                <div>
                    <input
                        type="text"
                        className="w-full h-[3rem] mb-1 bg-gray-100 px-4 outline-none text-lg font-medium border-2 border-gray-200 focus:border-blue-100 rounded-lg"
                        placeholder="https://urlofvideo/video"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                    />
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <div className="text-gray-500 bg-blue-50 p-4 rounded-lg text-sm mb-6">
                        <ul className="list-disc text-md">
                            <li>Copy the video URL from the source.</li>
                            <li>Paste it into the input box above.</li>
                            <li>Click continue to play the video if it’s valid.</li>
                        </ul>
                    </div>
                    <button
                        className="w-full py-3 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition-colors"
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
