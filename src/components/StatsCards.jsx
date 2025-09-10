import React from 'react'

const StatsCards = () => {
  const stats = [
    {
      title: 'Calories',
      value: '520',
      unit: 'kcal',
      subtitle: 'Yesterday: 480 kcal',
      icon: '🔥',
      color: 'blue'
    },
    {
      title: 'Heart Rate',
      value: '110',
      unit: 'bpm',
      subtitle: 'Yesterday: 108 bpm',
      icon: '❤️',
      color: 'red'
    },
    {
      title: 'Steps',
      value: '1,050',
      unit: 'steps',
      subtitle: 'Yesterday: 975 steps',
      icon: '👟',
      color: 'green'
    }
  ]

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className={`stat-card stat-${stat.color}`}>
          <div className="stat-header">
            <span className="stat-title">{stat.title}</span>
            <span className="stat-icon">{stat.icon}</span>
          </div>
          
          <div className="stat-content">
            <div className="stat-value">
              {stat.value}
              <span className="stat-unit">{stat.unit}</span>
            </div>
            <p className="stat-subtitle">{stat.subtitle}</p>
          </div>
          
          <div className="stat-chart"></div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
