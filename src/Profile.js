import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";
import { UserContext } from "./UserContext";

export default function Profile(){
    const { currentUser, setCurrentUser } = useContext(UserContext)


    return <div>{currentUser.first_name}</div>
}