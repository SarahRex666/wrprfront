import { createContext, useState, useEffect } from "react";

export const UserContext = createContext([])
export const UserDispatchContext = createContext([])

function UserProvider({ children }){
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        fetch("/me", {
            withCredentials: "include"
        }).then((res) => res.json()).then((user) => setCurrentUser(user))
    }, [])


    return (
        <UserContext.Provider value={currentUser}>
            <UserDispatchContext.Provider value={setCurrentUser}>
                { children }
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )

}

export { UserProvider } 