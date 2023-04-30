import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Slider from './Components/Slider';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <div className="App">
    
    <BrowserRouter>
    
      <Header></Header>
      <Slider></Slider>
      
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
      
    </div>
    <outlet />
    </>
  );
}

export default App;
