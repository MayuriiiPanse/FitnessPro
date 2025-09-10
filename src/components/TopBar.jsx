import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopBar = ({ setAuth }) => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    setAuth(false)
    navigate('/login')
  }

  return (
    <header className="topbar">
      <div className="topbar-content">
        <div className="mobile-logo">
          <span className="emoji">💪</span>
          <span className="text">FitMove</span>
        </div>
        
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search anything"
              className="search-input"
            />
            <div className="search-icon">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="search-button">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="topbar-actions">
          <button className="profile-button">My Profile</button>
          <button onClick={handleLogout} className="logout-button">Logout</button>
          <button className="menu-button">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopBar
