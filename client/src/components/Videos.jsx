import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Videos() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { videoSources } = state

    if (!state || !state.videoSources) {
        return navigate(`${encodeURIComponent(`/error/something went wrong`)}`)
    }

    return (
        <div className="container h-full overflow-auto mx-auto p-5">
            <h3 className='text-2xl font-bold mb-10'>There are multiple sources of video found on the page:</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {videoSources.map(src => {
                    return (
                        <div className='shadow-xl rounded-xl overflow-hidden w-full' style={{ maxWidth: '260px' }}>
                            <video src={src} preload='true' className='bg-black' height="200px" width="100%"></video>
                            <div className="p-4 font-bold">
                                <div>`{src.split('/').pop()}`</div>
                                <Link className="btn bg-black text-center cursor-pointer mt-3 p-3 rounded-full block w-full text-white font-bold" to={`/video/${encodeURIComponent(src)}/direct`}>I Want To Play This</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}