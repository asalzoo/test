import React from "react";
import './SearchBox.css';

function SearchBox() {
    return(
        <div className="col-7 header-searchbox">
            <input type="text" placeholder="Search" />
        </div>
    )
}

export default SearchBox;