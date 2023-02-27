import React, { useState } from "react";
import './Navbar.css';


function Navbar() {
    
    
    return (
        <nav className="navigationheader">

            <div className="navbar">
                <img src="https://img.icons8.com/parakeet/48/null/clock.png" alt="" />
                <ul style={{listStyle: "none outside"}}>
                    <li><img src="https://img.icons8.com/parakeet/48/null/user-male-circle.png" alt="" /></li>
                </ul>
            </div>
            <hr />
            
        </nav>
    )
}

export default Navbar;