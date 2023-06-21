import React from "react";
import './style.css';
import Navicon from "./Navicon";
import "@fontsource/poppins";
import mail from './mail.png';
import phone from './phone.png';
import home from './home.png';
import ko from './ko.png';
import icon from './icon.png';
import web from './web.png';
import tiktok from './tiktok.png';
import linkedin from './linkedin.png';


const Hla = () => {
    return ( 
        <div>
            <div className="background">
            <Navicon />
            
            <div className="inner-block">
            <a href="https://www.recyglo.com/" target="_blank"><img id="icon" src={icon} className="App-logo" alt="icon" /></a>
            <div className="nav">
            <a href="https://www.facebook.com/recyglo.th" target="_blank"><img id="nav-icon" src={web} className="App-logo" alt="icon" /></a>
            <a href="https://www.tiktok.com/@recyglo_th" target="_blank"><img id="nav-icon" src={tiktok} className="App-logo" alt="icon" /></a>
            <a href="https://www.linkedin.com/company/recyglo/mycompany/" target="_blank"><img id="nav-icon" src={linkedin} className="App-logo" alt="icon" /></a>
            </div>
            <div className="infos">
            <a href="/hlainfo"><img id="pf" src={ko} className="App-logo" alt="logo" /></a>
            <p id="quote">"This is a sample quote for sample processes."</p>
                 <h2>Mr. Hla Phong Ko</h2>
                 <p id="pos">Business Development Director </p>
                 <a href="mailto:heinhtet.hlaphongko.recyglo@gmail.com" target="_blank"><img id="logo" src={mail} alt="mail" /></a>
                 <p><a href="mailto:heinhtet.hlaphongko.recyglo@gmail.com">hlaphongko.recyglo@gmail.com</a></p>
                 <a href="tel:+66654142099"><img id="logo" src={phone} alt="phone" /></a>
                 <p><a href="tel:+66654142099">(+66) 654-142-099</a></p>
                 <img id="logo" src={home} alt="home" />
                 <p>2nd Floor, Soi Sucharit, Huai Khwang, Bangkok 10310, Thailand</p>
                 <p>5th floor, Siripanich Building, 191 Huay Kaew Road, Suthep Subdistrict, Mueang, Chiang Mai 50200, Thailand</p>
                 <p id="cpr">© Copyright 2022 by RecyGlo Company Pte. Ltd. All rights reserved.</p>
                 </div>
                
         
                </div>
            </div>
            </div>
     );
}
 
export default Hla;