import React from "react";
import './style.css';
import Navicon from "./Navicon";
import "@fontsource/poppins";
import heinhtetinfo from "./heininfo.jpg";


const Heinhtetinfo = () => {
    return ( 
        <div>
            <div className="background">
            <Navicon />
            
            <div className="inner-block">
           
            <div className="infos2">
            <img id="pdf" src={heinhtetinfo} className="App-logo" alt="logo" />
                 </div>
                
         
                </div>
            </div>
            </div>
     );
}
 
export default Heinhtetinfo;