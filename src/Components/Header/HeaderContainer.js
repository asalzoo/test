import React from "react";
import Logo from './Logo/Logo';
import './HeaderContainer.css';
import SearchBox from "./Searchbox/SearchBox";

function HeaderContainer() {
    return(
        <div className="header">
            <div className="row justify-content-between">
                <Logo />
                <SearchBox />
            </div>
        </div>

    )
}

export default HeaderContainer;