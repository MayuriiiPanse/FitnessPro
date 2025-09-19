import React from 'react'

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Statistics', icon: '📈', active: false },
    { name: 'Exercises', icon: '🏋️', active: false },
    { name: 'Schedule', icon: '📅', active: false },
    { name: 'Classes', icon: '👥', active: false },
    { name: 'Trainers', icon: '🧑‍🏫', active: false },
    { name: 'Messages', icon: '💬', active: false, badge: '1' },
    { name: 'Workout Tracker', icon: '⏱️', active: false },
    { name: 'Meal Plan', icon: '🍽️', active: false },
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="logo-emoji">💪</span>
        <span className="logo-text">MyFitnessPro</span>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(item.name)}
            className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
            {item.badge && (
              <span className="nav-badge">{item.badge}</span>
            )}
          </button>
        ))}
      </nav>
      
      <div className="sidebar-upgrade">
        <div className="upgrade-card">
          <h3>Track.</h3>
          <h3>Analyze.</h3>
          <h3>Succeed.</h3>
          <p>Monitor progress, set goals, and achieve results faster!</p>
          <button className="upgrade-button">Upgrade FitMove 3.2</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
