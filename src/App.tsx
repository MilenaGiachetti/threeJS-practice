import Home from '@Pages/Home';
import Rorschach from '@Pages/Rorschach';
import './scss/index.scss';
import {
  Routes,
  Route,
} from "react-router-dom";
import Ripple from '@Pages/Ripple';
import Trail from '@Pages/Trail';
import Rubik from '@Pages/Rubik';
import Treehouse from '@Pages/Treehouse';
import EightPointWalk from '@Pages/EightPointWalk';
import FreeWalk from '@Pages/FreeWalk';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/treehouse" element={<Treehouse />} />
      <Route path="/eight-point-walk" element={<EightPointWalk />} />
      <Route path="/free-walk" element={<FreeWalk />} />
      <Route path="/rorschach" element={<Rorschach />} />
      <Route path="/ripple" element={<Ripple />} />
      <Route path="/trail" element={<Trail />} />
      <Route path="/rubik" element={<Rubik />} />

    </Routes>
  );
}

export default App;
