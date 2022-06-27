import React from 'react';
import './article.css';
import tartine from '../img/tartine.png';
class Article extends React.Component {
    render() {
        return (
            <div className="les-Article">
                <button onClick={()=>console.log(this.props.titre)}>Val-De-props-titre</button>
                {/* //ligne1 */}
            <div className="ligne1">
                <div className='img1'>
                <img src={tartine} alt="tartine"></img>
                </div>
                <div className="text-ligne1">
                    <p><span>Titre principle<br></br></span>
                    <span>Mon premier article<br></br></span>
                    Lorem bla bla Lorem
                    Lorem bla bla Lorem 
                    Lorem bla bla Lorem 
                    Lorem bla bla Lorem  bla bla lorem Lorem bla bla lorem Lorem bla bla lorem Lorem bla bla lorem Lorem bla bla Lorem bla bla Lorem bla</p>
                </div>
            </div>

             {/* //ligne2 */}
             <div className="ligne1" >
                <div className='img1'>
                <img src={tartine} alt="tartine"></img>
                </div>
                <div className="text-ligne1">
                    <p><span>Titre principle<br></br></span>
                    <span>Mon premier article<br></br></span>
                    Lorem bla bla Lorem
                    Lorem bla bla Lorem 
                    Lorem bla bla Lorem 
                    Lorem bla bla Lorem  bla bla lorem Lorem bla bla lorem Lorem bla bla lorem Lorem bla bla lorem Lorem bla bla Lorem bla bla Lorem bla</p>
                </div>
            </div>
            </div>
        );
    }
}
export default Article;