import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Frontend from './Frontend'

export default function index() {
  return (

   <Routes>

    <Route path='/*' element={< Frontend/>} />

   </Routes>
 
  )
}
