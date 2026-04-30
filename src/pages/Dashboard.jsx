import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const employees = [
  { initials: 'JD', name: 'Jean Dupont', email: 'jean.dupont@entreprise.com', assigned: 12, done: 10, pct: 83, status: 'Actif', badgeClass: 'badge-success', barClass: 'success' },
  { initials: 'SM', name: 'Sophie Martin', email: 'sophie.martin@entreprise.com', assigned: 8, done: 6, pct: 75, status: 'Actif', badgeClass: 'badge-success', barClass: 'success' },
  { initials: 'PL', name: 'Pierre Leblanc', email: 'pierre.leblanc@entreprise.com', assigned: 15, done: 7, pct: 47, status: 'En retard', badgeClass: 'badge-warning', barClass: 'warning' },
  { initials: 'MD', name: 'Marie Dubois', email: 'marie.dubois@entreprise.com', assigned: 10, done: 10, pct: 100, status: 'Actif', badgeClass: 'badge-success', barClass: 'success' },
]

const activities = [
  { title: 'Nouvelle réclamation de Jean Dupont', time: 'Il y a 5 minutes', badgeClass: 'badge-danger', badge: 'Urgent' },
  { title: 'Sophie Martin a terminé "Développement API REST"', time: 'Il y a 1 heure', badgeClass: 'badge-success', badge: 'Terminé' },
  { title: 'Nouvel employé ajouté : Thomas Bernard', time: 'Il y a 2 heures', badgeClass: 'badge-info', badge: 'Nouveau' },
]

export default function Dashboard() {
  return (
    <>
      <Navbar
        title="Dashboard"
        actions={
          <button className="btn btn-icon btn-outline">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        }
      />

      <div className="content-area">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">Total Employés</div>
                <div className="stat-card-value">24</div>
                <div className="stat-card-change">+2 ce mois</div>
              </div>
              <div className="stat-card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="stat-card success">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">Tâches Terminées</div>
                <div className="stat-card-value">156</div>
                <div className="stat-card-change">+12% cette semaine</div>
              </div>
              <div className="stat-card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="stat-card warning">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">Tâches En Cours</div>
                <div className="stat-card-value">43</div>
                <div className="stat-card-change">18 urgentes</div>
              </div>
              <div className="stat-card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="stat-card danger">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">Réclamations</div>
                <div className="stat-card-value">7</div>
                <div className="stat-card-change negative">À traiter</div>
              </div>
              <div className="stat-card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Progression des Employés</h2>
            <Link to="/employees" className="btn btn-outline">Voir tous</Link>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Employé</th>
                  <th>Email</th>
                  <th>Tâches Assignées</th>
                  <th>Terminées</th>
                  <th>Progression</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.email}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="user-avatar" style={{ width: '32px', height: '32px', fontSize: '12px' }}>{emp.initials}</div>
                        <span style={{ fontWeight: 500 }}>{emp.name}</span>
                      </div>
                    </td>
                    <td>{emp.email}</td>
                    <td>{emp.assigned}</td>
                    <td>{emp.done}</td>
                    <td>
                      <div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>{emp.pct}%</div>
                        <div className="progress-bar">
                          <div className={`progress-bar-fill ${emp.barClass}`} style={{ width: `${emp.pct}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td><span className={`badge ${emp.badgeClass}`}>{emp.status}</span></td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="btn btn-icon btn-outline">
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className="btn btn-icon btn-outline">
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Activités Récentes</h2>
          </div>
          <div className="task-list">
            {activities.map((a) => (
              <div key={a.title} className="task-item">
                <div className="task-item-header">
                  <div>
                    <div className="task-item-title">{a.title}</div>
                    <div className="task-item-meta">
                      <span>
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {a.time}
                      </span>
                      <span className={`badge ${a.badgeClass}`}>{a.badge}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
