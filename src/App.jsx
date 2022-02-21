import React from 'react'

import Home from './components/home/Home';
import About from './components/about/About';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
      </Routes>
    </Router>
  );
}


