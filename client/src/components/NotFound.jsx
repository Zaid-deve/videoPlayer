import { Link } from "react-router-dom"

export default function NotFound(){
    return (
        <div className="container h-full flex justify-center items-center mx-auto text-center px-4 flex-col">
            <h1 className="text-[13rem] font-bold text-red-500">404</h1>
            <p className="mt-3 font-bold">Sorry, The requested resource was not found or is under maintainence !</p>
            <Link to='/' className="mt-5 px-[13rem] py-3 bg-black rounded font-bold text-white">Go to Home</Link>
        </div>
    )
}