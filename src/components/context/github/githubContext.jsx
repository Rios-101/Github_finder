// import { createContext, useState } from "react";
import { createContext, useReducer } from "react";
import GithubReducer from "./githubReducer";

export const GithubContext = createContext({
    userResults:[],
    isLoading:true,
    searchUsers:()=>{},
    clearUsers:()=>{},
})

export const GithubProvider =({children})=>{
    // const [userResults,setUserResults] = useState([])
    // const [isLoading,setIsLoading] = useState(true)

    const initial = {
        userResults: [],
        user:{},
        repos:[],
        isLoading:false
    }

    const [state,dispatch] = useReducer(GithubReducer, initial)


    // Get First 30 users (for testing purpose)
    // const data = async ()=>{
    //     dispatch({type:"SET_LOADING"})
    //     const info = await fetch("https://api.github.com/users",{
    //       headers: {
    //         Authorization: "token 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"
    //       }
    //     })
    
    //     const res = await info.json()
    
    //     // setTimeout(()=>{
    //     //     dispatch({
    //     //         type:"GET_USERS",
    //     //         payload:res
    //     //     })
    //     // },5000)
    //     // setUserResults(res)
    //     // setIsLoading(false)

    //     dispatch({
    //         type:"GET_USERS",
    //         payload:res
    //     })

    //     dispatch({})
    //   }
    const searchUsers = async (user)=>{
        dispatch({type:"SET_LOADING"})
        const info = await fetch(`https://api.github.com/search/users?q=${user}`,{
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_AUTH_KEY}`
          }
        })
    
        const {items} = await info.json()


        dispatch({
            type:"GET_USERS",
            payload:items
        })

      }

      const getSingleUser = async (user)=>{
        dispatch({type:"SET_LOADING"})
        const info = await fetch(`https://api.github.com/users/${user}`,{
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_AUTH_KEY}`
          }
        })
    
        const data = await info.json()


        dispatch({
            type:"GET_SINGLE_USER",
            payload:data
        })

      }

      const getSingleUserRepos = async (user)=>{
        const info = await fetch(`https://api.github.com/users/${user}/repos`,{
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_AUTH_KEY}`
          }
        })

        const data = await info.json()

        dispatch({
          type:"GET_REPOS",
          payload:data
        })
        
      }

      const clearUsers =()=>{
        dispatch({type:"CLEAR"})
      }

    const value = {userResults: state.userResults,isLoading:state.isLoading,user:state.user,repos:state.repos,searchUsers,clearUsers,getSingleUser,getSingleUserRepos}
    return <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
}