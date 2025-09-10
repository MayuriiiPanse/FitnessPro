import React from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'

const Details = ({ setAuth }) => {
  const [activeTab, setActiveTab] = React.useState('Details')

  return (
    <div className="app-layout">
      <aside className="sidebar-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>
      <main className="main-container">
        <TopBar setAuth={setAuth} />
        <div className="dashboard-content">
          <div className="container">
            <h1>Details Page</h1>
            <p>This is the details page content.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Details
