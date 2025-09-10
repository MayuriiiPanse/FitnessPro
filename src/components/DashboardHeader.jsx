import React from 'react'

const DashboardHeader = () => {
  const userName = localStorage.getItem('userName') || 'Wingman'
  
  return (
    <div className="dashboard-header">
      <div className="welcome-content">
        <span className="wave-emoji">👋</span>
        <div className="welcome-text">
          <h1>Hello, {userName}!</h1>
          <p>Welcome and Let's do some workout today!</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
