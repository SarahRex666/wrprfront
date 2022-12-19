import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";
import { UserContext, UserDispatchContext } from './UserContext';
import GiftCard from "./GiftCard";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NewGift from "./NewGift";

export default function NewRecipient(){
    const currentUser = useContext(UserContext)
    const setCurrentUser = useContext(UserDispatchContext)
    const [formState, setFormState] = useState({
        name: "",
        relationship: "",
        priority: "",
        user_id: currentUser.id
    })

    console.log(formState)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/recipients", {
            method: "POST",
            withCredentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState)
        }).then((res) => res.json()).then((user) => setCurrentUser(user))
        setFormState("")
    }

      const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

    return (
        <div>
        <Form className="container my-3" onSubmit={handleSubmit}>
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
                id="relationship"
                value={formState.relationship}
                onChange={handleChange}
                placeholder="Relationship"></Form.Control>
                <Form.Select
                id="priority"
                value={formState.priority}
                onChange={handleChange}>
                    <option>Priority</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
            </Form.Group>
            <Button className="mt-2" type="submit" id="submit" value="submit">Add New Recipient</Button>
        </Form>
        </div>
    )
}