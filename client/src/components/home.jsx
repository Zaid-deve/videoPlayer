import { Link } from 'react-router-dom';
import bgImage from '/src/assets/christian-stahl-xmGkzY--Fgg-unsplash.jpg';

export default function Home() {
    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative z-10 px-6">
                <h1 className="text-4xl font-bold text-white mb-6">
                    Welcome to the Modern Video Player
                </h1>
                <p className="text-xl text-white mb-8">
                    Explore the amazing features of this website.
                </p>
                <ul className="text-white text-lg mb-8 space-y-4 mx-auto">
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10.5L12 3l-8 7.5" />
                            <path d="M12 21V3" />
                        </svg>
                        <span>Search remote videos</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 9.1V4h-5v5.1L2 9.8l1.2 5.1 5.3-3.1V20h5V11.7l5.2 3-1.1-5.1-5.3 3.1z" />
                        </svg>
                        <span>Play remote videos</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <span>Download remote videos</span>
                    </li>
                </ul>
                <Link
                    to="/search"
                    className="py-3 bg-green-600 text-white text-xl font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 px-15 mt-3 w-full block text-center"
                >
                    Explore !
                </Link>
            </div>
        </div>
    );
}
