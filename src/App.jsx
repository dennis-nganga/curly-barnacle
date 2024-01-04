import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import NavBar from "./Navbar/NavBar";
import Footer from "./Projects/Footer/Footer";
import Faq from "./Faq/Faq";
import ContactUs from "./Projects/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="div_1">
        <NavBar />
        <div className="main__app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
