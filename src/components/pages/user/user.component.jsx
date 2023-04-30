import { useContext, useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../asset/spinner/spinner.component";
import { GithubContext } from "../../context/github/githubContext";
import Repos from "../../users/repos.component";
import ReactPaginate from "react-paginate"

const User = () => {
  const { user,repos, getSingleUser,getSingleUserRepos, isLoading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getSingleUser(params.login);
    // eslint-disable-next-line
    getSingleUserRepos(params.login)
    // eslint-disable-next-line
  }, []);

    // pagination starting code
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(7);
  
  
      // Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const currentPosts = repos.slice(indexOfLastPost, indexOfLastPost + postsPerPage);
  
      // page count
      const pageCount = Math.ceil(repos.length / postsPerPage)
      // change page
      const changePage = ({selected})=>{
          setCurrentPage(selected)
      }

      

  if (!isLoading) {
    return (
      <div className="container mx-auto">
        <div className="my-4">
          <Link to={"/"} className="text-white text-[16px] ">
            Back To Search
          </Link>
        </div>
        <div className="grid  place-items-center md:place-items-start gap-6 md:px-0 px-10 mt-3 md:grid-cols-[250px_1fr]">
          <div className="relative">
            {/* Profile image */}
          <img
            src={`${user.avatar_url}`}
            alt="Avater"
            className="h-[16rem] w-full shadow-md border-black  rounded object-cover"
          />
          <div className="absolute bottom-3 left-6">
            <h3 className="text-white font-bold">{user.name}</h3>
            <p className="text-white">{user.login}</p>
          </div>
          </div>
          <div className=" w-full">
            {/* Profile Details */}
            <div className="flex gap-2 items-center">
              <h2 className="text-white text-[2rem] font-bold">{user.name}</h2>
              <div className="shadow-md border-black text-green-400 rounded-xl p-1">{user.type}</div>
            </div>
            <div>
              <p className="text-white py-4">{user.bio}</p>
            </div>
            <div className="text-center md:text-start">
              <a href={`${user.html_url}`} target="_blank" rel="noreferrer">
                <button type="button" className="text-white  hover:text-black border border-white hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Github Profile</button>
              </a>
            </div>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-3 mt-4 border-black rounded p-4 shadow-md">
              <div className="border-b-2 md:border-b-0 md:border-r-2 pb-2 border-[#D8D2CB]">
                <p className="text-[#E5DCC3]">Location</p>
                <h2 className="text-white">{user.location}</h2>
              </div>
              <div className="border-b-2 md:border-b-0 md:border-r-2 pb-2 border-[#D8D2CB]">
                <p className="text-[#E5DCC3]">Website</p>
                <a href={user.blog} target="_blank" rel="noreferrer"><h2 className="text-white">{user.blog}</h2></a>
              </div>
              <div>
                <p className="text-[#E5DCC3]">Twitter</p>
                <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer"><h2 className="text-white">{user.twitter_username}</h2></a>
              </div>
            </div>
          </div>
        </div>
           {/* Followers, following etc */}
           <div className="grid gap-2 grid-cols-2 md:grid-cols-4 mt-4 my-4 border-black rounded p-4 shadow-md">
              <div className="flex justify-around item-center border-r-2 border-[#D8D2CB]">
                <div>
                  <p className="text-[#E5DCC3]">Followers</p>
                  <h2 className="text-white font-bold text-[1.8rem]">{user.followers}</h2>
                </div>
                <div className="self-center">
                <i className="fas fa-users text-[#FF0075] text-[1.8rem]"></i>
                </div>
              </div>
              <div className="flex justify-around item-center border-r-2 border-[#D8D2CB]">
                <div>
                  <p className="text-[#E5DCC3]">Following</p>
                  <h2 className="text-white font-bold text-[1.8rem]">{user.following}</h2>
                </div>
                <div className="self-center">
                <i className="fas fa-user-friends text-[#FF0075] text-[1.8rem]"></i>
                </div>
              </div>
              <div className="flex justify-around item-center border-r-2 border-[#D8D2CB]">
                <div>
                  <p className="text-[#E5DCC3]">Public Repos</p>
                  <h2 className="text-white font-bold text-[2rem]">{user.public_repos}</h2>
                </div>
                <div className="self-center">
                <i className="fab fa-github-alt text-[#FF0075] text-[2rem]"></i>
                </div>
              </div>
              <div className="flex justify-around item-center border-r-2 border-[#D8D2CB]">
                <div>
                  <p className="text-[#E5DCC3]">Public Gist</p>
                  <h2 className="text-white font-bold text-[2rem]">{user.public_gists}</h2>
                </div>
                <div className="self-center">
                <i className="fas fa-store text-[#FF0075] text-[2rem]"></i>
                </div>
              </div>
            </div>
            <div className="shadow-md border-black py-2 mb-3">
              <h2 className="text-white p-2 font-bold text-[2rem] mx-2">Latest Repositories</h2>
              {/* <Repos url={repos.html_url} repos={repos.name} info={repos.description} watcher={repos.watchers_count} star={repos.stargazers_count} openIssues={repos.open_issues_count} fork={repos.forks_count}/> */}
              {currentPosts.map(repo => <Repos key={repo.id} url={repo.html_url} repos={repo.name} info={repo.description} watcher={repo.watchers_count} star={repo.stargazers_count} openIssues={repo.open_issues_count} fork={repo.forks_count}/>)}
            </div>
              {repos.length > 0 && <ReactPaginate
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
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default User;
