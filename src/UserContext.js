import { createContext, useState, useEffect } from "react";

export const UserContext = createContext([])
export const UserDispatchContext = createContext([])

function UserProvider({ children }){
    const [currentUser, setCurrentUser] = useState("")

    return (
        <UserContext.Provider value={currentUser}>
            <UserDispatchContext.Provider value={setCurrentUser}>
                { children }
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )

}

export { UserProvider } 