import './App.css';
import SideNav from './SideNav';
import Home from './Home';
import Bio from "./Bio";
import Posts from './Posts';
import Projects from './Projects';
import Videos from './Videos';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <Router>
    <div>
      <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
