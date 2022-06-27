import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
    render() {
        return(
            <div className="search-bar">
            <label>Search : </label>
            <input></input>
            <button>GO</button>
            </div>
        );
    }
}
export default SearchBar;