import { useEffect, useState, useRef } from "react";
import Loader from "./Loader";
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";

// vide.js player
import "video.js/dist/video-js.css";
import '@digitaltheatre/videojs-theme-dt/dist/theme/index.css';
import videojs from "video.js";
import '/src/assets/styles/video.css'

export default function Video() {
    const params = useParams();
    const { url, direct = null } = useParams();
    const [video, setVideo] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [showDownloadBtn, setShowDownloadBtn] = useState(false);
    const [loaderMsg, setLoaderMsg] = useState('Getting video info...');
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    async function getVideoFromUrl() {
        if (url) {
            try {
                const req = await axios.get(`/api/getVideo?url=${url}`);
                const { data, status } = req;
                if (status === 200 && ((data.length == 1 && data.videoUrl) || data.length > 1 && data.videoSrc)) {
                    return { ...data, videoUrl: data.videoUrl || data.videoSrc };
                }
                return { success: false, message: data.message ?? 'Something went wrong !' };
            } catch (error) { }
            return { success: false, message: 'Something went wrong !' };
        }
    }

    useEffect(() => {
        (async () => {
            let videoUrl = {};

            if (!direct) {
                videoUrl = await getVideoFromUrl();

                if (!videoUrl || !videoUrl.success) {
                    return navigate(`/error/${videoUrl.message}`);
                }

                if (videoUrl.length > 1) {
                    return navigate(`/videos`, { state: { videoSources: videoUrl.videoUrl } });
                }
            } else {
                videoUrl.videoUrl = url;
            }

            setShowDownloadBtn(true);
            setVideo(videoUrl.videoUrl);
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (video && videoRef.current) {
            playerRef.current = videojs(videoRef.current, {
                autoplay: true,
                controls: true,
                responsive: true,
                preload: true,
            });

            playerRef.current.on('play', () => {
                setShowDownloadBtn(false)
            })

            playerRef.current.on('pause', () => {
                setShowDownloadBtn(true)
            })

            return () => {
                if (playerRef.current) {
                    playerRef.current.dispose();
                }
            };
        }
    }, [video]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = video;
        link.download = "ElephantsDream.mp4";
        link.click();
        showDownloadBtn(null)
    };

    return (
        <div className="size-full relative">
            {showDownloadBtn !== null && showDownloadBtn && <div className="absolute top-0 left-0 flex justify-end w-full z-4 p-4" onClick={handleDownload}>
                <button className="btn bg-green-500 py-4 px-[5rem] rounded font-bold text-white">Download Video</button>
            </div>}
            {video && (
                <div className="size-full bg-black">
                    <video
                        ref={videoRef}
                        className="video-js vjs-theme-dt">
                        <source src={video} type="video/mp4" />
                        <p className="vjs-no-js">
                            To view this video, please enable JavaScript and consider upgrading to a
                            web browser that{" "}
                            <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer">
                                supports HTML5 video
                            </a>.
                        </p>
                    </video>
                </div>
            )}
            {isLoading && <Loader loaderMsg={loaderMsg} />}
        </div>
    );
}
