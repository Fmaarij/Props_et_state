import React from 'react';
import Navigation from './Navigation.js';
import SearchBar from './SearchBar.js';
import './header.css'; 

class Header extends React.Component {

    render() {
        return(
            <div className='header'>
            < Navigation />
            < SearchBar />
            </div>
        );
    }
}
export default Header;
