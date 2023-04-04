import React, { useState } from "react";
import './Navbar.css';
import logo from '../HomePage/books.png'
import userpng from './user.png'


function Navbar() {
    
    
    return (
        <nav className="navigationheader">

            <div className="navbar">
                <div> <img src={logo} alt="" /><p>Q-Download</p></div>
                <ul style={{listStyle: "none outside"}}>
                    {/* <li><img src={userpng} alt="" /></li> */}
                </ul>
            </div>
            <hr />
            
        </nav>
    )
}

export default Navbar;