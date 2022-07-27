import React from "react";
import websiteLogo from "./Instagram_logo.png";
import './Logo.css';

function Logo() {
    return(
        <div className="col-3 header-logo"> 
            <img src={websiteLogo} alt="Website Logo" />
        </div>
    )
}

export default Logo;