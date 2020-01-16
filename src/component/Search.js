import React from "react";
import './css/Home.css'



const Search = ({search, searchTerm}) => {


  return (
    <React.Fragment>

        <input type="text" 
        value={searchTerm}
        placeholder="search for your gif" 
        onChange={search}
        className="input"/>
        
               
    </React.Fragment>
  );
}


export default Search;