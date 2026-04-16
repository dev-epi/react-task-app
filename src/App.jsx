import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import FirstLogin from './pages/FirstLogin'

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route  element={<AuthLayout/>}>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/first-login" element={<FirstLogin/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
