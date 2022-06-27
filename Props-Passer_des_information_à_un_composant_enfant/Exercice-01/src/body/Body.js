import React, { Fragment } from 'react';
import Article from './Article';
import './body.css';
class Body extends React.Component { 
    nombreArticle="2";  
    render() {
        return(
            <div>
                
            {this.nombreArticle >= 2 && 
                <div className="containerBody">
                <Article titre="Les tartines"/>
                <Article titre="Coding School"/>
                </div>
            }

            {this.nombreArticle<2 && <h1>Il n'y a pas d'artcile</h1>
            }
            
            </div>
     
        );
    }
}
export default Body;