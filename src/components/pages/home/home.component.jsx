import UserResults from "../../users/userResults.component"
import UserSearch from "../../users/userSearch.component"




const Home = ()=>{



    return(
        <div className="container mx-auto">
            <UserSearch/>
            <UserResults/>
        </div>
    )
}

export default Home