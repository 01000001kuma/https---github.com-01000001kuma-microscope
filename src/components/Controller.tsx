import React from "react";
import "./Controller.css";
// import Full from "../../assets/Full.png";
// import Zoom from "../home/akuma/Documents/Lab/public/iconmonstr-zoom-1.svg";
// import Info from "../home/akuma/Documents/Lab/public/iconmonstr-info-1.svg";
// import Square from "../home/akuma/Documents/Lab/public/iconmonstr-x-mark-square-lined.svg";



function Controller() {
  return (
    <>
    
    <div>
        <div className="nav">
            
            <a className="zoom1" href="/">5x</a>
            <a className="zoom2" href="/">10x</a>
            <a className="zoom3" href="/">20x</a>
            <a className="zoom4" href="/">40x</a>
            <a className="zoom5" href="/">60x</a>
            <a className="minus" href="/">-</a>
            <a className="minus" href="/">+</a>
            {/* <img className="logo" src={Full} alt="fit" />
            <img className="logo" src={Zoom} alt="cross" /> */}

            {/* <div className="Btn">
                
                <img className="logo" src={Info} alt="info" />
                <img className="logo" src={Square} alt="full" />

            </div> */}

        </div>
    </div>
    
    </>
  );
}

export default Controller;