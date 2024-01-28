import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Headers from './components/Headers'
import PrivateRoutes from './utils/PrivateRoutes'


function App() {
  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} exact />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
