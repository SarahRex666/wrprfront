import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";
import { UserContext } from "./UserContext";

export default function Gifts(){
    const { currentUser, setCurrentUser } = useContext(UserContext)

    return(<div>{currentUser.recipients.map((recipient) => (
        <div key={recipient.id}>
    <h1>{recipient.name}</h1>
    <p>{recipient.relationship}</p>
    {recipient.gifts.map((gift) => (
        <div key={gift.id}>
            <p>{gift.name}</p>
            <p>{gift.price}$</p>
            <p>Bought: {gift.bought.toString()}</p>
            <p>Wrapped: {gift.wrapped.toString()}</p>
            <p>Made: {gift.made.toString()}</p>
            </div>
    ))}
    </div>
    ))}
    </div>)
}