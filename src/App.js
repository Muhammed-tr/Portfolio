import Home from "./components/Home";
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import Kategori from "./pages/Kategori";
import Logo from "./images/logo.png";

function App() {
  return (
    
    <div className="" >
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
 

    
    {/* <NavLink className="flex px-4 py-4"> 
      <Link className="border border-gray-300 px-2 hover:bg-black hover:text-white" to="/">Home</Link>
      <Link className="border border-gray-300 px-2  hover:bg-black hover:text-white" to="/Skills">Skills</Link>
      <Link className="border border-gray-300 px-2  hover:bg-black hover:text-white" to="/Navbar">Navbar</Link>
      <Link className="border border-gray-300 px-2  hover:bg-black hover:text-white" to="/">About</Link>
    </NavLink>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path="/" element={<About/>}/>

   
    </Routes> */}

    </div>
  );
}

export default App;
