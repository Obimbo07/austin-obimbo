import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/publications" element={<Blog /> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
