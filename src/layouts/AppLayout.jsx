import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function AppLayout({ role = 'master' }) {
  return (
    <div className="dashboard-layout">
      <Sidebar role={role} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
