import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Gallery from "./components/Gallery";
import './components/gallery.css';
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Memories from "./components/Memories";
import Mapp from "./components/Mapp";
import Video from "./components/Video";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
            <Route path="/" element={<Navbar />} />
      </Routes>
       <Routes>
              <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
              <Route path="/" element={<About />} />
        </Routes>
        <Routes>
              <Route path="/" element={<Experiance />} />
        </Routes>
        <Routes>
              <Route path="/" element={<PortFolio />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/video" element={<Video />} />
              <Route path="/back" element={<Mapp />} />
        </Routes>
        <Routes>
              <Route path="/" element={<Memories />} />
       </Routes>
        <Routes>
            <Route path="/" element={<Contact />} />
        </Routes>
        <Routes>
            <Route path="/" element={<Footer />} />
        </Routes>
      </div>
      <Toaster />
      </Router>
  );
}

export default App;