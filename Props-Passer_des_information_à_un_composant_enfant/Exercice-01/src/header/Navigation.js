import React from 'react';
import './navigation.css';
class Navigation extends React.Component {
    homePage =()=>{
        console.log("accueil");
    }
    galleryPage =()=>{
        console.log("gallery");
    }
    contactPage =()=>{
        console.log("contact");
    }
    render() {  
        return (
                <ul>
                    <li><button onClick={this.homePage}>HOME</button></li>
                    <li><button onClick={this.galleryPage}>GALLERY</button></li>
                    <li><button onClick={this.contactPage}>CONTACT</button></li>
                </ul>
        );
    }
}
export default Navigation;