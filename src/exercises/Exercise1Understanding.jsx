import { useState, useEffect } from 'react'
import './Exercise1.css'

// This component demonstrates various React patterns
// Use your AI assistant to understand what's happening here!

function UserDashboard() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true)
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800))

      const mockData = {
        name: 'Alex Johnson',
        stats: {
          week: { projects: 5, tasks: 23, completed: 18 },
          month: { projects: 12, tasks: 89, completed: 76 },
          year: { projects: 48, tasks: 342, completed: 298 }
        },
        recentActivity: [
          { id: 1, action: 'Completed task', item: 'Update documentation', time: '2 hours ago' },
          { id: 2, action: 'Created project', item: 'Mobile App Redesign', time: '5 hours ago' },
          { id: 3, action: 'Completed task', item: 'Fix login bug', time: '1 day ago' }
        ]
      }

      setUserData(mockData)
      setLoading(false)
    }

    fetchData()
  }, [])

  const currentStats = userData?.stats[selectedPeriod]
  const completionRate = currentStats
    ? Math.round((currentStats.completed / currentStats.tasks) * 100)
    : 0

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    )
  }

  if (!userData) {
    return <div className="error">Failed to load user data</div>
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome back, {userData.name}!</h2>
        <div className="period-selector">
          <button
            className={selectedPeriod === 'week' ? 'active' : ''}
            onClick={() => setSelectedPeriod('week')}
          >
            This Week
          </button>
          <button
            className={selectedPeriod === 'month' ? 'active' : ''}
            onClick={() => setSelectedPeriod('month')}
          >
            This Month
          </button>
          <button
            className={selectedPeriod === 'year' ? 'active' : ''}
            onClick={() => setSelectedPeriod('year')}
          >
            This Year
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Projects"
          value={currentStats.projects}
          color="#667eea"
        />
        <StatCard
          title="Total Tasks"
          value={currentStats.tasks}
          color="#764ba2"
        />
        <StatCard
          title="Completed"
          value={currentStats.completed}
          color="#f093fb"
        />
        <StatCard
          title="Completion Rate"
          value={`${completionRate}%`}
          color="#4facfe"
        />
      </div>

      <div className="activity-feed">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {userData.recentActivity.map(activity => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, color }) {
  return (
    <div className="stat-card" style={{ borderTopColor: color }}>
      <div className="stat-value">{value}</div>
      <div className="stat-title">{title}</div>
    </div>
  )
}

function ActivityItem({ activity }) {
  return (
    <div className="activity-item">
      <div className="activity-icon">📋</div>
      <div className="activity-details">
        <div className="activity-action">{activity.action}</div>
        <div className="activity-item-name">{activity.item}</div>
      </div>
      <div className="activity-time">{activity.time}</div>
    </div>
  )
}

export default function Exercise1Understanding() {
  return (
    <div className="exercise-section">
      <h2>Exercise 1: Understanding Existing Code</h2>

      <div className="instructions">
        <h3>Your Task:</h3>
        <ul>
          <li>Open this file: <code>src/exercises/Exercise1Understanding.jsx</code></li>
          <li>Use your AI assistant to understand what the code does</li>
          <li>Ask it to explain the <code>UserDashboard</code> component</li>
          <li>Ask about the <code>useEffect</code> hook and when it runs</li>
          <li>Ask how the <code>completionRate</code> is calculated</li>
          <li>Ask what happens when you click the period selector buttons</li>
          <li>Request documentation for the component</li>
        </ul>

        <h3>Example Prompts to Try:</h3>
        <ul>
          <li>"What does the UserDashboard component do?"</li>
          <li>"Explain the useEffect hook in this component"</li>
          <li>"How is the completion rate calculated?"</li>
          <li>"What's the purpose of the selectedPeriod state?"</li>
          <li>"Can you add JSDoc comments to this component?"</li>
        </ul>
      </div>

      <div className="demo-container">
        <h3>Live Demo:</h3>
        <UserDashboard />
      </div>
    </div>
  )
}
