import spinner from "../spinner/gif/loading-gif.gif"


const Spinner = ()=>{

    return(
        <div className="flex justify-center py-4">
            <img className="w-[5rem] h-[5rem]" src={spinner} alt="Loading..." />
        </div>
    )
}

export default Spinner