import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";
import { UserContext, UserDispatchContext } from './UserContext';
import GiftCard from "./GiftCard";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function NewGift(recipient){
    const currentUser = useContext(UserContext)
    const setCurrentUser = useContext(UserDispatchContext)
    const [formState, setFormState] = useState({
        name: "",
        description: "",
        photo_url: "",
        bought: false,
        made: false,
        wrapped: false,
        price: "",
        priority: "",
        recipient_id: recipient.recipient.id,
        user_id: currentUser.id
    })

    const handleChange = (e) => {
        setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

      const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/gifts", {
            method: "POST",
            withCredentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState)
        }).then((res) => res.json()).then((user) => setCurrentUser(user))
    }

    return <div>
         <div>
        <Form className="container" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control 
                type="text"
                id="name" 
                placeholder="Name" 
                value={formState.name}
                onChange={handleChange}>
                </Form.Control>
                <Form.Control 
                type="text"
                id="description" 
                placeholder="Description" 
                value={formState.description}
                onChange={handleChange}>
                </Form.Control>
                <Form.Control 
                type="text" 
                id="photo_url"
                value={formState.photo_url}
                onChange={handleChange}
                placeholder="Photo URL"></Form.Control>
                <Form.Control 
                type="text" 
                id="price"
                value={formState.price}
                onChange={handleChange}
                placeholder="Price"></Form.Control>
                <Form.Label>Priority:</Form.Label>
                <Form.Select
                value={formState.priority}
                onChange={handleChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
            </Form.Group>
            <Button type="submit" id="submit" value="submit">Add New Gift</Button>
        </Form>
        </div>
    </div>
}