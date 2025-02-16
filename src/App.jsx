
import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './Maincomponents/Home'
import About from './Maincomponents/About'
import Contact from './Maincomponents/Contact'
import './App.css'
import Navbar from './Maincomponents/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
