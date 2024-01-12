import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Join from './pages/Join';

import Mission from './pages/Mission';
import Features from './pages/Features';
import Founders from './pages/Founders';
import Organisations from './pages/Organisations';
import Testimonials from './pages/Testimonials'
import Navbar from './components/Navbar'
import Footer from './components/Footer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (

  <div className='w-full h-full bg-stone-300'>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Routes>
      <Route 
        path="/" 
        element={< Home />} 
      />

      <Route
        path="/join" 
        element={< Join setIsLoggedIn={setIsLoggedIn} />} 
      />

      <Route 
        path="/signin" 
        element={< Signin setIsLoggedIn={setIsLoggedIn}/>} 
      />
      <Route 
        path="/mission" 
        element={< Mission />} 
      />
      <Route 
        path="/features" 
        element={< Features />} 
      />
      <Route 
        path="/founders" 
        element={<Founders />} 
      />
      <Route 
        path="/organisations" 
        element={< Organisations />} 
      />
      <Route 
        path="/testimonials" 
        element={< Testimonials />} 
      />


    </Routes>
    <Footer />
   </div>
    
  );
}

export default App;
