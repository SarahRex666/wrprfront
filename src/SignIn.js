import React, { useState, useEffect, useMemo, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from './UserContext';
import { UserDispatchContext } from "./UserContext";



export default function SignIn(){
    const currentUser = useContext(UserContext)
    const setCurrentUser = useContext(UserDispatchContext)
    const [formState, setFormState] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      withCredentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.id) setCurrentUser(r)}).then(navigate("/home"))
  };


    return <div><h1>Sign In!</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control 
            type="text"
            id="username"
            placeholder="username"
            value={formState.username}
            onChange={handleChange}
            />
            <Form.Control 
            type="password"
            id="password"
            placeholder="password"
            value={formState.password}
            onChange={handleChange}
            />
        </Form.Group>
                  <Button
            variant="outline-secondary"
            type="submit"
            id="submit"
            value="Submit"
          >
            Submit
          </Button>
    </Form>
    </div>
}