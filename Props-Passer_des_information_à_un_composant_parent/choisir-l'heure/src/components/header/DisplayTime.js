import React from "react";
class DisplayTime extends React.Component {
    curretnPage = "heure";
    render() {  
        let dateCourante = new Date();
        let tempsJavascript = dateCourante.getTime();
        let tempsPhp = tempsJavascript/1000;
        return (
            <div>
                 <p>
                    Temps Javascript: {tempsJavascript} milliseconds
                </p>
                <p>
                    Temps PHP: {tempsPhp} seconds
                </p>
                <p>
                    Date pour humain: {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}
                </p>
            </div>
        );
    }
}
export default DisplayTime;