import React, { useState, useEffect, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, UserDispatchContext } from './UserContext';

function Logout() {
    const currentUser = useContext(UserContext)
    const setCurrentUser = useContext(UserDispatchContext)
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