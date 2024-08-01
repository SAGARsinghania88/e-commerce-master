import { createContext, useReducer } from "react";
// import reducer from "../context/arrayre"



const data = createContext()

const reducer = (state, action) => {

    if (action.type === "filter") {

        const filterdata = state.array.filter((e) => e !== action.payload)

        return {
            ...state,

            array: filterdata


        }

    }


    if (action.type === "add") {

        const choosedata = action.payload

        return { ...state, choose: choosedata }

    }


}





const Appprovider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, { array: ["manish ", "bhola", "bella", "aate", "anna"] , choose: " " })




    return (

        <data.Provider value={{ ...state, dispatch }}>
            {children}
        </data.Provider>



    )





}


export { Appprovider, data }

















