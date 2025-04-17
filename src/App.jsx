import React from "react";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* Add content here if needed */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
