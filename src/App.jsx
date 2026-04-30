import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import AppLayout from './layouts/AppLayout'
import Login from './pages/Login'
import FirstLogin from './pages/FirstLogin'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import TasksManagement from './pages/TasksManagement'
import EmployeeDashboard from './pages/EmployeeDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/first-login" element={<FirstLogin />} />
        </Route>

        <Route element={<AppLayout role="master" />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/tasks" element={<TasksManagement />} />
        </Route>

        <Route element={<AppLayout role="employee" />}>
          <Route path="/employee" element={<EmployeeDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
