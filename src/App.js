import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Honors from './pages/Honors';
import Research from './pages/Research';
import Layout2 from './layout/Layout2';
import "./App.css"
import People from './pages/People';
import Publications from './pages/Publications';
import Opportunities from './pages/Opportunties';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<div ><Home /></div>} />
          <Route path="/academics" element={<div ><Academics /></div>} />
          <Route path="/honors" element={<div><Honors /></div>} />
          <Route path="/research" element={<div ><Research /></div>} />
          <Route path="/publication" element={<div ><Publications /></div>} />
          <Route path="/*" element={<div ><Layout2 /></div>} />
          <Route path="/people" element={<div ><People /></div>} />
          <Route path="/opportunities" element={<div ><Opportunities /></div>} />
          <Route path="/projects" element={<div ><Projects /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
