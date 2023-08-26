import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../logo.jpg";
// import {Login}  from '../routes/Login';
// import {Register } from '../routes/Register';
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick]= useState(false);
  const handleClick = () => setClick(!click);
  
  return (
    <>
    {/* <div className="Header"> */}
    <div className="lgo">
        <Link to="/">
        <img src={logo} alt="HOME" />
        </Link>
        </div>
    <div className="header">
    
        <ul className={click? "nav-menu active": "nav-menu"}>
        <li className="a1">
          <Link to="/">Home</Link>
        </li>
        <li className="b1">
          <Link to="/Dogs">Dogs</Link>
        </li>
        <li className="c1">
          <Link to="/Cats">Cats</Link>
        </li>
        <li className="d1">
          <Link to="/Birds">Birds</Link>
        </li>
        <li className="d1">
          <Link to="/Fishes">Fish</Link>
        </li>
        <li className="d1">
          <Link to="/About">Aboutus</Link>
        </li>
        {/* <li className="e1">
         <Link to="/login">Login</Link>
       </li>
       <li className="e1">
       <Link to="/register">Register</Link>
       </li> */}
        </ul> 
        <div className="hamburger" onClick={handleClick}>
          {click ? (
          <FaTimes size={20} style ={{color: "#fff"} }/>):
          (<FaBars size={20} />)}
        </div>
    </div>
    {/* </div> */}
    </>
  );
};

export default Navbar;
