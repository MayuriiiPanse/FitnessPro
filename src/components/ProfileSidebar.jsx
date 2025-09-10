import React from 'react'

const ProfileSidebar = () => {
  const userName = localStorage.getItem('userName') || 'Kalendra Wingman'
  
  return (
    <div className="profile-sidebar">
      <div className="profile-card">
        <div className="profile-header">
          <h3>My Profile</h3>
          <button className="menu-btn">⋯</button>
        </div>
        
        <div className="profile-info">
          <div className="profile-avatar">
            {userName.charAt(0)}
          </div>
          <div className="profile-details">
            <h4>{userName}</h4>
            <p>🌟 Advanced | 14,750</p>
          </div>
        </div>
        
        <div className="profile-stats">
          <div className="profile-stat">
            <p className="stat-label">Weight</p>
            <p className="stat-value">75 kg</p>
          </div>
          <div className="profile-stat">
            <p className="stat-label">Height</p>
            <p className="stat-value">175 cm</p>
          </div>
          <div className="profile-stat">
            <p className="stat-label">Age</p>
            <p className="stat-value">29 yrs</p>
          </div>
        </div>
      </div>
      
      <div className="progress-card">
        <div className="progress-header">
          <h3>Progress</h3>
          <div className="week-tag">This Week</div>
        </div>
        
        <div className="progress-circle">
          <div className="progress-value">75%</div>
          <p>Goal Completion</p>
        </div>
        
        <div className="circular-progress">
          <svg className="progress-ring" width="120" height="120">
            <circle
              className="progress-ring-background"
              cx="60"
              cy="60"
              r="50"
            />
            <circle
              className="progress-ring-fill"
              cx="60"
              cy="60"
              r="50"
              strokeDasharray="314"
              strokeDashoffset="78.5"
            />
          </svg>
        </div>
        
        <div className="progress-items">
          <div className="progress-item">
            <span>
              <div className="progress-dot cardio"></div>
              Cardio Training
            </span>
            <span className="progress-percent">85%</span>
          </div>
          
          <div className="progress-item">
            <span>
              <div className="progress-dot strength"></div>
              Strength Training
            </span>
            <span className="progress-percent">75%</span>
          </div>
          
          <div className="progress-item">
            <span>
              <div className="progress-dot flexibility"></div>
              Flexibility Training
            </span>
            <span className="progress-percent">65%</span>
          </div>
        </div>
      </div>
      
      <div className="calendar-card">
        <div className="calendar-header">
          <h3>August 2028</h3>
          <div className="calendar-nav">
            <button>‹</button>
            <button>›</button>
          </div>
        </div>
        
        <div className="calendar-grid">
          <div className="calendar-days">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
              <div key={day} className="calendar-day-header">{day}</div>
            ))}
          </div>
          
          <div className="calendar-dates">
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <div 
                key={day} 
                className={`calendar-date ${
                  day === 13 ? 'active' : 
                  [3, 22].includes(day) ? 'highlighted' : ''
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="schedule-card">
        <div className="schedule-header">
          <h3>My Schedule</h3>
          <button className="add-btn">+</button>
        </div>
        
        <div className="schedule-list">
          <div className="schedule-item cardio-item">
            <div className="schedule-indicator"></div>
            <div className="schedule-content">
              <h4>Morning Cardio Blast</h4>
              <p>High-Intensity Interval Training (HIIT)</p>
            </div>
            <span className="schedule-time">9:30 AM</span>
          </div>
          
          <div className="schedule-item strength-item">
            <div className="schedule-indicator"></div>
            <div className="schedule-content">
              <h4>Strength Circuit</h4>
              <p>Full-Body Strength Training</p>
            </div>
            <span className="schedule-time">6:00 PM</span>
          </div>
          
          <div className="schedule-item yoga-item">
            <div className="schedule-indicator"></div>
            <div className="schedule-content">
              <h4>Yoga Flow</h4>
              <p>Flexibility and Relaxation</p>
            </div>
            <span className="schedule-time">7:00 PM</span>
          </div>
        </div>
      </div>
      
      <div className="meal-card">
        <div className="meal-header">
          <h3>Meal Plan</h3>
          <button className="menu-btn">⋯</button>
        </div>
        
        <div className="meal-list">
          <div className="meal-item breakfast">
            <div className="meal-image">🍳</div>
            <div className="meal-content">
              <h4>Breakfast</h4>
              <p>Power Protein</p>
              <span>🔥 1,800 Cal</span>
            </div>
          </div>
          
          <div className="meal-item lunch">
            <div className="meal-image">🥗</div>
            <div className="meal-content">
              <h4>Lunch</h4>
              <p>Vegan Energy Bowl</p>
              <span>🔥 1,600 Cal</span>
            </div>
          </div>
          
          <div className="meal-item dinner">
            <div className="meal-image">🍽️</div>
            <div className="meal-content">
              <h4>Dinner</h4>
              <p>Lean & Green</p>
              <span>🔥 Easy</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="recent-card">
        <div className="recent-header">
          <h3>Recent Activity</h3>
          <button className="menu-btn">⋯</button>
        </div>
        
        <div className="recent-list">
          <div className="recent-item">
            <div className="recent-icon completed">✓</div>
            <div className="recent-content">
              <p>Completed Morning Cardio Session</p>
              <span>5:30 AM</span>
            </div>
          </div>
          
          <div className="recent-item">
            <div className="recent-icon star">⭐</div>
            <div className="recent-content">
              <p>Completed Strength Training Circuit</p>
              <span>2:00 PM</span>
            </div>
          </div>
          
          <div className="recent-item">
            <div className="recent-icon completed">✓</div>
            <div className="recent-content">
              <p>Finished Yoga Flow Class</p>
              <span>7:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar
