import React, { useState }  from "react";
import '../styles/search.css';

const Search = (text) => {
    return (
        <>
        <input className="search-input" type={text}></input>
        </>
    );
}

export default Search;