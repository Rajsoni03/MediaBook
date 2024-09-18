import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Headers from './components/Headers'
import PrivateRoutes from './utils/PrivateRoutes'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar/>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App;
