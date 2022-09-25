import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <>
    
    <div>
        <div className="nav">
            <img className="logo" src="https://www.izasascientific.com/sites/default/files/2021-08/logo%20precipoint.png" alt="logo" />
            <a className="public" href="/">Public Slides</a>
            <a className="rest" href="/">My Slides</a>
            <a className="rest" href="/">Upload</a>
            <div className="Btn">
                <a className="rest1" href="/">Login</a>
                <a className="rest2" href="/">Get Started</a>
            </div>
        </div>
    </div>
    
    </>
  );
}

export default Navbar;