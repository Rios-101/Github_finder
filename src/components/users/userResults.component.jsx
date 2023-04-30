import { useContext,useState } from "react"
import ReactPaginate from "react-paginate"
import Spinner from "../asset/spinner/spinner.component"
import { GithubContext } from "../context/github/githubContext"
import UserItem from "./userItem.component"



const UserResults = ()=>{

  const {userResults,isLoading} = useContext(GithubContext)
    // pagination starting code
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(10 );


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const currentPosts = userResults.slice(indexOfLastPost, indexOfLastPost + postsPerPage);

    // page count
    const pageCount = Math.ceil(userResults.length / postsPerPage)
    // change page
    const changePage = ({selected})=>{
        setCurrentPage(selected)
    }

    if(!isLoading){
        return (
            <>
                <div className="grid my-6 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {currentPosts.map(e=><UserItem key={e.id} event={e}/>)}
                </div>
                {userResults.length > 0 && <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"flex mb-5 gap-12 justify-center"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"bg-slate-800 rounded-full text-white px-4"}
                />}
            </>
        )
    }else{
        return (<Spinner/>)
    }
}

export default UserResults