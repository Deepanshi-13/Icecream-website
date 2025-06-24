import { useState, useEffect } from 'react'
import "./Dashboard.css"
function Dashboard() {
  const [stats, setStats] = useState({
    totalSales: 12450,
    dailySales: 850,
    totalCustomers: 245,
    activeFlavors: 12,
    lowStockItems: 3,
    avgOrderValue: 15.75
  })

  const [recentSales] = useState([
    { id: 1, customer: 'John Doe', amount: 25.50, time: '2 min ago', items: 'Vanilla, Chocolate' },
    { id: 2, customer: 'Sarah Smith', amount: 18.75, time: '5 min ago', items: 'Strawberry, Mint Chip' },
    { id: 3, customer: 'Mike Johnson', amount: 32.00, time: '8 min ago', items: 'Rocky Road, Cookies & Cream' },
    { id: 4, customer: 'Emily Brown', amount: 14.25, time: '12 min ago', items: 'Pistachio' },
    { id: 5, customer: 'David Wilson', amount: 21.50, time: '15 min ago', items: 'Neapolitan, Vanilla' }
  ])

  const [topFlavors] = useState([
    { name: 'Vanilla', sales: 156, percentage: 18 },
    { name: 'Chocolate', sales: 134, percentage: 15 },
    { name: 'Strawberry', sales: 98, percentage: 12 },
    { name: 'Mint Chip', sales: 87, percentage: 10 },
    { name: 'Rocky Road', sales: 76, percentage: 9 }
  ])

  return (
    <div className="dash-dashboard">
      <div className="dash-header">
        <h2>Dashboard Overview</h2>
        <p className="dash-subtitle">Welcome back! Here's what's happening with your ice cream shop.</p>
      </div>

      <div className="dash-stats-grid">
        <div className="dash-stat-card dash-primary">
          <div className="dash-stat-icon">💰</div>
          <div className="dash-stat-content">
            <h3>${stats.totalSales.toLocaleString()}</h3>
            <p>Total Sales</p>
            <span className="dash-stat-change dash-positive">+12.5%</span>
          </div>
        </div>

        <div className="dash-stat-card dash-secondary">
          <div className="dash-stat-icon">📊</div>
          <div className="dash-stat-content">
            <h3>${stats.dailySales}</h3>
            <p>Today's Sales</p>
            <span className="dash-stat-change dash-positive">+8.2%</span>
          </div>
        </div>

        <div className="dash-stat-card dash-accent">
          <div className="dash-stat-icon">👥</div>
          <div className="dash-stat-content">
            <h3>{stats.totalCustomers}</h3>
            <p>Total Customers</p>
            <span className="dash-stat-change dash-positive">+15.3%</span>
          </div>
        </div>

        <div className="dash-stat-card dash-success">
          <div className="dash-stat-icon">🍦</div>
          <div className="dash-stat-content">
            <h3>{stats.activeFlavors}</h3>
            <p>Active Flavors</p>
            <span className="dash-stat-change dash-neutral">No change</span>
          </div>
        </div>

        <div className="dash-stat-card dash-warning">
          <div className="dash-stat-icon">⚠️</div>
          <div className="dash-stat-content">
            <h3>{stats.lowStockItems}</h3>
            <p>Low Stock Items</p>
            <span className="dash-stat-change dash-negative">+2 items</span>
          </div>
        </div>

        <div className="dash-stat-card dash-info">
          <div className="dash-stat-icon">💳</div>
          <div className="dash-stat-content">
            <h3>${stats.avgOrderValue}</h3>
            <p>Avg Order Value</p>
            <span className="dash-stat-change dash-positive">+5.1%</span>
          </div>
        </div>
      </div>

      <div className="dash-grid">
        <div className="dash-card">
          <div className="dash-card-header">
            <h3>Recent Sales</h3>
            <button className="dash-btn-view-all">View All</button>
          </div>
          <div className="dash-sales-list">
            {recentSales.map(sale => (
              <div key={sale.id} className="dash-sale-item">
                <div className="dash-sale-info">
                  <span className="dash-customer-name">{sale.customer}</span>
                  <span className="dash-sale-items">{sale.items}</span>
                </div>
                <div className="dash-sale-details">
                  <span className="dash-sale-amount">${sale.amount}</span>
                  <span className="dash-sale-time">{sale.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-header">
            <h3>Top Flavors</h3>
            <button className="dash-btn-view-all">View All</button>
          </div>
          <div className="dash-flavors-list">
            {topFlavors.map((flavor, index) => (
              <div key={index} className="dash-flavor-item">
                <div className="dash-flavor-info">
                  <span className="dash-flavor-name">{flavor.name}</span>
                  <span className="dash-flavor-sales">{flavor.sales} sales</span>
                </div>
                <div className="dash-flavor-progress">
                  <div className="dash-progress-bar">
                    <div 
                      className="dash-progress-fill" 
                      style={{ width: `${flavor.percentage}%` }}
                    ></div>
                  </div>
                  <span className="dash-flavor-percentage">{flavor.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
