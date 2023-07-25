import React from "react";

const Search = ({searchChange}) =>{
    return(
        <div className="tc">
            <input 
            className="i pa3 br3 tc bg-lightest-green ba b--light-green"
             type="search" 
             placeholder="Search versions"
             onChange={searchChange}
             />

        </div>
    );
}

export default Search