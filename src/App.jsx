import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './assets/MainPage'

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
      <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
