import React from 'react';
import Article from './Article';
import './body.css';
class Body extends React.Component {   
    nbrArticle=(nbrArt)=>{
        console.log(nbrArt);
    }
    render() {
        return(
            <div className="containerBody">
                <Article givenumberofArticls={(x)=>this.nbrArticle(x)}/>
            </div>
        );
    }
}
export default Body;