import React from 'react';
import DemoComponent from '../DemoComponent';
import DisplayTime from './DisplayTime';
import Navigation from './navigation'

class Header extends React.Component {  
    currentPage = "heure";

    state = {
                formatTime:"phpTime"
            }

    onNavigationParent = (destination) =>{
        this.currentPage = destination;
        console.log(this.currentPage);
    }
    handelclick=(format)=>{
        console.log(format);
        this.setState({formatTime : format
        });
    }

    render() {
        return (
            <header className='App-header'>
                <Navigation onNavigation={this.onNavigationParent} />
                {this.currentPage}
                { this.currentPage == "accueil" && <DemoComponent />}
                { this.currentPage == "heure" &&
                <div>
                 <DisplayTime format={this.state.formatTime}/>
                 <button onClick={()=>this.handelclick('jsTime')} >Javascript</button>
                 <button onClick={()=>this.handelclick('phpTime')}>PHP</button>
                 <button onClick={()=>this.handelclick('humainTime')} >Humain</button>
                 </div>
                 }
            </header>
        )

    }
}
export default Header;