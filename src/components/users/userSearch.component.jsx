import { useState,useContext } from 'react';
import { AlartContext } from '../context/alart/alart.context';
import { GithubContext } from '../context/github/githubContext';



const UserSearch = ()=>{

    const [text,setText] = useState("")

    const {userResults,searchUsers,clearUsers } = useContext(GithubContext)

    const{setAlart} = useContext(AlartContext)
    

    const textChangeHandler = (e)=>{
        setText(e.target.value);
    }


    const submitHandler = (e)=>{
        e.preventDefault();
        if(text === ""){
            setAlart("Please enter a github name","error");
        }else{
            searchUsers(text)
            setText("");
        }
    }

    const clearHandler = (e)=>{
        clearUsers()
    }

    return(
        <div className='grid mx-4 grid-cols-1 mt-5 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 items-center mb-8 gap-8'>
        <form onSubmit={submitHandler}>
            <div className="relative w-full">
                <input type="search" value={text} onChange={textChangeHandler} className="block p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-[4px]  border border-gray-800 " placeholder="Search "/>
                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-gray-800 rounded-r border border-gray-800 hover:bg-gray-700 w-[100px] h-auto">
                    Go
                </button>
            </div>
        </form>
        <div className="flex item-center ">
            {userResults.length > 0 && 
                <button type="button" onClick={clearHandler} className="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-[12px] mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 mt-[7px]">
                    Clear
                </button>
            }
        </div>
        
      </div>
    )
}

export default UserSearch