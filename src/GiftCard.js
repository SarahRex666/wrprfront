import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";
import { UserContext, UserDispatchContext } from './UserContext';
import NewGift from "./NewGift";
import { Button, Card, Accordion, ListGroup, Row, Col, Container } from "react-bootstrap";

export default function GiftCard(){
    const currentUser = useContext(UserContext)
    const setCurrentUser = useContext(UserDispatchContext)

    const handleClick = (gift) => {
        fetch(`/gifts/${gift.id}`, {
            method: "DELETE",
            withCredentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((user) => setCurrentUser(user))
    }

        const deleteRecipient = (recipient) => {
        fetch(`/recipients/${recipient.id}`, {
            method: "DELETE",
            withCredentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((user) => setCurrentUser(user))
    }

    console.log(currentUser.recipients)


    return(<Container>
            <Row>
                {currentUser.recipients.map((recipient) => (
                <Col>
        <div key={recipient.id} >
            <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header>{recipient.name}</Accordion.Header>
        <Accordion.Body>{recipient.relationship}</Accordion.Body>
        <Accordion.Body>{recipient.priority}</Accordion.Body>
        </Accordion.Item>
    </Accordion>
    <Accordion>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Add New Gift</Accordion.Header>
            <Accordion.Body>
                <NewGift recipient={recipient}/>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    <Button className="mt-3" onClick={() => deleteRecipient(recipient)}>Delete Recipient</Button>
    </Card.Body>
    {recipient.gifts.map((gift) => (
        <div key={gift.id}>
    <Accordion>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Gifts:</Accordion.Header>
            <Accordion.Body>
            <ListGroup>
            <ListGroup.Item>{gift.name}</ListGroup.Item>
            <ListGroup.Item>{gift.price}$</ListGroup.Item>
            <ListGroup.Item>Bought: {gift.bought.toString()}</ListGroup.Item>
            <ListGroup.Item>Wrapped: {gift.wrapped.toString()}</ListGroup.Item>
            <ListGroup.Item>Made: {gift.made.toString()}</ListGroup.Item>
            <Button onClick={() => handleClick(gift)}>Delete Gift</Button>
            </ListGroup>
            </Accordion.Body>
            </Accordion.Item>
    </Accordion>
            </div>

    ))}
       </Card>
    </div>
    </Col>
    ))}
    </Row>
    </Container>)
}