import { Link } from "react-router-dom"

const UserItem = ({event}) =>{
    const {login, avatar_url} = event
    return(
        <div className="flex gap-3 flex-col items-center rounded-lg  p-3 shadow-3xl  md:flex-row md:max-w-xl ">
           <img className="h-[50px] w-[50px] rounded-[100%]" src={avatar_url} alt="Avater" />
           <div className="text-white text-center">
                <h2>{login}</h2>
                <Link to={`/${login}`} className="text-[13px] text-[#6B728E]">View Profile</Link>
           </div>
        </div>
    )
}

export default UserItem