import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, Navigate } from "react-router-dom";
import Redirecting from './components/Redirecting/Redirecting';

const App = () => {
  return (
    <>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/redirect" element={<Redirecting />} />
      </Routes>
    </>
  )
}

export default App