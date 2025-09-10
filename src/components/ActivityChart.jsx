import React from 'react'

const ActivityChart = () => {
  const days = ['5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug', '10 Aug', '11 Aug', '12 Aug', '13 Aug']
  const progress = [30, 55, 45, 90, 75, 60, 40, 65, 85]

  return (
    <div className="activity-chart">
      <div className="chart-header">
        <div className="chart-title">
          <h2>Activity</h2>
        </div>
        <div className="chart-info">
          <span className="date-range">5 - 13 August 2028</span>
          <div className="chart-stats">
            <span>Progress</span>
            <span className="stat-value">82%</span>
            <span>Calories</span>
            <span className="stat-value">150 kcal</span>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-y-axis">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>
        
        <div className="chart-bars">
          {days.map((day, index) => (
            <div key={index} className="bar-container">
              <div 
                className={`chart-bar ${progress[index] > 80 ? 'highlight' : ''}`}
                style={{ height: `${progress[index]}%` }}
              ></div>
              <span className="bar-label">{day}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chart-footer">
        <span>Today's Activity</span>
        <div className="activity-tag">✅ Running</div>
      </div>
    </div>
  )
}

export default ActivityChart
