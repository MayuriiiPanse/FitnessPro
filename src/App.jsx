import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MainDashboard from './pages/MainDashboard'
import Details from './pages/Details'

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  React.useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login setAuth={setIsAuthenticated} /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/signup" 
            element={!isAuthenticated ? <Signup setAuth={setIsAuthenticated} /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <MainDashboard setAuth={setIsAuthenticated} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/details" 
            element={isAuthenticated ? <Details setAuth={setIsAuthenticated} /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
