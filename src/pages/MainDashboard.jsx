import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import DashboardHeader from '../components/DashboardHeader'
import StatsCards from '../components/StatsCards'
import ActivityChart from '../components/ActivityChart'
import WeeklyChallenge from '../components/WeeklyChallenge'
import ProfileSidebar from '../components/ProfileSidebar'
import MobileTabBar from '../components/MobileTabBar'

const MainDashboard = ({ setAuth }) => {
  const [activeTab, setActiveTab] = useState('Dashboard')

  return (
    <div className="app-layout">
      {/* Sidebar - Desktop */}
      <aside className="sidebar-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>
      
      {/* Main Content */}
      <main className="main-container">
        <TopBar setAuth={setAuth} />
        
        <div className="dashboard-content">
          <div className="dashboard-grid">
            {/* Left Column */}
            <div className="dashboard-main">
              <DashboardHeader />
              <StatsCards />
              <ActivityChart />
              <WeeklyChallenge />
            </div>
            
            {/* Right Column */}
            <div className="dashboard-sidebar">
              <ProfileSidebar />
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile Navigation */}
      <MobileTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default MainDashboard
