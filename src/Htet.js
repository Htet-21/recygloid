import React from "react";
import './style.css';
import Navicon from "./Navicon";
import "@fontsource/poppins";
import mail from './mail.png';
import phone from './phone.png';
import home from './home.png';
import kohtet from './kohtet.png';
import icon from './icon.png';


const Htet = () => {
    return ( 
        <div>
            <div className="background">
            <Navicon />
            
            <div className="inner-block">
            <div className="infos">
            <img id="pf" src={kohtet} className="App-logo" alt="logo" />
            <p id="quote">"This is a sample quote for a sample process."</p>
                 <h2>Mr. Okka Phyo Maung</h2>
                 <p id="pos">CFO</p>
                 <img id="logo" src={mail} alt="mail" />
                 <p>okka@recyglo.com</p>
                 <img id="logo" src={phone} alt="phone" />
                 <p>(+66) 6814126842</p>
                 <img id="logo" src={home} alt="home" />
                 <p>5 floor, Siripanich Building, 191 Huay Kaew Road, Suthep Subdistrict, Mueang, Chiang Mai 50200, Thailand</p>
                 
                 <p id="cpr">© Copyright 2022 by RecyGlo Company Pte. Ltd. All rights reserved.</p>
                 </div>
                
         
                </div>
            </div>
            </div>
     );
}
 
export default Htet;