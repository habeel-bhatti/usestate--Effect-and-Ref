
import React from 'react';
import Navbar from './Maincomponents/Navbar';
import Home from './Maincomponents/Home';
import About from './Maincomponents/About';
import Contact from './Maincomponents/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
      <h1>welcome to my website</h1>
    </>
  );
}

export default App;
