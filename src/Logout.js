import React, { useState, useEffect, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Logout() {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
    fetch("/logout", {
      withCredentials: "include",
      method: "DELETE",
    })
      .then(() => setCurrentUser([]))
      .then(navigate("/"));
  });
  return <div></div>;
}

export default Logout;