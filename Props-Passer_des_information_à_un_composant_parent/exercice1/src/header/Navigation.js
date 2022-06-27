import React from 'react';
import './navigation.css';
class Navigation extends React.Component {
    render() {  
        return (
                <ul>
                    <li><button>HOME</button></li>
                    <li><button>GALLERY</button></li>
                    <li><button>CONTACT</button></li>
                </ul>
        );
    }
}
export default Navigation;