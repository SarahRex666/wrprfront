import userEvent from "@testing-library/user-event";
import React, {useContext, useState, useEffect} from "react";
import { UserContext, UserDispatchContext } from './UserContext';


export default function Home(){
    const currentUser = useContext(UserContext)


    if (currentUser && currentUser.id){
    return (
    <div>
        {currentUser.username}
    </div>)
    }
}