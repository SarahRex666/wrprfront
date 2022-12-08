import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";
import { UserContext, UserDispatchContext } from './UserContext';
import NewGift from "./NewGift";
import { Button } from "react-bootstrap";

export default function GiftCard(){
    const currentUser = useContext(UserContext)
    const setCurrentUser = useContext(UserDispatchContext)

    const handleClick = (gift) => {
        fetch(`http://localhost:3000/gifts/${gift.id}`, {
            method: "DELETE",
            withCredentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

        const deleteRecipient = (recipient) => {
        fetch(`http://localhost:3000/recipients/${recipient.id}`, {
            method: "DELETE",
            withCredentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        })
    }


    return(<div>{currentUser.recipients.map((recipient) => (
        <div key={recipient.id}>
    <h1>{recipient.name}</h1>
    <p>{recipient.relationship}</p>
    <NewGift recipient={recipient}/>
    <Button onClick={() => deleteRecipient(recipient)}>Delete Recipient</Button>
    {recipient.gifts.map((gift) => (
        <div key={gift.id}>
            <p>{gift.name}</p>
            <p>{gift.price}$</p>
            <p>Bought: {gift.bought.toString()}</p>
            <p>Wrapped: {gift.wrapped.toString()}</p>
            <p>Made: {gift.made.toString()}</p>
            <Button onClick={() => handleClick(gift)}>Delete Gift</Button>
            </div>
    ))}
    </div>
    ))}
    </div>)
}