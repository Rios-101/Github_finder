
const GithubReducer = (state, action) =>{
    const {type, payload} = action;

    switch(type){
        case "GET_USERS":
            return {
                ...state,
                userResults:payload,
                isLoading:false
            }
        case "GET_SINGLE_USER":
            return {
                ...state,
                user:payload,
                isLoading:false
            }
        case "GET_REPOS":
            return {
                ...state,
                repos:payload,
                isLoading:false
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true
            }
        case "CLEAR":
            return {
                ...state,
                userResults:[],
            }
        default:
            return state
    }
}

export default GithubReducer