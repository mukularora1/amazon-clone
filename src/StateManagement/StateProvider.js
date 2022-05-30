import { createContext,useReducer,useContext } from "react";
import reducer from "./Reducer";

const stateContext= createContext();




const StateProvider=({children})=>{


    return(
        <stateContext.Provider value={useReducer(reducer,[])}>
{children}
        </stateContext.Provider>
    )
}
const useStateValue = () => useContext(stateContext);
export {useStateValue};
export default StateProvider;