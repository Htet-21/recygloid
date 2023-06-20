import './App.css';
import Htet from './Htet';
import Heinhtet from './Heinhtet';
import Ping from './Ping.js';
import Jim from './Jim';
import Hla from './Ko';
import Sun from './Sun';
import Kyi from './Kyi';
import Shwe from './Shwe';
import Okkainfo from './okkainfo';
import Heinhtetinfo from './heinhtetinfo';
import Shweinfo from './shweinfo';
import Suninfo from './suninfo';
import Hlainfo from './hlainfo';
import Jiminfo from './jiminfo';
import Pinginfo from './Pinginfo.js';

import { Routes, Route } from "react-router-dom";
import Kyiinfo from './kyiinfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Htet />} />
        <Route path="okka" element={<Htet />} />
        <Route path="okkainfo" element={<Okkainfo />} />
        <Route path="heinhtet" element={<Heinhtet />} />
        <Route path="heinhtetinfo" element={<Heinhtetinfo />} />
        <Route path="ping" element={<Ping />} />
        <Route path="pinginfo" element={<Pinginfo />} />
        <Route path="jim" element={<Jim />} />
        <Route path="jiminfo" element={<Jiminfo />} />
        <Route path="hla" element={<Hla />} />
        <Route path="hlainfo" element={<Hlainfo />} />
        <Route path="kyi" element={<Kyi />} />
        <Route path="kyiinfo" element={<Kyiinfo />} />
        <Route path="shwe" element={<Shwe />} />
        <Route path="shweinfo" element={<Shweinfo />} />
        <Route path="sun" element={<Sun />} />
        <Route path="suninfo" element={<Suninfo />} />
      </Routes>
    </div>
     
  );
}

export default App;
