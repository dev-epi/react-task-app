import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const todoTasks = [
  {
    id: 1, title: "Développer l'API de paiement", priority: 'Urgente', priorityClass: 'badge-danger',
    description: "Intégrer l'API Stripe pour gérer les paiements en ligne",
    assignee: 'JD', assigneeName: 'Jean Dupont', date: '15 Fév',
  },
  {
    id: 2, title: "Design de la page d'accueil", priority: 'Haute', priorityClass: 'badge-warning',
    description: "Créer les maquettes pour la nouvelle page d'accueil",
    assignee: 'SM', assigneeName: 'Sophie Martin', date: '18 Fév',
  },
]

const inProgressTasks = [
  {
    id: 3, title: 'Optimisation de la base de données', priority: 'Haute', priorityClass: 'badge-warning',
    description: 'Améliorer les performances des requêtes SQL',
    assignee: 'PL', assigneeName: 'Pierre Leblanc', pct: 65, pctClass: 'warning', pctColor: 'var(--warning-color)',
  },
  {
    id: 4, title: "Tests unitaires du module auth", priority: 'Moyenne', priorityClass: 'badge-info',
    description: "Écrire les tests pour le système d'authentification",
    assignee: 'JD', assigneeName: 'Jean Dupont', pct: 40, pctClass: '', pctColor: 'var(--primary-color)',
  },
]

const doneTasks = [
  {
    id: 5, title: 'Configuration du serveur', description: 'Mise en place du serveur de production',
    assignee: 'MD', assigneeName: 'Marie Dubois', date: '14 Fév',
  },
  {
    id: 6, title: 'Documentation API', description: "Rédiger la documentation complète de l'API",
    assignee: 'SM', assigneeName: 'Sophie Martin', date: '13 Fév',
  },
]

const claims = [
  {
    id: 1, title: 'Réclamation : Spécifications incomplètes', user: 'Jean Dupont', time: 'Il y a 5 min',
    badgeClass: 'badge-danger', badge: 'Urgent', borderColor: 'var(--danger-color)',
    description: "Les spécifications pour l'API de paiement ne sont pas complètes. Il manque les cas d'erreur et les webhooks.",
  },
  {
    id: 2, title: 'Réclamation : Délai trop court', user: 'Pierre Leblanc', time: 'Il y a 1h',
    badgeClass: 'badge-warning', badge: 'Haute', borderColor: 'var(--warning-color)',
    description: "Le délai de 3 jours pour optimiser toute la base de données est irréaliste. Il faudrait au moins 2 semaines.",
  },
]

const emptyForm = { taskTitle: '', taskDescription: '', assignedTo: '', priority: '', dueDate: '', tags: '' }

export default function TasksManagement() {
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState(emptyForm)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setShowModal(false)
    setForm(emptyForm)
  }

  return (
    <>
      <Navbar
        title="Gestion des Tâches"
        actions={
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Créer une tâche
          </button>
        }
      />

      <div className="content-area">
        <div className="card">
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div className="form-group" style={{ flex: 1, minWidth: '250px', margin: 0 }}>
              <input type="text" placeholder="Rechercher une tâche..." style={{ margin: 0 }} />
            </div>
            <div className="form-group" style={{ width: '200px', margin: 0 }}>
              <select style={{ margin: 0 }}>
                <option>Tous les statuts</option>
                <option>À faire</option>
                <option>En cours</option>
                <option>Terminé</option>
                <option>Réclamation</option>
              </select>
            </div>
            <div className="form-group" style={{ width: '200px', margin: 0 }}>
              <select style={{ margin: 0 }}>
                <option>Tous les employés</option>
                <option>Jean Dupont</option>
                <option>Sophie Martin</option>
                <option>Pierre Leblanc</option>
              </select>
            </div>
            <div className="form-group" style={{ width: '200px', margin: 0 }}>
              <select style={{ margin: 0 }}>
                <option>Toutes les priorités</option>
                <option>Urgente</option>
                <option>Haute</option>
                <option>Moyenne</option>
                <option>Basse</option>
              </select>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* À faire */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '3px solid var(--primary-color)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>À faire</h3>
              <span className="badge badge-primary">{todoTasks.length}</span>
            </div>
            <div className="task-list">
              {todoTasks.map((task) => (
                <div key={task.id} className="task-item">
                  <div className="task-item-header">
                    <div style={{ flex: 1 }}>
                      <div className="task-item-title">{task.title}</div>
                      <div className="task-item-meta">
                        <span className={`badge ${task.priorityClass}`}>{task.priority}</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '12px 0' }}>{task.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div className="user-avatar" style={{ width: '24px', height: '24px', fontSize: '10px' }}>{task.assignee}</div>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{task.assigneeName}</span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ display: 'inline', verticalAlign: 'middle' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {task.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* En cours */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '3px solid var(--warning-color)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>En cours</h3>
              <span className="badge badge-warning">{inProgressTasks.length}</span>
            </div>
            <div className="task-list">
              {inProgressTasks.map((task) => (
                <div key={task.id} className="task-item">
                  <div className="task-item-header">
                    <div style={{ flex: 1 }}>
                      <div className="task-item-title">{task.title}</div>
                      <div className="task-item-meta">
                        <span className={`badge ${task.priorityClass}`}>{task.priority}</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '12px 0' }}>{task.description}</p>
                  <div className="progress-bar" style={{ margin: '12px 0' }}>
                    <div className={`progress-bar-fill ${task.pctClass}`} style={{ width: `${task.pct}%` }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div className="user-avatar" style={{ width: '24px', height: '24px', fontSize: '10px' }}>{task.assignee}</div>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{task.assigneeName}</span>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: task.pctColor }}>{task.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminé */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '3px solid var(--success-color)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Terminé</h3>
              <span className="badge badge-success">{doneTasks.length}</span>
            </div>
            <div className="task-list">
              {doneTasks.map((task) => (
                <div key={task.id} className="task-item" style={{ opacity: 0.8 }}>
                  <div className="task-item-header">
                    <div style={{ flex: 1 }}>
                      <div className="task-item-title">{task.title}</div>
                      <div className="task-item-meta">
                        <span className="badge badge-success">Terminé</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '12px 0' }}>{task.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div className="user-avatar" style={{ width: '24px', height: '24px', fontSize: '10px' }}>{task.assignee}</div>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{task.assigneeName}</span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--success-color)' }}>
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20" style={{ display: 'inline', verticalAlign: 'middle' }}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {task.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Claims */}
        <div className="card" style={{ marginTop: '24px' }}>
          <div className="card-header">
            <h2>Réclamations en attente</h2>
            <span className="badge badge-danger">{claims.length}</span>
          </div>
          <div className="task-list">
            {claims.map((claim) => (
              <div key={claim.id} className="task-item" style={{ borderLeft: `4px solid ${claim.borderColor}` }}>
                <div className="task-item-header">
                  <div style={{ flex: 1 }}>
                    <div className="task-item-title">{claim.title}</div>
                    <div className="task-item-meta">
                      <span>
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {claim.user}
                      </span>
                      <span>
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {claim.time}
                      </span>
                      <span className={`badge ${claim.badgeClass}`}>{claim.badge}</span>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '12px 0' }}>{claim.description}</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <button className="btn btn-success btn-icon">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="btn btn-outline" style={{ flex: 1 }}>Voir la tâche</button>
                  <button className="btn btn-primary">Répondre</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Créer une nouvelle tâche</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: 'var(--text-secondary)' }}>&times;</button>
            </div>
            <div className="modal-body">
              <form id="addTaskForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Titre de la tâche *</label>
                  <input type="text" id="title" name="title" placeholder="Ex: Développer l'API REST" value={form.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description *</label>
                  <textarea id="description" name="description" placeholder="Décrivez la tâche en détail..." value={form.description} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="assignee">Assigner à *</label>
                  <select id="assignee" name="assignee" value={form.assignee} onChange={handleChange} required>
                    <option value="">Sélectionner un employé</option>
                    <option value="1">Jean Dupont</option>
                    <option value="2">Sophie Martin</option>
                    <option value="3">Pierre Leblanc</option>
                    <option value="4">Marie Dubois</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label htmlFor="priority">Priorité *</label>
                    <select id="priority" name="priority" value={form.priority} onChange={handleChange} required>
                      <option value="">Sélectionner</option>
                      <option value="urgent">Urgente</option>
                      <option value="high">Haute</option>
                      <option value="medium">Moyenne</option>
                      <option value="low">Basse</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dueDate">Date limite *</label>
                    <input type="date" id="dueDate" name="dueDate" value={form.dueDate} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="tags">Tags (optionnel)</label>
                  <input type="text" id="tags" name="tags" placeholder="frontend, api, urgent..." value={form.tags} onChange={handleChange} />
                  <small>Séparez les tags par des virgules</small>
                </div>
                <div className="alert alert-info">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>L'employé sélectionné recevra une notification par email concernant cette nouvelle tâche.</div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Annuler</button>
              <button type="submit" form="addTaskForm" className="btn btn-primary">Créer la tâche</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
