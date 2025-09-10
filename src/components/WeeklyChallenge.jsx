import React from 'react'

const WeeklyChallenge = () => {
  return (
    <div className="weekly-grid">
      <div className="activity-section">
        <h3>Today's Activity</h3>
        
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-marker"></div>
            <p>Park Loop Trail</p>
          </div>
        </div>
        
        <div className="activity-stats">
          <div className="stat-item">
            <p className="stat-label">Distance</p>
            <p className="stat-value">5 miles (8 km)</p>
          </div>
          <div className="stat-item">
            <p className="stat-label">Total Time</p>
            <p className="stat-value">50 minutes</p>
          </div>
          <div className="stat-item">
            <p className="stat-label">Total Steps</p>
            <p className="stat-value">10,500 steps</p>
          </div>
          <div className="stat-item">
            <p className="stat-label">Average Pace</p>
            <p className="stat-value">10 minutes/mile</p>
          </div>
        </div>
      </div>
      
      <div className="classes-section">
        <div className="section-header">
          <h3>My Classes</h3>
          <button className="see-all-button">See All</button>
        </div>
        
        <div className="classes-list">
          <div className="class-item">
            <div className="class-avatar strength">ST</div>
            <div className="class-info">
              <h4>Strength Training</h4>
              <p>Strength & Conditioning</p>
              <div className="class-meta">
                <span>⏱️ Sarah Peak</span>
                <span>12 videos</span>
                <span className="difficulty intermediate">Intermediate</span>
              </div>
            </div>
          </div>
          
          <div className="class-item">
            <div className="class-avatar cardio">CB</div>
            <div className="class-info">
              <h4>Cardio</h4>
              <p>Cardio Blast</p>
              <div className="class-meta">
                <span>⏱️ Emily Thompson</span>
                <span>10 videos</span>
                <span className="difficulty beginner">Beginner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyChallenge
