import React from 'react';
import DemoComponent from '../DemoComponent';
import DisplayTime from './DisplayTime';
import Navigation from './navigation'

class Header extends React.Component {  
    currentPage = "heure";
    onNavigationParent = (destination) =>{
        this.currentPage = destination;
        console.log(this.currentPage);
    }
    render() {
        return (
            <header className='App-header'>
                <Navigation onNavigation={this.onNavigationParent} />
                {this.currentPage}
                { this.currentPage == "accueil" && <DemoComponent />}
                { this.currentPage == "heure" &&
                 <DisplayTime />}
            </header>
        )

    }
}
export default Header;