import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";
import { UserContext } from './UserContext';
import GiftCard from "./GiftCard";
import { Button,Card,Form } from "react-bootstrap";
import NewRecipient from "./NewRecipient";

export default function Gifts(){
    const currentUser = useContext(UserContext)

    return (
        <div>
            <NewRecipient />
            <GiftCard />
        </div>
    )

}