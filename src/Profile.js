import React, { useState, createContext, useContext, useEffect, useCallback } from "react";
import { UserContext, UserDispatchContext } from './UserContext';

export default function Profile(){
    const currentUser = useContext(UserContext)


    return (<div>{currentUser.first_name}</div>)
}