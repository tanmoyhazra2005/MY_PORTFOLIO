import React from "react";
import PortFolio from "./PortFolio";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experiance from "./Experiance";
import Memories from "./Memories";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function Mapp() {
  return (
    <>
      <div className="Mapp">
        <Navbar />
        <Home />
        <About />
        <Experiance />
        <PortFolio />
        <Memories />
        <Contact />
        <Footer />
      </div>
      <Toaster />
      </>
  );
}

export default Mapp;