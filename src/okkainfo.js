import React from "react";
import './style.css';
import Navicon from "./Navicon";
import "@fontsource/poppins";
import pinginfo from "./okkainfo.jpg";


const Okkainfo = () => {
    return ( 
        <div>
            <div className="background">
            <Navicon />
            
            <div className="inner-block2">
           
            <div className="infos2">
            <img id="pdf" src={pinginfo} className="App-logo" alt="logo" />
                 </div>
                
         
                </div>
            </div>
            </div>
     );
}
 
export default Okkainfo;