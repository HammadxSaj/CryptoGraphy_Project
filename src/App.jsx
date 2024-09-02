import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './assets/MainPage'
import Home from './assets/Home'

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
