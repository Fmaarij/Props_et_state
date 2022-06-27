import React from "react";
class DisplayTime extends React.Component {
    curretnPage = "heure";
    render() {  
        console.log(this.props);
        let dateCourante = new Date();
        let tempsJavascript = dateCourante.getTime();
        let tempsPhp = tempsJavascript/1000;
        return (
            <div>
                {this.props.format==="jsTime" &&
                    <p>
                        Temps Javascript: {tempsJavascript} milliseconds
                    </p>
                }
                {this.props.format==="phpTime" && 
                    <p>
                        Temps PHP: {tempsJavascript/1000} seconds
                    </p>
                }
                {this.props.format==="humainDate" &&
                    <p>
                         Date pour humain: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
                    </p>
                }    

            </div>
        );
    }
}
export default DisplayTime;