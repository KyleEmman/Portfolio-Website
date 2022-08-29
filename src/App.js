import React from 'react';
import Home from './Home';
import Nav from './Nav';
import Contact from './Contact.js'
import About from './About.js'
import Works from './Works.js'
import './styles/App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
