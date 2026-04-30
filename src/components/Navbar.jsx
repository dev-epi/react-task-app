import React from 'react'

const defaultUser = {
  avatar: 'AM',
  name: 'Admin Master',
  subtitle: 'admin@entreprise.com',
}

export default function Navbar({ title, actions, user = defaultUser }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>{title}</h1>
      </div>
      <div className="header-right">
        {actions}
        <div className="user-info">
          <div className="user-avatar">{user.avatar}</div>
          <div className="user-details">
            <h3>{user.name}</h3>
            <p>{user.subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
