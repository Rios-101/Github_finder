


export const AlartReducer= (state, action) =>{
    const {type,payload} = action;

    switch(type){
        case "SET_ALART":
            return payload
        case "REMOVE_ALART":
            return null
        default:
            return state
    }
}