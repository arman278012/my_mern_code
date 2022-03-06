import { createContext, useState } from "react";

export const userContext=createContext()

export const UserProvider=({children})=>{

    const getUser=()=>{
        let sessionUSer=sessionStorage.getItem('user')
        if(typeof sessionUSer=="object"){
            return JSON.parse(sessionUSer)
        }
    }
    
    const [loggedin, setloggedin] = useState(
        typeof sessionStorage.getItem("user")=="object"? false:true
    )
    const [currentUser, setCurrentUser] = useState(getUser())

    return  (
        <userContext.Provider value={{currentUser, setCurrentUser,loggedin, setloggedin}}>
            {children}
        </userContext.Provider>
    )
}