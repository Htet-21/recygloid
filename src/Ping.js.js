import React from "react";
import './style.css';
import Navicon from "./Navicon";
import "@fontsource/poppins";
import mail from './mail.png';
import phone from './phone.png';
import home from './home.png';
import ping from './ping.png';


const Ping = () => {
    return ( 
        <div>
            <div className="background">
            <Navicon />
            
            <div className="inner-block">
            <div className="infos">
            <img id="pf" src={ping} className="App-logo" alt="logo" />
            <p id="quote">"This is a sample quote for a sample process."</p>
                 <h2>Mrs. Pingkapat Butnumpet</h2>
                 <p id="pos">Business Development Associate </p>
                 <img id="logo" src={mail} alt="mail" />
                 <p>Ping.recyglo@gmail.com</p>
                 <img id="logo" src={phone} alt="phone" />
                 <p>(+66) 66903584512</p>
                 <img id="logo" src={home} alt="home" />
                 <p>5 floor, Siripanich Building, 191 Huay Kaew Road, Suthep Subdistrict, Mueang, Chiang Mai 50200, Thailand</p>
                 
                 <p id="cpr">© Copyright 2022 by RecyGlo Company Pte. Ltd. All rights reserved.</p>
                 </div>
                
         
                </div>
            </div>
            </div>
     );
}
 
export default Ping;