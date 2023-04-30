import { useNavigate } from "react-router-dom"

const NotFound = ()=>{

    const navigate = useNavigate()

    const home = ()=>{
        navigate("/")
    }

    return(
        <div className="container mx-auto flex items-center gap-3 flex-col text-center text-white">
            <h2 className="text-7xl font-bold ">Oops!</h2>
            <p className="text-4xl py-4 ">404 - Page Not Found!</p>
            <button onClick={home} className="p-3 bg-purple-600 hover:bg-purple-500 rounded w-[15%]">
                <i class="fas fa-home pr-2"></i>
                BACK TO HOME
            </button>
        </div>
    )
}

export default NotFound