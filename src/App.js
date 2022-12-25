import Main from "./Pages/Main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import AboutMe from "./Components/AboutMe";
import About from "./Pages/About";
import Myservices from "./Components/Myservices";
import Reviews from "./Components/Reviews";
import Myskills from "./Components/Myskills";
import Resume from "./Pages/Resume";
import Myresume from "./Components/Myresume";
import Myworks from "./Components/Myworks";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Mycontact from "./Components/Mycontact";
import Blog from "./Pages/Blog";
import BlogHeader from "./Components/BlogHeader";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/work" element={<Works/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
