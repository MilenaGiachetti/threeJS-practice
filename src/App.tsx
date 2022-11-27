import Home from '@/pages/Home';
import Rorschach from '@/pages/Rorschach';
import './scss/index.scss';
import {
  Routes,
  Route,
} from "react-router-dom";
import Ripple from '@/pages/Ripple';
import Trail from '@/pages/Trail';
import Rubik from '@/pages/Rubik';
import Treehouse from '@/pages/Treehouse';
import EightPointWalk from '@/pages/EightPointWalk';
import FreeWalk from '@/pages/FreeWalk';

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
