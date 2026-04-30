import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const employeeUser = { avatar: 'JD', name: 'Jean Dupont', subtitle: 'Développeur Full Stack' }

const tabs = ['Toutes (12)', 'À faire (2)', 'En cours (2)', 'Terminées (10)']

const tasks = [
  {
    id: 1,
    title: "Développer l'API de paiement",
    priority: 'Urgente', priorityClass: 'badge-danger',
    borderColor: 'var(--danger-color)',
    description: "Intégrer l'API Stripe pour gérer les paiements en ligne. Implémenter les webhooks pour les notifications de paiement et gérer les cas d'erreur.",
    dateLabel: 'Date limite', date: '15 Fév 2024', dateColor: 'var(--danger-color)',
    assignedBy: 'Admin Master',
    status: 'En cours', statusClass: 'badge-warning',
    pct: 40, pctClass: '',
    done: false,
  },
  {
    id: 2,
    title: "Tests unitaires du module auth",
    priority: 'Haute', priorityClass: 'badge-warning',
    borderColor: 'var(--warning-color)',
    description: "Écrire les tests unitaires pour le système d'authentification. Couvrir tous les cas d'utilisation et atteindre 80% de couverture de code.",
    dateLabel: 'Date limite', date: '20 Fév 2024', dateColor: 'inherit',
    assignedBy: 'Admin Master',
    status: 'En cours', statusClass: 'badge-warning',
    pct: 65, pctClass: 'warning',
    done: false,
  },
  {
    id: 3,
    title: 'Configuration du serveur',
    priority: 'Terminée', priorityClass: 'badge-success',
    borderColor: 'var(--success-color)',
    description: 'Mise en place du serveur de production avec Nginx et configuration SSL.',
    dateLabel: 'Terminée le', date: '14 Fév 2024', dateColor: 'var(--success-color)',
    assignedBy: 'Admin Master',
    status: 'Terminée', statusClass: 'badge-success',
    pct: null,
    done: true,
  },
]

const emptyClaimForm = { claimType: '', claimDescription: '', claimPriority: 'high' }

export default function EmployeeDashboard() {
  const [activeTab, setActiveTab] = useState(0)
  const [showClaimModal, setShowClaimModal] = useState(false)
  const [claimForm, setClaimForm] = useState(emptyClaimForm)

  function handleClaimChange(e) {
    setClaimForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleClaimSubmit(e) {
    e.preventDefault()
    setShowClaimModal(false)
    setClaimForm(emptyClaimForm)
  }

  return (
    <>
      <Navbar
        title="Mes Tâches"
        user={employeeUser}
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
                <div className="stat-card-title">Tâches Assignées</div>
                <div className="stat-card-value">12</div>
              </div>
              <div className="stat-card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="stat-card success">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">Terminées</div>
                <div className="stat-card-value">10</div>
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
                <div className="stat-card-title">En Cours</div>
                <div className="stat-card-value">2</div>
              </div>
              <div className="stat-card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">Taux de Réussite</div>
                <div className="stat-card-value">83%</div>
              </div>
              <div className="stat-card-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={`btn ${activeTab === i ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: '20px' }}>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="card"
              style={{ borderLeft: `4px solid ${task.borderColor}`, opacity: task.done ? 0.8 : 1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{task.title}</h3>
                    <span className={`badge ${task.priorityClass}`}>{task.priority}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>{task.description}</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '16px', padding: '16px', background: 'var(--light-bg)', borderRadius: '8px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>{task.dateLabel}</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: task.dateColor }}>{task.date}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Assigné par</div>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>{task.assignedBy}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Statut</div>
                  <div><span className={`badge ${task.statusClass}`}>{task.status}</span></div>
                </div>
              </div>

              {task.pct !== null ? (
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>Progression</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{task.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className={`progress-bar-fill ${task.pctClass}`} style={{ width: `${task.pct}%` }}></div>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px' }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--success-color)' }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontSize: '14px', color: 'var(--success-color)', fontWeight: 500 }}>Tâche terminée avec succès</span>
                </div>
              )}

              {!task.done && (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn btn-success" style={{ flex: 1 }}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Marquer comme terminée
                  </button>
                  <button className="btn btn-outline" onClick={() => setShowClaimModal(true)}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Soumettre réclamation
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showClaimModal && (
        <div className="modal-overlay" onClick={() => setShowClaimModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Soumettre une réclamation</h3>
              <button onClick={() => setShowClaimModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: 'var(--text-secondary)' }}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="alert alert-info">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>Expliquez clairement le problème ou la difficulté rencontrée. Votre réclamation sera examinée par le master.</div>
              </div>
              <form id="claimForm" onSubmit={handleClaimSubmit}>
                <div className="form-group">
                  <label htmlFor="claimType">Type de réclamation *</label>
                  <select id="claimType" name="claimType" value={claimForm.claimType} onChange={handleClaimChange} required>
                    <option value="">Sélectionner un type</option>
                    <option value="specs">Spécifications incomplètes</option>
                    <option value="deadline">Délai irréaliste</option>
                    <option value="resources">Manque de ressources</option>
                    <option value="technical">Blocage technique</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="claimDescription">Description *</label>
                  <textarea id="claimDescription" name="claimDescription" rows="6" placeholder="Décrivez en détail votre réclamation..." value={claimForm.claimDescription} onChange={handleClaimChange} required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="claimPriority">Niveau d'urgence *</label>
                  <select id="claimPriority" name="claimPriority" value={claimForm.claimPriority} onChange={handleClaimChange} required>
                    <option value="high">Urgent - Bloque la progression</option>
                    <option value="medium">Moyen - Peut avancer partiellement</option>
                    <option value="low">Faible - Simple clarification</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline" onClick={() => setShowClaimModal(false)}>Annuler</button>
              <button type="submit" form="claimForm" className="btn btn-primary">Soumettre la réclamation</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
