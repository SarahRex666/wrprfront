import NavigationBar from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Logout from './Logout';
import Profile from './Profile';
import Gifts from './Gifts';
import React, { useState, useMemo, createContext, useContext, useEffect, useCallback } from "react";
import { UserProvider, UserContext, UserDispatchContext } from './UserContext';


export default function App() {

  return (
    <UserProvider>
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
        <Route path="/Gifts" element={<Gifts />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}



