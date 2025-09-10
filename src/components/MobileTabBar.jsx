import React from 'react'

const MobileTabBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Statistics', icon: '📈' },
    { name: 'Exercises', icon: '🏋️' },
    { name: 'Schedule', icon: '📅' },
    { name: 'Profile', icon: '👤' }
  ]

  return (
    <div className="mobile-tabbar">
      <div className="tabbar-content">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.name)}
            className={`tab-item ${activeTab === tab.name ? 'active' : ''}`}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-text">{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default MobileTabBar
