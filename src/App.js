import NavigationBar from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Logout from './Logout';
import { UserContext } from './UserContext';
import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";




export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  const providerValue = useMemo(() => ({currentUser, setCurrentUser}), [currentUser, setCurrentUser])

  console.log(currentUser)

    useEffect(() => {
    fetch("http://localhost:3000/me", {
      withCredentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setAuthChecked(true);
        });
      } else setAuthChecked(true);
    });
  }, []);

  return (
    <UserContext.Provider value={providerValue}>
    <BrowserRouter>
    <nav>
    <NavigationBar />
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}



