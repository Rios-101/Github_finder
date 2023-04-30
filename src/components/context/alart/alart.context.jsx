import { createContext,useReducer } from "react";
import { AlartReducer } from "./alartReducer";


export const AlartContext = createContext();


export const AlartProvider = ({children})=>{

    const initialState = null;

    const [state,dispatch] = useReducer(AlartReducer,initialState)

    const setAlart =(msg,type)=>{
        dispatch({type:"SET_ALART",payload:{msg,type}})
        setTimeout(()=>{dispatch({type:"REMOVE_ALART"})},3000)
    }

    const value = {alart:state,setAlart}
    return <AlartContext.Provider value={value}>{children}</AlartContext.Provider>

}

