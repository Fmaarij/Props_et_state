import React from 'react';
import DemoComponent from '../DemoComponent';
import DisplayTime from './DisplayTime';
import Navigation from './navigation'

class Header extends React.Component {  
    currentPage = "heure";

    render() {
        //second methode =  La condition à la volée
        return (
            <header className='App-header'>
                <Navigation />
                {this.currentPage}
                { this.currentPage == "accueil" && <DemoComponent />}
                { this.currentPage == "heure" && <DisplayTime format="humainDate" />}
            </header>
        )

    }
}
export default Header;