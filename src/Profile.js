import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";
import { UserContext } from './UserContext';

export default function Profile(){
    const currentUser = useContext(UserContext)

    console.log(currentUser)


    return <div>{currentUser.first_name}</div>
}