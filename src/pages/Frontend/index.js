import React from 'react'
import { Routes, Route } from 'react-router-dom';

//style
import './style.css'
//component
import Header from '../../components/frontend/Header/index'
import Footer from '../../components/frontend/Footer/index'
//pages
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Project from './Project';

export default function index() {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/services' element={ <Services />} />
        <Route path='/project' element={ <Project />} />
      </Routes>
    

    </main>
    <Footer />


 
    </>

  )
}



