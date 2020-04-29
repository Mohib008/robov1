import React from "react";


const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
        <input className=" tc pa3 ba b--light-yellow bg-lighttes-blue" type="Search" placeholder="Search Robots" onChange={searchChange} />
        </div>
    );
}

export default SearchBox;